/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 19:30:01
 */

export interface FormConfig {
  formId: string;
  fields: FormField[];
}

export interface FormField {
  name: string;
  entryId: string;
  type: 'text' | 'email' | 'password' | 'textarea';
  required: boolean;
  value?: string;
}