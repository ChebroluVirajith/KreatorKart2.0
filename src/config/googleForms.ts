interface FormField {
  name: string;
  entryId: string;
  type: string;
}

export const GOOGLE_FORMS_CONFIG = {
  formId: '16HewWXmJXcBkcJSb_oW68fDMWDBdgRhyg4vQjLs2kLw', // Replace with your Google Form ID
  fields: [
    { name: 'email', entryId: 'entry.97088971', type: 'text' },      // Replace with your form's entry IDs
    { name: 'password', entryId: 'entry.38576714', type: 'password' },
    { name: 'name', entryId: 'entry.823642395', type: 'text' },
    { name: 'username', entryId: 'entry.1014166626', type: 'text' },
    { name: 'bio', entryId: 'entry.297370027', type: 'text' },
    { name: 'instagram', entryId: 'eentry.940066834', type: 'text' },
    { name: 'youtube', entryId: 'entry.1467404137', type: 'text' },
    { name: 'tiktok', entryId: 'entry.37808738', type: 'text' }
  ]
};