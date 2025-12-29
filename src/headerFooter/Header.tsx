

export const Header = () => {
  return (
       <header className="w-full bg-black text-white">
      <div className="container   mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-orange-500">Portfolio</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#services" className="hover:text-orange-500 transition">
            Skills
          </a>
            <a href="#services" className="hover:text-orange-500 transition">
            Project
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact Us
          </a>
        </nav>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <a
            href="#hire"
            className="bg-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Hire Me
          </a>
        </div>

      </div>
    </header>
  )
}
