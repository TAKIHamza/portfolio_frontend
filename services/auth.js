// services/auth.js
import { deleteCookie } from 'cookies-next'
import apiClient from './apiClient'

// Check if the user is authenticated
export const isAuthenticated = () => {
  return !!getCookie("auth_token")
}

// Log out the user
export const logout = () => {
  deleteCookie("auth_token")
  deleteCookie("refresh_token")
  localStorage.removeItem("user")
}

// You can add functions for token refresh here if needed
