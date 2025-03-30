import { useState } from "preact/hooks";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="w-full bg-white shadow-md px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="font-bold text-xl">Logo</div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <a href="/" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</a>
          <a href="/showcase" className="text-gray-800 hover:text-blue-600 transition duration-300">Showcase</a>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <a href="/" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/showcase" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Showcase</a>
          </div>
        </div>
      )}
    </nav>
  );
}
