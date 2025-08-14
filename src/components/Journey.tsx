import React from 'react';
import { Rocket, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  badge: string;
  emoji: string;
}

const Journey: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Developer (Part-time)",
      company: "PANOVO tec GmbH (R&D)",
      location: "Nuremberg, Germany",
      period: "09/2023 – Present",
      description: "Currently crafting automation magic that makes manual tasks disappear!",
      highlights: [
        "🛠️ Building automation systems with Qt Creator and C++ that actually work",
        "🎯 Designed full-stack solutions that cut calibration time by 60% (yes, really!)",
        "💾 Deployed web interfaces on microcontrollers (talk about constraints!)",
        "🔧 Integrated external libraries to boost performance beyond internal frameworks"
      ],
      badge: "60% efficiency boost!",
      emoji: "⚡"
    },
    {
      title: "Student Researcher",
      company: "Fujikura Technology Europe GmbH (AI Dept.)",
      location: "Frankfurt, Germany",
      period: "01/2022 – 10/2022",
      description: "Dove deep into the world of Variational Autoencoders and data quality!",
      highlights: [
        "🔍 Trained VAE models for anomaly detection (finding needles in haystacks)",
        "📊 Mastered MongoDB and GitLab for seamless data workflows",
        "✅ Developed data quality frameworks that actually made sense",
        "📈 Created model reports that stakeholders could understand"
      ],
      badge: "AI anomaly detection",
      emoji: "🧠"
    },
    {
      title: "Working Student",
      company: "WS Audiology (R&D, PSA)",
      location: "Erlangen, Germany",
      period: "09/2021 – 01/2022",
      description: "Helped optimize hearing aid systems through testing and updates.",
      highlights: [
        "🧩 Supported maintenance and software interface optimization of medical hearing aids",
        "🔧 Performed system updates and troubleshooting to enhance device performance"
      ],
      badge: "Medical Audio Systems",
      emoji: "🦻"
    },
    {
      title: "Graduate Research Assistant",
      company: "Fraunhofer IIS (Audio & Media Labs)",
      location: "Erlangen, Germany",
      period: "05/2020 – 06/2021",
      description: "Where I fell in love with making AI work without the cloud!",
      highlights: [
        "🎤 Built speech recognition systems that work offline (privacy first!)",
        "🎬 Researched RNN-based video compression (LSTMs and GRUs galore)",
        "💡 Developed innovative methods for local data processing",
        "🏆 Created efficient algorithms that pushed quality boundaries"
      ],
      badge: "Speech & Video AI",
      emoji: "🔬"
    }
  ];

  return (
    <section id="journey" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-700 backdrop-blur-sm rounded-full px-6 py-2 text-teal-300 font-medium mb-6">
            <Rocket className="w-4 h-4" />
            <span>The adventure continues...</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Each role has been a chapter in my story, teaching me something new and pushing me to grow. 
            Here's how I've been making an impact! 🚀
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 rounded-full hidden lg:block" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex flex-col lg:flex-row items-start gap-8">
                {/* Timeline Node */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-xl hidden lg:flex">
                  <span className="text-2xl">{experience.emoji}</span>
                </div>

                {/* Experience Card */}
                <div className="flex-1 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-600 hover:shadow-teal-500/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center lg:hidden">
                        <span className="text-xl">{experience.emoji}</span>
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                            {experience.title}
                          </h3>
                          <span className="bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold border border-emerald-400/30 shadow-md">
                            {experience.badge}
                          </span>
                        </div>
                        <p className="text-xl text-gray-200 font-semibold mb-2">{experience.company}</p>
                        <p className="text-gray-400">{experience.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 mt-4 lg:mt-0 bg-gray-800 backdrop-blur-sm px-4 py-2 rounded-full text-base font-medium">
                      <Calendar className="w-4 h-4" />
                      <span className="text-gray-300">{experience.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg rounded-xl p-4 mb-6 border border-gray-700 shadow-inner">
                    <p className="text-gray-200 font-semibold italic text-base">"{experience.description}"</p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-3 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-lg rounded-lg p-4 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 shadow-md hover:shadow-teal-500/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed text-base">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;