import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', href: '#', icon: 'fab fa-linkedin' },
    { name: 'Facebook', href: '#', icon: 'fab fa-facebook' },
    { name: 'Instagram', href: '#', icon: 'fab fa-instagram' }
  ]

  const footerLinks = {
    Product: [
      { name: 'Features', href: 'features' },
      { name: 'Pricing', href: 'pricing' },
      { name: 'Integrations', href: '#' },
      { name: 'Updates', href: '#' }
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'Support', href: '#' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link 
              to="home" 
              smooth={true} 
              className="text-2xl font-bold text-white cursor-pointer"
            >
              YourSaaS
            </Link>
            <p className="text-gray-400 mt-4">
              Empowering businesses with innovative SaaS solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      smooth={true}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} YourSaaS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
