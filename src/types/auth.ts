// File: src/types/auth.ts
/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-05 15:00:00
 * Final user data interface.
 */

export interface UserFormData {
  email: string;
  password: string;
  name: string;
  username: string;
  bio?: string;
  socialLinks?: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
}

export interface UserData {
  id: string; // Unique ID from Firestore
  email: string;
  name: string;
  username: string;
  bio?: string;
  phone?: string;
  socialLinks?: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
}
