// services/profile.js
import apiClient from './apiClient'

// Fetch profile data
export const getProfile = async () => {
  try {
    const response = await apiClient.get('/api/profiles/')
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching profile", error)
    throw error
  }
}

// Update profile
export const updateProfile = async (profileData) => {
  try {
    const response = await apiClient.put('/api/profiles/', profileData)
    return response.data
  } catch (error) {
    console.error("Error updating profile", error)
    throw error
  }
}
