
import React from 'react';

import SkillItem from './SkillItem';
import type { SkillCategory } from '../types';

interface SkillsCardProps {
  category: SkillCategory;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ category }) => {
  return (
   <div className="bg-black rounded-[3rem] p-10 md:p-14 shadow-2xl border border-gray-800 flex flex-col items-center">
  <h2 className="text-orange-500 md:text-xl text-lg lg:text-2xl font-semibold mb-10 tracking-wide">
    {category.title}
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 w-full">
    {category.skills.map((skill, index) => (
      <SkillItem key={index} skill={skill} />
    ))}
  </div>
</div>
  );
};

export default SkillsCard;
