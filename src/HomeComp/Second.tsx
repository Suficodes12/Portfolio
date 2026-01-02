// import React from 'react'

export const Second = () => {
  return (
<div className="bg-black py-20">
  <div className="container mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-19">

      {/* IMAGE */}
      <div className="flex justify-center animated">
        <img
          src="./assets/aboutpic.png"
          alt="About Sufyan"
          className="rounded-2xl border border-gray-700 shadow-xl"
        />
      </div>

      {/* CONTENT */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-orange-500">Me</span>
        </h1>

        <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
          I am a passionate Frontend Developer with a strong focus on creating modern, responsive, and user-friendly web applications. I enjoy transforming complex problems into elegant and intuitive interfaces using React, TypeScript, and Tailwind CSS.  
          <br /><br />
          Over the years, I have worked on multiple projects ranging from small landing pages to fully-featured web applications. I constantly strive to learn new technologies and improve my skills to deliver high-quality solutions. My goal is to build web experiences that are not only functional but also visually appealing and enjoyable for users.
        </p>
    <a href="./assets/cv/sufyanresume.pdf.pdf" download={"./assets/cv/sufyanresume.pdf.pdf"}>
        <button className="bg-orange-500 cursor-pointer text-black px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
        Download Cv
        </button>
        </a>
      </div>

    </div>

  </div>
</div>


  )
}
