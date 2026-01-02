// import React from 'react'
    import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { LiaLinkedin } from "react-icons/lia";

export const Footer = ({ skillsRef, ProjectRef, AboutRef, TopRef, contactRef }: any) => {
      const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
    const scrollToAbout = () => {
    AboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
      const scrollToTop = () => {
    TopRef.current?.scrollIntoView({ behavior: "smooth" });
  };
        const scrollToProject = () => {
    ProjectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (

<div className=' bg-black '> 
{/* Footer */}
<footer className= " container mx-auto border-t border-gray-800 ">
  <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Left: Copyright */}
    <p className="text-gray-400 text-sm md:text-base">
      © 2025 Muhammad Sufyan. All rights reserved.
    </p>

    {/* Center: Social Links */}
    <div className="flex gap-4">
      <a 
        href="#"
        className="w-10 h-10 flex items-center justify-center border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
      >
        <FaLinkedin size={18} />
      </a>
      <a 
        href="https://wa.link/mp9q3u"
        className="w-10 h-10 flex items-center justify-center border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
      >
        <FaWhatsapp size={18} />
      </a>
      <a 
        href="https://github.com/Suficodes12"
        className="w-10 h-10 flex items-center justify-center border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
      >
        <FaGithub size={18} />
      </a>
    </div>

    {/* Right: Quick Links (Optional) */}
    <div className="flex lg:gap-6 md:gap-6 gap-4">
      <a onClick={scrollToTop} className="text-gray-400 hover:text-orange-500     cursor-pointer transition-colors">Home</a>
      <a onClick={scrollToAbout} className="text-gray-400 hover:text-orange-500   cursor-pointer transition-colors">About</a>
      <a onClick={scrollToSkills} className="text-gray-400 hover:text-orange-500  cursor-pointer transition-colors">Skills</a>
      <a onClick={scrollToProject} className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors">Project</a>
      <a onClick={scrollToContact} className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors">Contact</a>


    </div>
    
  </div>
</footer>

</div>


  )
}
