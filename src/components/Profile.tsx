import React from 'react';
import { Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-red-600 shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-neutral-800 dark:text-white font-serif">
              <span className="text-red-600">Alex</span> Morgan
            </h2>
            <h3 className="text-xl text-neutral-600 dark:text-neutral-300 mb-6 font-light">
              Web Developer & Digital Artist
            </h3>
            
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              Welcome to my personal website! I'm a passionate web developer with over 5 years of experience 
              creating beautiful, functional websites and applications. My expertise includes 
              frontend development, UI/UX design, and digital art creation. I'm constantly exploring new 
              technologies and design trends to deliver exceptional digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-red-600/10 text-red-600 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-red-600/10 text-red-600 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm">JavaScript</span>
              <span className="px-4 py-2 bg-red-600/10 text-red-600 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-red-600/10 text-red-600 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-red-600/10 text-red-600 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm">TailwindCSS</span>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors duration-300"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;