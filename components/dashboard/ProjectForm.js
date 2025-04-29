// components/ProfileForm.js
'use client';

import { useState } from 'react';
import { updateProfile } from '../services/profile'; // Service for profile API call
import { motion } from 'framer-motion';

export default function ProfileForm({ userProfile }) {
  const [profile, setProfile] = useState(userProfile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(profile); // Call the backend to update profile
    // Handle post-submit actions (e.g., redirect or success message)
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
        <textarea
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Bio"
        />
        <input
          type="url"
          value={profile.github_url}
          onChange={(e) => setProfile({ ...profile, github_url: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="GitHub URL"
        />
        <input
          type="url"
          value={profile.linkedin_url}
          onChange={(e) => setProfile({ ...profile, linkedin_url: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="LinkedIn URL"
        />
        <input
          type="file"
          onChange={(e) => setProfile({ ...profile, avatar: e.target.files[0] })}
          className="p-2 border rounded-lg w-full"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg">
          Save Changes
        </button>
      </div>
    </motion.form>
  );
}
