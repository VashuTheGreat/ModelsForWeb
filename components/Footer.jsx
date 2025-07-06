import React from 'react';
import { Brain, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Heart, ArrowUp, Send } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'MyPortfolio', href: '#home' },
 
  ];

  const services = [
    { name: 'Machine Learning', href: '#' },
    { name: 'Deep Learning', href: '#' },
    { name: 'Data Analysis', href: '#' },
    { name: 'AI Consulting', href: '#' },
    { name: 'Model Training', href: '#' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram', color: 'hover:text-pink-400' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl font-bold">
                  ML<span className="text-purple-400">Portfolio</span>
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate about creating intelligent solutions through machine learning and artificial intelligence. 
                Let's build the future together!
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
                
           

              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="text-md font-semibold mb-3 text-white">Stay Updated</h4>
                <div className="flex">
                  <div
                  
                    className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  >
Visit My Portfolio
                  </div>
                  <a href='https://vashuthegreat.netlify.app/' target='_blank'>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 rounded-r-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    <Send className="w-5 h-5" />
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-1 text-gray-300 mb-4 md:mb-0">
                <span>© 2025 ML Portfolio. Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>by VashuTheGreat</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
                <button
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;