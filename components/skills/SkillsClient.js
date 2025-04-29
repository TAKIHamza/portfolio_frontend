"use client";

import { useState } from 'react';
import SkillFilter from './SkillFilter';
import SkillsGrid from './SkillsGrid';

export default function SkillsClient({ 
  initialSkills 
}) {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <SkillFilter 
        initialFilter={filter}
        onFilterChange={setFilter}
      />
      <SkillsGrid 
        skills={initialSkills} 
        filter={filter} 
      />
    </>
  );
}