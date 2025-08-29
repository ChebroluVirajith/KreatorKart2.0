import React, { useState, useEffect } from 'react';
import { GoogleSheetsService } from '../services/googleSheets';

const ResponsesViewer: React.FC = () => {
  const [responses, setResponses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const data = await GoogleSheetsService.getAllResponses();
        setResponses(data);
      } catch (err) {
        setError('Failed to load responses');
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  if (loading) return <div>Loading responses...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Form Responses</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Timestamp</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Bio</th>
              <th className="px-4 py-2">Social Links</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((response, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{response.timestamp}</td>
                <td className="px-4 py-2">{response.email}</td>
                <td className="px-4 py-2">{response.name}</td>
                <td className="px-4 py-2">{response.username}</td>
                <td className="px-4 py-2">{response.bio || '-'}</td>
                <td className="px-4 py-2">
                  <ul>
                    {response.instagram && (
                      <li>Instagram: {response.instagram}</li>
                    )}
                    {response.youtube && (
                      <li>YouTube: {response.youtube}</li>
                    )}
                    {response.tiktok && (
                      <li>TikTok: {response.tiktok}</li>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsesViewer;