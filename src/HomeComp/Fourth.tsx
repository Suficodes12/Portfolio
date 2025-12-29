
import React, { useEffect, useState } from 'react';


import SkillsCard from '../skillscomp/SkillsCard';
import { SKILL_CATEGORIES } from '../constants';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay for entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-black text-white flex flex-col items-center justify-center p-6 md:p-12">
      {/* Header Section */}
      <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <p className="text-gray-400 uppercase tracking-[0.3em] text-xs font-semibold mb-2">Technical Proficiency</p>
        <h1 className="text-4xl md:text-6xl font-bold">
          My <span className="text-[#E88C30]">Skills</span>
        </h1>
        <div className="w-24 h-1 bg-[#E88C30] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Main Grid Container */}
      <div className={`container mx-auto max-w-7xl transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillsCard key={index} category={category} />
          ))}
        </div>
      </div>

      {/* Footer / Decorative Element */}
      <div className="text-center mt-20 text-gray-500 text-sm italic">
        Always learning and evolving with the modern web.
      </div>
    </div>
  );
};

export default App;
