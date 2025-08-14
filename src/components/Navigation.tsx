import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', emoji: '👋', label: 'Hello' },
    { id: 'journey', emoji: '🚀', label: 'Journey' },
    { id: 'expertise', emoji: '⚡', label: 'Skills' },
    { id: 'achievements', emoji: '🏆', label: 'Wins' },
    { id: 'connect', emoji: '💬', label: 'Chat' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Find active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
        offset: document.getElementById(section.id)?.offsetTop || 0
      }));

      const currentSection = sectionElements
        .filter(section => section.element)
        .find(section => {
          const rect = section.element!.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
        {/* Desktop Navigation */}
        <div className="hidden sm:block bg-gray-800 backdrop-blur-lg rounded-full px-4 py-3 shadow-xl border border-gray-700 max-w-full overflow-x-auto">
          <div className="flex flex-nowrap items-center gap-6 w-full">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 px-3 py-2 rounded-full ${
                  activeSection === section.id
                    ? 'text-gray-900 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg scale-105 transform'
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:shadow-md hover:scale-105 transform transition-transform'
                }`}
              >
                <span>{section.emoji}</span>
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden bg-gray-800 backdrop-blur-lg rounded-full px-4 py-3 shadow-xl border border-gray-700 flex items-center justify-center">
          <div className="flex items-center gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-lg transition-all duration-300 p-2 rounded-full ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg scale-110 transform'
                    : 'hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:shadow-md hover:scale-110 transform transition-transform'
                }`}
              >
                <span>{section.emoji}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;