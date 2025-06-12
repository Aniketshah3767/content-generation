// history/page.tsx
"use client";

import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

// Define the shape of history records
type HistoryRecord = {
  id: string;
  templeteSlug: string;
  aiResponse: string;
  formData: any;
  createdAt: string;
};

// Fetcher function using axios
const fetchHistory = async (email: string): Promise<HistoryRecord[]> => {
  const res = await axios.get(`/api/history?email=${email}`);
  return res.data; // Must be an array
};

const HistoryPage: React.FC = () => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress || '';

  const { data, isLoading } = useSWR(
    email ? [`history`, email] : null,
    () => fetchHistory(email),
    { refreshInterval: 5000 }
  );

  const history = Array.isArray(data) ? data : [];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">History</h1>
      <p className="mb-6 text-gray-600">Search your previously generated AI content</p>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">TEMPLATE</th>
              <th className="px-4 py-2 text-left">AI RESP</th>
              <th className="px-4 py-2 text-left">DATE</th>
              <th className="px-4 py-2 text-left">WORDS</th>
              <th className="px-4 py-2 text-left">COPY</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} className="text-center py-4">Loading...</td>
              </tr>
            ) : history.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4">No history found.</td>
              </tr>
            ) : (
              history.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{item.templeteSlug}</td>
                  <td className="px-4 py-3 text-sm text-gray-700 truncate max-w-xs">
                    {item.aiResponse.slice(0, 80)}...
                  </td>
                  <td className="px-4 py-3">{item.createdAt}</td>
                  <td className="px-4 py-3">{item.aiResponse.split(' ').length}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => copyToClipboard(item.aiResponse)}
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      Copy
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;