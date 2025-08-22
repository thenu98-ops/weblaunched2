import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full py-6 px-8 bg-gray-800 border-t border-blue-500/30">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Robotics & Electronics Club. All rights
          reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <TwitterIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>;
}