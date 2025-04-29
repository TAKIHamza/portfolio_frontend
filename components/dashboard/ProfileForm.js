// components/ProfileForm.js
'use client';

import { useState } from 'react';
import { updateProfile } from '../services/profile';
import { motion } from 'framer-motion';

export default function ProfileForm({ userProfile }) {
  const [profile, setProfile] = useState(userProfile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(profile);
    // Redirect or show a success message
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Full Name"
        />
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Email"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg">
          Save Changes
        </button>
      </div>
    </motion.form>
  );
}
