import React from 'react';
import { Github, Twitter, Instagram, Linkedin, ExternalLink, Rocket, Star } from 'lucide-react';
import './App.css';

function App() {
  const links = [
    {
      title: 'Portfolio',
      url: 'https://portfolio.ezgt.com',
      description: 'Explore my digital universe',
      icon: <Rocket className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Blog',
      url: 'https://blog.ezgt.com',
      description: 'Journey through my thoughts',
      icon: <Star className="w-5 h-5 text-purple-400" />
    },
    {
      title: 'YouTube Channel',
      url: 'https://youtube.com/@ezgt',
      description: 'Watch tech tutorials from space',
      icon: <ExternalLink className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Discord Community',
      url: 'https://discord.gg/ezgt',
      description: 'Join our cosmic tech community',
      icon: <Star className="w-5 h-5 text-indigo-400" />
    },
     {
      title: 'WhatsApp',
      url: 'https://discord.gg/ezgt',
      description: 'My WhatsApp',
      icon: <Phone className="w-5 h-5 text-indigo-400" />
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/ezgt', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/ezgt', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/ezgt', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/ezgt', label: 'LinkedIn' }
  ];

  return (
    <>
      <div className="stars"></div>
      <div className="min-h-screen bg-gradient-to-b from-transparent via-black/50 to-black text-white py-16 px-4 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-2 ring-indigo-500 p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
              <img
                src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
              R95
            </h1>
            <p className="text-indigo-200 text-lg">Navigating the digital cosmos</p>
          </div>

          <div className="space-y-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-black/50 backdrop-blur-sm hover:bg-indigo-900/30 transition-all duration-300 rounded-xl p-6 text-left group glow fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-indigo-900/50 rounded-lg">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg mb-1 group-hover:text-indigo-300 transition-colors">
                      {link.title}
                    </h2>
                    <p className="text-sm text-indigo-200/70">{link.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 flex justify-center space-x-6 fade-in" style={{ animationDelay: '0.6s' }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/50 hover:bg-indigo-900/30 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <footer className="mt-16 text-center text-sm text-indigo-200/50 fade-in" style={{ animationDelay: '0.8s' }}>
            <p>© {new Date().getFullYear()} R95 • Exploring the digital frontier</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
