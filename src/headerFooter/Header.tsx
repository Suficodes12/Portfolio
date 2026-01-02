import { useEffect, useState } from "react";
import { Home, User, Briefcase, Layers, Mail } from "lucide-react";

export const Header = ({
  skillsRef,
  ProjectRef,
  AboutRef,
  TopRef,
  contactRef,
}: any) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <header
    //   className={`fixed  top-6 left-0 w-full z-50 transition-all duration-300
    //   ${scrolled ? "py-2 top-2 " : "py-0 top-6"}  text-white`}
    // >
    //   <div className="container mx-auto px-6 flex items-center justify-between">

    //     {/* Logo */}
    //     {!scrolled && (
    //       <div className="text-2xl font-bold">
    //         <span className="text-orange-500">Portfolio</span>
    //       </div>
    //     )}

    //     {/* NAVBAR */}
    //     <nav
    //       className={`flex items-center transition-all duration-300
    //       ${scrolled ? "gap-4 bg-neutral-900 px-6 py-3 rounded-full mx-auto shadow-lg" : "gap-8"}`}
    //     >
    //       <button onClick={() => scrollTo(TopRef)} className="hover:text-orange-500">
    //         <Home />
    //         {!scrolled && <span className="">Home</span>}
    //       </button>

    //       <button onClick={() => scrollTo(AboutRef)} className="hover:text-orange-500">
    //         <User />
    //         {!scrolled && <span className="">About</span>}
    //       </button>

    //       <button onClick={() => scrollTo(skillsRef)} className="hover:text-orange-500">
    //         <Layers />
    //         {!scrolled && <span className="">Skills</span>}
    //       </button>

    //       <button onClick={() => scrollTo(ProjectRef)} className="hover:text-orange-500">
    //         <Briefcase />
    //         {!scrolled && <span className="">Projects</span>}
    //       </button>

    //       <button onClick={() => scrollTo(contactRef)} className="hover:text-orange-500">
    //         <Mail />
    //         {!scrolled && <span className="">Contact</span>}
    //       </button>
    //     </nav>
    //   </div>
    // </header>

    <header
  className={`fixed top-6 left-0 w-full z-50 transition-all duration-300
  ${scrolled ? "py-2 top-2" : "py-0 top-6"} text-white`}
>
  <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

    {/* Logo → MOBILE par hide */}
    {!scrolled && (
      <div className="hidden md:block text-2xl font-bold">
        <span className="text-orange-500">Portfolio</span>
      </div>
    )}

    {/* NAVBAR */}
    <nav
      className={`flex items-center transition-all duration-300
      ${scrolled
        ? "gap-4 bg-neutral-900 px-4 md:px-6 py-3 rounded-full mx-auto shadow-lg"
        : "gap-4 md:gap-8 mx-auto md:mx-0"
      }`}
    >
      <button onClick={() => scrollTo(TopRef)} className="hover:text-orange-500 flex flex-col md:flex-row items-center gap-1">
        <Home />
         {!scrolled && <span className="lg:block hidden">Home</span>}
      </button>

      <button onClick={() => scrollTo(AboutRef)} className="hover:text-orange-500 flex flex-col md:flex-row items-center gap-1">
        <User />
         {!scrolled && <span className="lg:block hidden">About</span>}
      </button>

      <button onClick={() => scrollTo(skillsRef)} className="hover:text-orange-500 flex flex-col md:flex-row items-center gap-1">
        <Layers />
        {!scrolled && <span className="lg:block hidden">Skills</span>}
      </button>

      <button onClick={() => scrollTo(ProjectRef)} className="hover:text-orange-500 flex flex-col md:flex-row items-center gap-1">
        <Briefcase />
          {!scrolled && <span className="lg:block hidden">Projects</span>}
      </button>

      <button onClick={() => scrollTo(contactRef)} className="hover:text-orange-500 flex flex-col md:flex-row items-center gap-1">
        <Mail />
        {!scrolled && <span className="lg:block hidden">Contact</span>}
      </button>
    </nav>
  </div>
</header>
  );
};
