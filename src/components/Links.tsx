import React from 'react';
import { ExternalLink, Star, Bookmark, Heart, Music, Coffee, Book, Code } from 'lucide-react';

interface LinkItemProps {
  title: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ title, url, description, icon, category }) => {
  return (
    <div className="group bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="p-2 bg-red-600/10 dark:bg-red-900/30 rounded-full mr-3">
              {icon}
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 dark:text-white">{title}</h3>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">{category}</span>
            </div>
          </div>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neutral-500 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-500 transition-colors duration-300"
            aria-label="Open link"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">{description}</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 text-sm transition-colors duration-300"
        >
          Visit Site
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

const Links: React.FC = () => {
  const linkCategories = [
    {
      name: 'Development Resources',
      links: [
        {
          title: 'MDN Web Docs',
          url: 'https://developer.mozilla.org',
          description: 'Comprehensive web development documentation for HTML, CSS, and JavaScript.',
          icon: <Code className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Documentation'
        },
        {
          title: 'GitHub',
          url: 'https://github.com',
          description: 'Platform for hosting and collaborating on code repositories.',
          icon: <Code className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Development'
        },
        {
          title: 'Stack Overflow',
          url: 'https://stackoverflow.com',
          description: 'Community-based platform for developers to ask and answer programming questions.',
          icon: <Code className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Community'
        },
      ]
    },
    {
      name: 'Design Inspiration',
      links: [
        {
          title: 'Dribbble',
          url: 'https://dribbble.com',
          description: 'Platform for designers to showcase their work and find inspiration.',
          icon: <Star className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Design'
        },
        {
          title: 'Behance',
          url: 'https://behance.net',
          description: 'Adobe\'s platform for creative professionals to showcase and discover creative work.',
          icon: <Star className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Design'
        },
        {
          title: 'Awwwards',
          url: 'https://awwwards.com',
          description: 'Recognition for the best web design trends and developments worldwide.',
          icon: <Star className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Design'
        },
      ]
    },
    {
      name: 'Learning Resources',
      links: [
        {
          title: 'freeCodeCamp',
          url: 'https://freecodecamp.org',
          description: 'Free coding challenges and tutorials for web development skills.',
          icon: <Book className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Learning'
        },
        {
          title: 'Coursera',
          url: 'https://coursera.org',
          description: 'Online courses from top universities and companies.',
          icon: <Book className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Learning'
        },
        {
          title: 'Khan Academy',
          url: 'https://khanacademy.org',
          description: 'Free courses and tutorials on various subjects including programming.',
          icon: <Book className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Learning'
        },
      ]
    },
    {
      name: 'Entertainment',
      links: [
        {
          title: 'Spotify',
          url: 'https://spotify.com',
          description: 'Digital music streaming platform with millions of songs and podcasts.',
          icon: <Music className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Music'
        },
        {
          title: 'Netflix',
          url: 'https://netflix.com',
          description: 'Subscription-based streaming service for movies and TV shows.',
          icon: <Heart className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Video'
        },
        {
          title: 'Goodreads',
          url: 'https://goodreads.com',
          description: 'Social platform for book enthusiasts to track, review, and discover books.',
          icon: <Book className="h-5 w-5 text-red-600 dark:text-red-400" />,
          category: 'Reading'
        },
      ]
    }
  ];

  return (
    <section id="links" className="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-neutral-800 dark:text-white font-serif">
          <span className="text-red-600">Useful</span> Links
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          A curated collection of my favorite websites, tools, and resources that I find useful 
          and want to share with you.
        </p>

        <div className="space-y-12">
          {linkCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6 text-neutral-700 dark:text-neutral-200">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.links.map((link, linkIndex) => (
                  <LinkItem 
                    key={linkIndex}
                    title={link.title}
                    url={link.url}
                    description={link.description}
                    icon={link.icon}
                    category={link.category}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;