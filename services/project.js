// services/project.js
import apiClient from './apiClient'
import axios from 'axios';
import https from 'https';

// Fetch all projects
export const getProjects = async () => {
  try {
    const response = await apiClient.get('/api/projects/')
    return response.data
  } catch (error) {
    console.error("Error fetching projects", error)
    throw error
  }
}

// Create a new project
export const createProject = async (projectData) => {
  try {
    const response = await apiClient.post('/api/projects/', projectData)
    return response.data
  } catch (error) {
    console.error("Error creating project", error)
    throw error
  }
}

// Update an existing project
export const updateProject = async (id, projectData) => {
  try {
    const response = await apiClient.put(`/api/projects/${id}/`, projectData)
    return response.data
  } catch (error) {
    console.error("Error updating project", error)
    throw error
  }
}

// Delete a project
export const deleteProject = async (id) => {
  try {
    await apiClient.delete(`/projects/${id}/`)
  } catch (error) {
    console.error("Error deleting project", error)
    throw error
  }
}



export async function getProjectDetails(id) {
  try {
    console.log(`Getting project details for ID: ${id}`);
    
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`API Base URL: ${apiUrl}`);
    
    if (!apiUrl) {
      console.error('API URL is not defined in environment variables');
      return null;
    }
    
    const projectUrl = `${apiUrl}/api/projects/${id}/`;
    console.log(`Making request to: ${projectUrl}`);
    
    // Create axios instance with certificate validation disabled
    const axiosInstance = axios.create({
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
    });
    
    const { data: project } = await axiosInstance.get(projectUrl, {
      timeout: 5000
    });
    
    console.log('Project data received:', project ? 'Success' : 'Empty');
    
    // Fetch images with the same axios instance
    try {
      const imagesUrl = `${apiUrl}/api/projects/${id}/images/`;
      const { data: images } = await axiosInstance.get(imagesUrl, {
        timeout: 5000
      });
      
      project.images = images;
    } catch (imageError) {
      console.error('Error fetching project images:', imageError.message);
      project.images = [];
    }
   
    return project;
  } catch (error) {
    console.error('Error fetching project:', error.message);
    // Rest of your error handling...
    return null;
  }
}