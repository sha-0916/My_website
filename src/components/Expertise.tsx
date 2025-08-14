import React from 'react';
import { Zap, GraduationCap, Star, Calendar, Languages, Heart } from 'lucide-react';

const Expertise: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      description: "The languages that speak to machines",
      icon: "💻",
      skills: ["C++", "Python"]
    },
    {
      title: "Frameworks & Tools",
      description: "My digital Swiss Army knife",
      icon: "🛠️",
      skills: ["PyTorch", "GitLab", "Anaconda", "LabVIEW", "COMSOL Multiphysics", "Pandas","Qt Creator"]
    },
    {
      title: "Databases",
      description: "Where data lives and breathes",
      icon: "🗄️",
      skills: ["MongoDB"]
    }
  ];

  const languages = [
    { name: "English", flag: "🇬🇧", level: "Native", progress: 100 },
    { name: "Hindi", flag: "🇮🇳", level: "Native", progress: 100 },
    { name: "German", flag: "🇩🇪", level: "Elementary", progress: 25 }
  ];

  const interests = [
    { icon: "🗺️", title: "Exploring distant lands", description: "New places, new perspectives" },
    { icon: "📚", title: "Getting lost in a good book", description: "Knowledge is power" },
    { icon: "🎵", title: "Feeling the music", description: "Rhythm for the soul" }
  ];

  return (
    <section id="expertise" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-900/50 rounded-full px-6 py-2 text-cyan-300 font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>What's in my toolkit?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My Expertise & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/70 rounded-3xl p-6 shadow-xl border border-white/10 hover:shadow-teal-500/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md flex flex-col group relative overflow-hidden"
            >
              {/* Decorative glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-white/10">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-base text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-gray-800/70 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-emerald-400/40"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-0.5" />
                      <span className="text-gray-200 font-medium text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Journey (as skill-style cards with full content) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {/* Master's Card */}
          <div className="bg-gray-900/70 rounded-3xl p-6 shadow-xl border border-white/10 hover:shadow-teal-500/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md flex flex-col group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">MSc Computational Engineering</h3>
                  <p className="text-base text-gray-400">FAU Erlangen, Germany</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><Calendar className="w-4 h-4" />10/2018 – 12/2024</p>
                </div>
              </div>
              <div className="bg-gray-800/70 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="font-semibold text-white text-sm">Master's Thesis</span>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Enhanced a pedestrian scene dataset for assistive navigation using semantic-guided generative models. Explored and compared GANs (Pix2PixHD) and Diffusion Models (Stable Diffusion + ControlNet), achieving superior results with diffusion-based methods.
                </p>
              </div>
            </div>
          </div>

          {/* Bachelor's Card */}
          <div className="bg-gray-900/70 rounded-3xl p-6 shadow-xl border border-white/10 hover:shadow-teal-500/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md flex flex-col group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
                  💻
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">BTech Computer Science</h3>
                  <p className="text-base text-gray-400">SMVDU, India</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><Calendar className="w-4 h-4" />08/2014 – 05/2018</p>
                </div>
              </div>
              <div className="bg-gray-800/70 rounded-xl p-4 border border-white/10 mt-4">
                <p className="text-gray-300 text-base leading-relaxed">
                  Gained core CS fundamentals through lab-driven learning at SMVDU’s fully residential tech campus, enriched by project work and a strong academic environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Languages & Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
          {/* Languages */}
          <div className="bg-gray-900/70 rounded-3xl p-6 shadow-xl border border-white/10 hover:shadow-teal-500/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md flex flex-col group relative overflow-hidden mb-16">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-purple-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Languages I Speak</h3>
              </div>
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center gap-4 p-4 bg-gray-800/70 rounded-xl border border-white/10 shadow-sm hover:border-emerald-400/40 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{language.flag}</span>
                      <span className="font-semibold text-gray-200 text-base">{language.name}</span>
                    </div>
                    <span className="text-base text-emerald-400 font-semibold bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                      {language.level}
                    </span>
                    <div className="w-full bg-gray-600 rounded-full h-3 absolute bottom-4 left-4 right-4 mt-2 hidden" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-gray-900/70 rounded-3xl p-6 shadow-xl border border-white/10 hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md flex flex-col group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-fuchsia-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">What I Love</h3>
              </div>
              <div className="space-y-6">
                {interests.map((interest, index) => (
                  <div key={index} className="bg-gray-700 rounded-xl p-6 border-2 border-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-xl">
                        {interest.icon}
                      </div>
                      <div>
                        <span className="text-white font-semibold text-xl block">{interest.title}</span>
                        <span className="text-gray-400 text-base">{interest.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;