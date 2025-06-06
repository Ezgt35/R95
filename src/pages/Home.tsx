import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Links from '../components/Links';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Update the title when the component mounts
    document.title = 'R95 - Personal Website';
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {});
      });
      
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="fade-in opacity-0 transition-opacity duration-1000">
          <Profile />
        </div>
        <div className="fade-in opacity-0 transition-opacity duration-1000">
          <Links />
        </div>
        <div className="fade-in opacity-0 transition-opacity duration-1000">
          <Projects />
        </div>
        <div className="fade-in opacity-0 transition-opacity duration-1000">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
