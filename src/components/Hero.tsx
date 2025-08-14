import React, { useEffect, useState } from 'react';
import { Sparkles, Mail, Linkedin, MapPin, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Software Developer & AI Researcher';

  useEffect(() => {
    let index = 0;
    let currentText = '';
    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setTypedText(currentText);
        index++;
      } else {
        setShowCursor(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Avatar */}
        <div className="mb-8">
          <div className="relative group">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-2 border-emerald-500">
              <img
                src="/profile-pic.png"
                alt="Shubhi Sharma"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-800 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 text-emerald-400 font-medium shadow-lg mb-4">
            <Sparkles className="w-4 h-4 flex-shrink-0" />
            <span className="text-emerald-400 whitespace-nowrap">Hey there! I'm</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Shubhi Sharma
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-20 sm:w-32 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light text-center min-h-[2.5rem]">
              {typedText}
              {showCursor && <span className="animate-pulse text-emerald-400">|</span>}
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-20 sm:w-32 flex-shrink-0" />
          </div>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700">
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              <span className="text-2xl">🤔</span> Ever wondered how we can make machines think like humans? 
              That's exactly what drives me every day. With almost three years of turning complex problems 
              into elegant solutions, I'm passionate about bridging the gap between human intelligence and artificial minds.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-extrabold text-white mb-2">60%</div>
            <div className="text-base font-semibold text-emerald-400 mb-1">Efficiency Boost</div>
            <div className="text-sm text-gray-400">Reduced manual tasks</div>
          </div>
          <div className="bg-gray-800 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-extrabold text-white mb-2">3+</div>
            <div className="text-base font-semibold text-emerald-400 mb-1">Years Experience</div>
            <div className="text-sm text-gray-400">In AI & Development</div>
          </div>
          <div className="bg-gray-800 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-extrabold text-white mb-2">10+</div>
            <div className="text-base font-semibold text-emerald-400 mb-1">Projects Delivered</div>
            <div className="text-sm text-gray-400">From concept to reality</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full">
          <a 
            href="mailto:sharma.shubhi0995@gmail.com" 
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-900 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Let's Talk!
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/shubhi-sh09/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-full font-medium hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>

        {/* Location */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 bg-gray-800 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700 text-sm text-gray-400">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-300">Erlangen, Germany 🇩🇪</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative w-full flex justify-center mt-8">
          <div className="bg-gray-800 backdrop-blur-sm rounded-full p-2 shadow-lg animate-bounce">
            <ChevronDown className="w-6 h-6 text-emerald-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;