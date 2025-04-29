// services/apiClient.js
import axios from 'axios'
import { getCookie } from 'cookies-next'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
  httpsAgent: process.env.NODE_ENV === 'development' 
    ? new (require('https').Agent)({ rejectUnauthorized: false })
    : undefined,
  withCredentials: true
})

// Add the token to every request
apiClient.interceptors.request.use((config) => {
  const token = getCookie("auth_token")  // Get the token from cookies
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

export default apiClient
