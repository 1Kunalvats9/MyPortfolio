import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white">Kunal.dev</a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#footer" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/1kunalvats9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kunal-vats-b67aa2309" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            {/* <a 
              href="mailto:1kunalvats9@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a> */}
          </div>

          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}