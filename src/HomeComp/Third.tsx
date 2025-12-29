// import React from 'react'

export const Third = () => {
  return (
<div className="bg-black py-20">
  <div className="container mx-auto px-6">

    {/* Section Heading */}
    <div className="flex justify-center mb-12">
      <h1 className="text-4xl font-bold text-white">
        My <span className="text-orange-500">Projects</span>
      </h1>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Project Card 1 */}
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src="./assets/project1.png"
          alt="Project 1"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            JSPOT – E-Commerce
          </h2>
          <p className="text-gray-400 mb-4">
            React + Vite + Tailwind CSS
          </p>
          <a
            href="#"
            className="bg-orange-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Project Card 2 */}
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src="./assets/project2.png"
          alt="Project 2"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Apex-web-experts
          </h2>
          <p className="text-gray-400 mb-4">
            React + Bootstrap
          </p>
          <a
            href="#"
            className="bg-orange-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Project Card 3 */}
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src="./assets/project3.png"
          alt="Project 3"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            App Mastroe
          </h2>
          <p className="text-gray-400 mb-4">
            Core-PHP + Bootstrap
          </p>
          <a
            href="#"
            className="bg-orange-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Live Demo
          </a>
        </div>
      </div>

    </div>
  </div>
</div>

  )
}
