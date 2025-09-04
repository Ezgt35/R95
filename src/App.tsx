import React from 'react';
import { Github, Twitter, Instagram, Linkedin, ExternalLink, Rocket, Star } from 'lucide-react';
import './App.css';

function App() {
  const links = [
    {
  title: 'Script Bot',
  href: '/sc/sc.html',  // ganti dari url ke href
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
      icon: (
    <svg
      className="w-5 h-5 text-indigo-500"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.108.108 0 0 0-.115.054c-.494.875-.998 2.013-1.367 2.91a17.876 17.876 0 0 0-5.006 0c-.37-.905-.874-2.034-1.367-2.91A.106.106 0 0 0 8.115 3.1a19.736 19.736 0 0 0-3.432 1.27.096.096 0 0 0-.043.038C2.211 7.053 1.345 9.636 1.061 12.176c0 .012.004.024.01.034a19.923 19.923 0 0 0 5.993 3.049.112.112 0 0 0 .123-.03c.461-.634.874-1.304 1.226-2.01a.107.107 0 0 0-.06-.149 13.027 13.027 0 0 1-1.882-.901.107.107 0 0 1-.011-.177c.126-.094.252-.192.371-.291a.107.107 0 0 1 .112-.013c3.927 1.793 8.18 1.793 12.061 0a.107.107 0 0 1 .113.012c.12.099.245.197.372.291a.107.107 0 0 1-.01.177c-.6.346-1.217.655-1.883.902a.107.107 0 0 0-.06.148c.36.705.773 1.377 1.227 2.011a.107.107 0 0 0 .123.03 19.876 19.876 0 0 0 6.002-3.049.104.104 0 0 0 .01-.034c-.289-2.54-1.155-5.123-3.609-7.769a.092.092 0 0 0-.042-.038zM8.02 13.331c-1.18 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.096 2.157 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.18 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.096 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z"/>
    </svg>
  )
},
     {
  title: 'WhatsApp',
  url: 'https://wa.me/6288802747938',
  description: 'My WhatsApp',
  icon: (
    <svg
      className="w-5 h-5 text-green-500"
      fill="currentColor"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 3C9.372 3 4 8.372 4 15c0 2.652.869 5.113 2.353 7.13L4 29l7.153-2.336A12.92 12.92 0 0016 27c6.628 0 12-5.372 12-12S22.628 3 16 3zm0 22c-1.902 0-3.734-.489-5.334-1.403l-.381-.221-4.254 1.39 1.395-4.143-.247-.382A9.945 9.945 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.14-7.568c-.281-.141-1.662-.821-1.92-.916-.257-.096-.445-.141-.634.141-.187.28-.728.917-.892 1.105-.163.187-.326.211-.607.07-.281-.142-1.186-.437-2.259-1.396-.835-.746-1.398-1.67-1.563-1.951-.163-.281-.017-.431.123-.572.127-.127.28-.326.42-.489.142-.163.187-.281.281-.47.094-.188.047-.352-.024-.493-.07-.141-.634-1.53-.87-2.098-.229-.552-.463-.476-.634-.484-.163-.007-.351-.009-.538-.009-.187 0-.491.07-.749.352-.257.281-.976.954-.976 2.32 0 1.366.998 2.686 1.137 2.872.14.187 1.963 3.003 4.752 4.092.665.286 1.184.456 1.589.583.667.212 1.275.183 1.754.111.535-.08 1.662-.678 1.899-1.334.234-.654.234-1.215.164-1.334-.07-.119-.257-.187-.538-.327z"/>
    </svg>
  )
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
