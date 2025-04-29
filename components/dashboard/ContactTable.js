// components/ContactTable.js
'use client';

import { motion } from 'framer-motion';
import { deleteContact } from '../services/contact'; // Service for deleting contact

export default function ContactTable({ messages }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="overflow-x-auto shadow-md border-b border-gray-200"
    >
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
              <td className="px-6 py-4">{message.message}</td>
              <td className="px-6 py-4">
                <button onClick={() => deleteContact(message.id)} className="text-red-600 hover:text-red-800">
                  Delete
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
