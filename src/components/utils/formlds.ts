/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-31 01:55:00
 * Utility functions for Google Form ID handling
 */

export const createTestSubmission = (formId: string) => {
  // Use the formId provided by the user to construct the viewform URL
  // This is crucial for inspecting the entry.IDs
  const baseUrl = `https://docs.google.com/forms/d/e/${formId}/viewform`;
  
  // Note: We are not sending actual data here, just opening the form to inspect its structure.
  return baseUrl;
};

export const validateFormId = (formId: string): boolean => {
  // Basic validation for Google Form ID format
  // Google Form IDs are typically long alphanumeric strings, often containing hyphens and underscores.
  return /^[a-zA-Z0-9_-]+$/.test(formId) && formId.length > 20;
};
