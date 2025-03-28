import React from 'react';
import { cn } from "@/lib/utils";

const Header = ({ activeSection, setActiveSection }) => (
  <header className="bg-gray-900 text-white py-4 border-b border-gray-800">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">Vivek Pandey</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            {['about', 'experience', 'skills', 'education', 'certifications', 'contact'].map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setActiveSection(section)}
                  className={cn(
                    "hover:text-purple-400 no-underline transition-colors duration-300",
                    activeSection === section && 'active-link text-purple-400 font-semibold border-b-2 border-purple-400'
                  )}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;