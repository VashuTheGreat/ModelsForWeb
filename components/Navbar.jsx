import React, { useState } from 'react';
import { Menu, X, Brain, Home, User, Code, FolderOpen, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home className="w-4 h-4" />, href: '#home' },
    { name: 'About', icon: <User className="w-4 h-4" />, href: '#about' },
    { name: 'Projects', icon: <FolderOpen className="w-4 h-4" />, href: '#projects' },
    { name: 'Skills', icon: <Code className="w-4 h-4" />, href: '#skills' },
    { name: 'Contact', icon: <Mail className="w-4 h-4" />, href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              ML<span className="text-purple-400">Portfolio</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
            <a href=''>
      <div className=" hover:underline decoration-white underline-offset-4 px-6 py-3 rounded-md bg-gradient-to-r from-white to-red-500 bg-[length:200%_200%] animate-gradient-x bg-clip-text text-transparent font-mono text-xl italic font-bold transition-all duration-300 hover:brightness-110 hover:scale-105 cursor-pointer">
  See My Portfolio
</div>



            </a>
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CTA Button */}
           <a href='https://vashuthegreat.netlify.app/' target='_blank'>
             <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Hire Me
            </button>
           </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-gray-300 hover:text-white px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <span className="hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Social Links & CTA */}
          <div className="px-2 py-3 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </nav>
  );
};

export default Navbar;