"use client";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setCookie, deleteCookie } from "cookies-next";
import NavBar from "@/components/NavBar";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    deleteCookie("auth_token");
  
    try {
      const formData = new FormData(e.target);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login/`,
        {
          email: formData.get('email'),
          password: formData.get('password')
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
  
      // Debugging logs
      console.log('Login response:', data);
  
      // Store tokens if they exist
      if (data.access_token || data.access) {
        const accessToken = data.access_token || data.access;
        setCookie("auth_token", accessToken, { 
          maxAge: 60 * 60,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/'
        });
      }
  
      // Store user data if it exists
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
  
      // Ensure navigation happens
      router.push("/dashboard");
      router.refresh(); // Force a refresh of the page
  
    } catch (err) {
      console.error('Login error:', err);
      const errorMessage = err.response?.data?.error || 
                         err.response?.data?.message || 
                         err.message || 
                         "Login failed. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <NavBar></NavBar>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="w-full max-w-md"
      >
        <motion.div variants={item} className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-lg shadow-lg transform -rotate-3 sm:rotate-0" />
          
          <motion.div
            variants={item}
            className="relative bg-white rounded-lg shadow-lg p-8 sm:p-10"
          >
            <motion.h1 
              variants={item}
              className="text-2xl font-semibold text-center mb-6"
            >
              Welcome Back
            </motion.h1>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={container} className="space-y-4">
                <motion.div variants={item} className="relative">
                  <input
                    autoComplete="email"
                    id="email"
                    name="email"
                    type="email"
                    className="peer block w-full px-0 pt-3 pb-2 border-0 border-b-2 border-gray-300 text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    title="Please enter a valid email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-cyan-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </motion.div>

                <motion.div variants={item} className="relative">
                  <input
                    autoComplete="current-password"
                    id="password"
                    name="password"
                    type="password"
                    className="peer block w-full px-0 pt-3 pb-2 border-0 border-b-2 border-gray-300 text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                    minLength={8}
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$"
                    title="Minimum 8 characters with at least one letter and one number"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-cyan-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </motion.div>
              </motion.div>

              <motion.div variants={item}>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-cyan-500 to-sky-600 text-white py-3 px-4 rounded-md hover:from-cyan-600 hover:to-sky-700 transition-all duration-300 shadow-md ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  aria-label={loading ? "Signing in..." : "Sign in"}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Authenticating...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </motion.div>
            </form>

            <motion.div variants={item} className="mt-6 text-center text-sm">
              <a
                href="/forgot-password"
                className="text-cyan-600 hover:text-cyan-800 hover:underline"
              >
                Forgot password?
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}