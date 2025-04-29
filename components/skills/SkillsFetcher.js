'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import SkillsClient from './SkillsClient'

export default function SkillsFetcher() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
       
        const response = await axios.get(
           `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/skills/`
        )
        setSkills(response.data)
      } catch (err) {
        setError('Failed to load skills')
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  if (loading) return <div className="fixed inset-0 flex items-center justify-center">
                    <div className=" rounded-md h-12 w-12 border-4 border-t-4 border-sky-700 animate-spin absolute"></div></div>
  
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>

  return <SkillsClient initialSkills={skills} />
}