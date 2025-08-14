import React from 'react';
import { Users, Mail, Linkedin } from 'lucide-react';

const Connect: React.FC = () => {
  return (
    <section id="connect" className="py-24 relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-emerald-200 font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Ready to create something amazing together?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Start a Conversation!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-8" />
          <p className="text-lg sm:text-xl text-emerald-100 leading-relaxed max-w-3xl mx-auto">
            Whether you have a challenging problem to solve, an innovative idea to explore, 
            or just want to chat about the future of AI - I'd love to hear from you! ☕
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-5xl mb-5">💼</div>
            <h3 className="text-2xl font-extrabold text-white mb-4">Work Together</h3>
            <p className="text-emerald-100 text-base mb-5">
              Looking for someone to bring your AI or software development project to life? 
              Let's discuss how we can make it happen!
            </p>
            <ul className="text-emerald-200 text-base space-y-1">
              <li>• AI & Machine Learning Solutions</li>
              <li>• Automation & Optimization</li>
              <li>• Full-Stack Development</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-5xl mb-5">🤝</div>
            <h3 className="text-2xl font-extrabold text-white mb-4">Just Connect</h3>
            <p className="text-emerald-100 text-base mb-5">
              Love talking about technology, AI research, or sharing experiences? 
              I'm always up for a good conversation!
            </p>
            <ul className="text-emerald-200 text-base space-y-1">
              <li>• Technology Discussions</li>
              <li>• Career Advice</li>
              <li>• Knowledge Sharing</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 w-full">
          <a 
            href="mailto:sharma.shubhi0995@gmail.com" 
            className="group relative overflow-hidden bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Drop me an email!
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          <a 
            href="https://www.linkedin.com/in/shubhi-sh09/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-900 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </span>
          </a>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/20 text-emerald-200 text-sm">
          <p className="mb-4">
            📍 Currently in Erlangen, Germany | 🌍 Open to remote opportunities worldwide
          </p>
          <p>© 2025 Shubhi Sharma. Built with ❤️ and lots of ☕</p>
        </div>
      </div>
    </section>
  );
};

export default Connect;