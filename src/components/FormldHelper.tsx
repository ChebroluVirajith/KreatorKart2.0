import { useState } from 'react';
import { Button } from './ui/button';
import { createTestSubmission, validateFormId } from 'src/components/utils/formlds';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 19:24:30
 */

const FormIdHelper = () => {
  const [formId, setFormId] = useState('');
  const [testUrl, setTestUrl] = useState('');
  const [error, setError] = useState('');

  const handleCreateTestUrl = () => {
    setError('');
    
    if (!formId) {
      setError('Please enter a Form ID');
      return;
    }

    if (!validateFormId(formId)) {
      setError('Invalid Form ID format');
      return;
    }

    const url = createTestSubmission(formId);
    setTestUrl(url);
    window.open(url, '_blank');
  };

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Enter your Google Form ID:
        </label>
        <input
          type="text"
          value={formId}
          onChange={(e) => {
            setFormId(e.target.value);
            setError('');
          }}
          className="w-full p-2 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Form ID from URL"
        />
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
      </div>

      <Button
        onClick={handleCreateTestUrl}
        disabled={!formId}
        className="w-full gradient-neon text-white hover:scale-105 transition-transform duration-300 disabled:opacity-50"
      >
        Create Test Submission
      </Button>

      {testUrl && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
          <h3 className="font-medium text-gray-900">Next Steps:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>Click the link that opened in a new tab</li>
            <li>Right-click on each form field and select "Inspect"</li>
            <li>In the developer tools, look for <code className="bg-gray-200 px-1 rounded">name="entry.123456789"</code></li>
            <li>Copy these entry IDs for each field</li>
          </ol>
          <div className="mt-4 text-sm text-gray-500">
            <p>Example entry ID format: <code className="bg-gray-200 px-1 rounded">entry.123456789</code></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormIdHelper;