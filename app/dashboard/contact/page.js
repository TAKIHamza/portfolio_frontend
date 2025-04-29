// dashboard/contact/page.js
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getContacts, deleteContact } from '@/services/contact';

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const data = await getContacts();
      setMessages(data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
      setError("Failed to load messages. Please try again.");
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (messageId) => {
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteContact(messageId);
        await fetchMessages(); // Refresh the messages after deletion
      } catch (err) {
        console.error("Failed to delete message:", err);
        setError("Failed to delete message. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center h-64"
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      >
        {error}
        <button 
          onClick={fetchMessages}
          className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Retry
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Contact Messages</h2>
      
      {messages.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 p-8 rounded-lg text-center"
        >
          <p className="text-gray-500 mb-4">No messages found</p>
        </motion.div>
      ) : (
        <div className="overflow-x-auto shadow-md border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Message</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <motion.tr
                  key={message.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4">{message.name}</td>
                  <td className="px-6 py-4">{message.email}</td>
                  <td className="px-6 py-4 max-w-xs truncate">{message.message}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(message.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}