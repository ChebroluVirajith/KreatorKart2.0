/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 19:30:01
 */

import { FormConfig } from 'src/types/form';

export const saveFormConfig = (config: FormConfig): void => {
  localStorage.setItem('formConfig', JSON.stringify(config));
};

export const getFormConfig = (): FormConfig | null => {
  const stored = localStorage.getItem('formConfig');
  return stored ? JSON.parse(stored) : null;
};

export const validateConfig = (config: FormConfig): boolean => {
  return !!(config.formId && Array.isArray(config.fields));
};