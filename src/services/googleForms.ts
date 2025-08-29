import { UserFormData, UserData } from '@/types/auth';
import { FormConfig } from '@/types/form';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-31 00:55:00
 * Service functions for interacting with Google Forms for user authentication and data submission with enhanced error handling.
 */

// Get form configuration from local storage
const formConfig = localStorage.getItem('formConfig');
const config: FormConfig = formConfig ? JSON.parse(formConfig) : {
  formId: '',
  fields: []
};

// --- NEW LOG HERE ---
console.log('googleForms.ts: Loaded formConfig from localStorage:', config);
// --- END NEW LOG ---

/**
 * Hashes a given password using SHA-256 algorithm.
 * @param password The plaintext password to hash.
 * @returns A Promise that resolves to the SHA-256 hash of the password as a hexadecimal string.
 */
const hashPassword = async (password: string): Promise<string> => {
  console.log('googleForms.ts: Hashing password...');
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    const hashedPassword = Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    console.log('googleForms.ts: Password hashed successfully.');
    return hashedPassword;
  } catch (error) {
    console.error('googleForms.ts: Error during password hashing:', error);
    throw error; // Re-throw to propagate the error
  }
};

/**
 * Submits user data to a configured Google Form.
 * @param data The user form data to submit.
 * @returns A Promise that resolves to true if the submission was attempted, false otherwise.
 * @throws {Error} If Form ID or fields are not configured.
 */
export const submitToGoogleForm = async (data: UserFormData): Promise<boolean> => {
  console.log('googleForms.ts: submitToGoogleForm called.');
  try {
    // Explicitly check for formId and fields configuration
    if (!config.formId) {
      const errorMessage = 'Google Form ID is not configured. Please set it up in localStorage.';
      console.error('googleForms.ts: Error:', errorMessage);
      throw new Error(errorMessage);
    }
    if (!config.fields || config.fields.length === 0) {
      const errorMessage = 'Google Form fields are not configured. Please set them up in localStorage.';
      console.error('googleForms.ts: Error:', errorMessage);
      throw new Error(errorMessage);
    }
    
    console.log('googleForms.ts: Using Form ID:', config.formId);
    console.log('googleForms.ts: Using Form Fields:', config.fields);

    const formData = new FormData();
    
    const hashedPassword = await hashPassword(data.password);
    console.log('googleForms.ts: Hashed password for form submission.');
    
    config.fields.forEach(field => {
      if (field.type === 'password') {
        formData.append(field.entryId, hashedPassword);
        console.log(`googleForms.ts: Appended hashed password to entryId: ${field.entryId}`);
      } else {
        const value = data[field.name as keyof UserFormData];
        if (value !== undefined && value !== null) {
          formData.append(field.entryId, value.toString());
          console.log(`googleForms.ts: Appended field '${field.name}' with entryId: ${field.entryId}, value: ${value}`);
        } else {
          console.log(`googleForms.ts: Field '${field.name}' is undefined or null, skipping.`);
        }
      }
    });

    console.log(`googleForms.ts: Sending POST request to Google Forms...`);
    await fetch(
      `https://docs.google.com/forms/d/${config.formId}/formResponse`,
      {
        method: 'POST',
        mode: 'no-cors', 
        body: formData
      }
    );

    console.log('googleForms.ts: Google Form submission request sent (no-cors).');
    return true;
  } catch (error) {
    // Catch the error and re-throw it to be handled by the calling function (AuthContext)
    // This ensures specific error messages are propagated.
    if (error instanceof Error && (error.message.includes('Form ID not configured') || error.message.includes('Form fields are not configured'))) {
      throw error; // Re-throw custom error
    }
    console.error('googleForms.ts: Generic error submitting form to Google Forms:', error);
    return false; // For other unexpected errors, return false
  }
};

/**
 * Validates user credentials against locally stored user data.
 * @param email The user's email.
 * @param password The user's plaintext password.
 * @returns A Promise that resolves to UserData if credentials are valid, otherwise null.
 */
export const validateCredentials = async (email: string, password: string): Promise<UserData | null> => {
  console.log('googleForms.ts: validateCredentials called for email:', email);
  try {
    const hashedPassword = await hashPassword(password);
    console.log('googleForms.ts: Password hashed for validation comparison.');
    
    const localStorageKey = `user_${email}`;
    console.log('googleForms.ts: Checking localStorage for key:', localStorageKey);
    const storedUser = localStorage.getItem(localStorageKey);

    if (storedUser) {
      console.log('googleForms.ts: User data found in localStorage.');
      const userData = JSON.parse(storedUser);
      console.log('googleForms.ts: Parsed stored user data:', userData);

      if (userData.passwordHash === hashedPassword) {
        console.log('googleForms.ts: Hashed passwords match. Credentials valid.');
        return {
          email: userData.email,
          name: userData.name,
          username: userData.username,
          bio: userData.bio,
          socialLinks: userData.socialLinks
        };
      } else {
        console.log('googleForms.ts: Hashed passwords do NOT match. Credentials invalid.');
      }
    } else {
      console.log('googleForms.ts: No user data found in localStorage for this email.');
    }
    
    return null;
  } catch (error) {
    console.error('googleForms.ts: Error during credential validation:', error);
    return null;
  }
};

/**
 * Checks if an email already exists in local storage.
 * @param email The email to check.
 * @returns A Promise that resolves to true if the email exists, false otherwise.
 */
export const checkEmailExists = async (email: string): Promise<boolean> => {
  console.log('googleForms.ts: checkEmailExists called for email:', email);
  try {
    const localStorageKey = `user_${email}`;
    const exists = !!localStorage.getItem(localStorageKey);
    console.log(`googleForms.ts: Email '${email}' exists in localStorage: ${exists}`);
    return exists;
  } catch (error) {
    console.error('googleForms.ts: Error checking email existence:', error);
    return false;
  }
};
