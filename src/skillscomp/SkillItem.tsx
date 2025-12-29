
import React from 'react';
import type { Skill } from '../types';


interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="flex items-center space-x-4 p-2 transition-transform hover:scale-105 duration-300">
      <div className={`text-3xl w-10 flex justify-center items-center ${skill.color || 'text-white'}`}>
        <i className={skill.icon}></i>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-sm tracking-wider uppercase">
          {skill.name}
        </span>
        <span className="text-gray-300 text-xs font-medium">
          {skill.level}
        </span>
      </div>
    </div>
  );
};

export default SkillItem;
