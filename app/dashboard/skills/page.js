// app/dashboard/skills/page.js
import SkillList from '@/components/dashboard/SkillList';
import { getSkills } from '@/services/skill'; // suppose que tu as une fonction pour fetch les skills

export default async function SkillsPage() {
  const skills = await getSkills();

  return <SkillList skills={skills} />;
}
