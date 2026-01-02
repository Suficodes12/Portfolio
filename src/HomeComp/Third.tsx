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
          src="./assets/download.png"
          alt="Project 1"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
           Aivaz Website
          </h2>
          <p className="text-gray-400 mb-4">
            Next.Js + Tailwind CSS +  Typescript
          </p>
          <a
            href="https://aivaz-esj5.vercel.app/"
            className="bg-orange-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Project Card 2 */}
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src="./assets/wedsquotes.png"
          alt="Project 2"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
           WedsQuots-Admin Panel
          </h2>
          <p className="text-gray-400 mb-4">
            React + Typescript + Tailwind
          </p>
          <a
            href="http://wedsquotes-admin.netlify.app/"
            className="bg-orange-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Live Demo
          </a>
        </div>
      </div>

     
     
  {/* Project Card 3 */}
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src="./assets/theiconic.png"
          alt="Project 3"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
           The Iconic builder
          </h2>
          <p className="text-gray-400 mb-4">
          Wordpress
          </p>
          <a
            href="https://theiconicbuilder.com/"
            className="bg-orange-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Project Card 4 */}
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src="./assets/Ecomerce.png"
          alt="Project 3"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Mobile Store
          </h2>
          <p className="text-gray-400 mb-4">
           Html + CSS + JavaScript
          </p>
          <a
            href="https://dashing-elf-4efa17.netlify.app/samsung"
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
