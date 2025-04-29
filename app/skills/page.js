import NavBar from '@/components/NavBar'
import SkillsFetcher from '@/components/skills/SkillsFetcher'

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]  font-[family-name:var(--font-geist-sans)]">
      <NavBar></NavBar>
      <div className="max-w-6xl mt-6 mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            My <span className="text-sky-600">Skills</span>
          </h1>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
         
        </div>

          <SkillsFetcher />
        
      </div>
    </div>
  )
}