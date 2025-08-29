import { useState } from 'react';
import { Button } from './ui/button';
import { testFormSubmission } from '../services/googleForms';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 19:09:49
 */

const TestFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleTestSubmission = async () => {
    setIsSubmitting(true);
    setResult(null);

    try {
      const success = await testFormSubmission();
      if (success) {
        setResult('✅ Test submission successful! Check your Google Sheet.');
      } else {
        setResult('❌ Test submission failed. Check console for errors.');
      }
    } catch (error) {
      setResult('❌ Error during test submission. Check console for details.');
      console.error('Test submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <Button
        onClick={handleTestSubmission}
        disabled={isSubmitting}
        className="gradient-neon text-white hover:scale-105 transition-transform duration-300"
      >
        {isSubmitting ? 'Submitting...' : 'Test Form Submission'}
      </Button>

      {result && (
        <p className={result.includes('✅') ? 'text-green-500' : 'text-red-500'}>
          {result}
        </p>
      )}

      <div className="text-sm text-gray-600">
        <p>After clicking the test button:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Wait a few seconds for the submission to complete</li>
          <li>Check your Google Sheet for a new test entry</li>
          <li>The test data should appear as a new row</li>
        </ol>
      </div>
    </div>
  );
};

export default TestFormSubmission;