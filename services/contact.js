// services/contact.js
import axios from 'axios'
import apiClient from './apiClient'
import https from 'https';

// Fetch contact messages
export const getContacts = async () => {
  try {
    const response = await apiClient.get('/api/contact/')
    return response.data
  } catch (error) {
    console.error("Error fetching contacts", error)
    throw error
  }
}

// Delete a contact message
export const deleteContact = async (id) => {
  try {
    await apiClient.delete(`/api/contact/${id}/`)
  } catch (error) {
    console.error("Error deleting contact", error)
    throw error
  }
}


export async function submitContactMessage(formData) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Making request to: ${apiUrl}/api/contact/`);
    
    if (!apiUrl) {
      console.error('API URL is not defined in environment variables');
      throw new Error('API URL not configured');
    }

    const axiosInstance = axios.create({
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
    });

    // Hardcoded user ID 1
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      user: 1  // Always use user ID 1
    };

    const response = await axiosInstance.post(`${apiUrl}/api/contact/`, payload, {
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Message submitted successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact message:', error.message);
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to submit message');
    } else {
      throw new Error('Network error while submitting message');
    }
  }
}