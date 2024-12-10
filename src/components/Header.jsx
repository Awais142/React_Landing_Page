import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Features', href: 'features' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'About', href: 'about' }
  ]

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="home" 
            smooth={true} 
            className="text-2xl font-bold text-blue-600 cursor-pointer"
          >
            YourSaaS
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              smooth={true}
              className="text-gray-600 hover:text-blue-600 transition duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
