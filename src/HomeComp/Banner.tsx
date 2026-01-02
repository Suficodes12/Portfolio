import  { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import TextType from './TextType';

export const Banner = () => {
    
const texts: string[] = [
  "React Js",
  "Next js",
  "Worderpress",
];


  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (


<div className="bg-black lg:py-12">
  <div className="container mx-auto px-6 py-14">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-10">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="mdtext-4xl text-2xl  lg:text-6xl font-bold text-white mb-4">
          Hi, I’m <span className="text-orange-500">Sufyan</span>
        </h1>

        <h3 className="md:text-2xl text-xl lg:text-3xl font-semibold text-gray-300 mb-6">
          Frontend Developer
        </h3>

        {/* Typing Animation */}
        <h2 className="md:text-xl text-base lg:text-2xl font-semibold text-white mb-6">
          Technologies We Use{" "}
          <span className="text-orange-500 border-r-2 border-orange-500 pr-1 animate-pulse">
            {currentText}
          </span>
        </h2>

        <p className="text-gray-400 lg:max-w-lg md:max-w-lg mb-8">
          I build modern, fast and responsive web applications using
          the latest frontend technologies.
        </p>

        {/* Buttons */}
        <div className=" flex  gap-4 mb-8">
        <a href="mailto:muhammadsufyann898@gmail.com">  <button className="bg-orange-500 cursor-pointer duration-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
            Hire Me
          </button></a>

        <a href="https://wa.link/mp9q3u"><button className="border border-orange-500 cursor-pointer duration-700 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-black transition">
            Let’s Talk
          </button></a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl text-gray-300">
         <FaLinkedin className="hover:text-orange-500 cursor-pointer transition" />
       <a
  href="https://wa.link/mp9q3u"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="hover:text-orange-500 cursor-pointer transition" />
</a>
       <a href="https://github.com/Suficodes12"><FaGithub className="hover:text-orange-500 cursor-pointer transition" /></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center animated">
        <img
          src="./assets/frontimage.jpg"
          alt="Frontend Developer"
          className="rounded-2xl border border-gray-700 shadow-xl"
        />
      </div>

    </div>
  </div>
</div>

  )
}
