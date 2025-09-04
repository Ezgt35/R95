import React from 'react';
import { Github, Twitter, Instagram, Linkedin, ExternalLink, Rocket, Star } from 'lucide-react';
import './App.css';

function App() {
  const links = [
    {
      title: 'Portfolio',
      url: 'https://portfolio.com',
      description: 'Explore my digital universe',
      icon: <Rocket className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Blog',
      url: 'https://blog.com',
      description: 'Journey through my thoughts',
      icon: <Star className="w-5 h-5 text-purple-400" />
    },
    {
  title: 'YouTube Channel',
  url: 'https://youtube.com/@ezgt1',
  description: 'Watch tech tutorials from space',
  icon: (
    <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a2.995 2.995 0 0 0-2.112-2.115C19.268 3.5 12 3.5 12 3.5s-7.268 0-9.386.571A2.995 2.995 0 0 0 .502 6.186C0 8.306 0 12 0 12s0 3.694.502 5.814a2.995 2.995 0 0 0 2.112 2.115C4.732 20.5 12 20.5 12 20.5s7.268 0 9.386-.571a2.995 2.995 0 0 0 2.112-2.115C24 15.694 24 12 24 12s0-3.694-.502-5.814ZM9.755 15.568V8.432L15.818 12l-6.063 3.568Z"/>
    </svg>
  )
},
    {
      title: 'Discord Community',
      url: 'https://discord.gg/ezgt',
      description: 'Join our cosmic tech community',
      icon: <Star className="w-5 h-5 text-indigo-400" />
    },
     {
      title: 'WhatsApp',
      url: 'https://wa.me/6288802747938',
      description: 'My WhatsApp',
      icon: <Star className="w-5 h-5 text-indigo-400" />
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
           <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-2 ring-blue-300 p-1 bg-gradient-to-r from-blue-200 via-blue-300 to-cyan-200">
              <img
                src="https://img1.pixhost.to/images/8436/637430585_zion.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1
  className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 text-transparent bg-clip-text"
  style={{
    textShadow: '2px 2px 0 #fff, 4px 4px 16px #3cf0ff, 0 0 12px #80eaff',
    WebkitTextStroke: '2px #2168a6',
    letterSpacing: '2px',
    animation: 'anime-glow-blue 1.5s infinite alternate'
  }}
>
  EZGT
</h1>
            <p className="text-indigo-200 text-lg">Profile</p>
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
            <p>© {new Date().getFullYear()} EZGT • Profile</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
