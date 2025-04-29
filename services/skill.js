// services/skill.js
import apiClient from './apiClient'

// Fetch all skills
export const getSkills = async () => {
  try {
    const response = await apiClient.get('/api/skills/')
    return response.data
  } catch (error) {
    console.error("Error fetching skills", error)
    throw error
  }
}

export const getSkill = async (id) => {
  try {
    const response = await apiClient.get(`/api/skills/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching skill with id ${id}:`, error);
    throw error;
  }
};

// Create a new skill
export const createSkill = async (skillData) => {
  try {
    const response = await apiClient.post('/api/skills/', skillData)
    return response.data
  } catch (error) {
    console.error("Error creating skill", error)
    throw error
  }
}

// Update an existing skill
export const updateSkill = async (id, skillData) => {
  try {
    const response = await apiClient.put(`/api/skills/${id}/`, skillData)
    return response.data
  } catch (error) {
    console.error("Error updating skill", error)
    throw error
  }
}

// Delete a skill
export const deleteSkill = async (id) => {
  try {
    await apiClient.delete(`/api/skills/${id}/`)
  } catch (error) {
    console.error("Error deleting skill", error)
    throw error
  }
}
