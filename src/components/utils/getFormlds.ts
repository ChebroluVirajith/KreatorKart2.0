/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 19:13:53
 */

export const createTestSubmission = (formId: string) => {
  // Create a form submission URL with test data
  const testData = {
    'Email': 'test@example.com',
    'Password': 'testpassword123',
    'Name': 'Test User',
    'Username': 'testuser',
    'Bio': 'Test bio',
    'Instagram Profile': 'test_instagram',
    'YouTube Channel': 'test_youtube',
    'TikTok Profile': 'test_tiktok'
  };

  // Base form URL
  const baseUrl = 'https://docs.google.com/forms/d/19o4jY49a1VT2N1KjtEYy_pl0kvWFBvx_qfZRRnQPTVg/edit';
  return baseUrl;
};