// components/ConfirmDeleteModal.js
'use client';

import { motion } from 'framer-motion';

export default function ConfirmDeleteModal({ onDelete, onClose, itemName }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
    >
      <motion.div 
        initial={{ y: -50 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete {itemName}?</h2>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">
            Cancel
          </button>
          <button onClick={onDelete} className="px-4 py-2 bg-red-600 text-white rounded-md">
            Confirm
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
