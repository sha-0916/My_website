import React from 'react';
import { Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      emoji: "🤖",
      number: "Top Select",
      label: "Crypto-AI Project",
      title: "Agent Intelligence for DeFi",
      description: "Secured a prestigious project on AI-driven crypto agents under Munich Re, hosted by TUM Blockchain Club."
    },
    {
      emoji: "⚡",
      number: "60%",
      label: "Time Saved",
      title: "60% Efficiency Boost",
      description: "Automated manual calibration tasks, saving hours of work daily"
    },
    {
      emoji: "🧠",
      number: "10+",
      label: "Models Trained",
      title: "AI Model Excellence",
      description: "Improved existing model performance through innovative preprocessing"
    },
    {
      emoji: "🚀",
      number: "5+",
      label: "Systems Built",
      title: "Full-Stack Solutions",
      description: "Designed complete systems from frontend to backend"
    },
    {
      emoji: "🔬",
      number: "2",
      label: "Research Projects",
      title: "Research Impact",
      description: "Published research in speech recognition and video compression"
    },
    {
      emoji: "🎯",
      number: "99%",
      label: "Data Accuracy",
      title: "Quality Assurance",
      description: "Developed comprehensive data quality frameworks"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-700 backdrop-blur-sm rounded-full px-6 py-2 text-orange-300 font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Some wins worth celebrating!</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-700 rounded-2xl p-8 shadow-lg border-2 border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl mb-4">{achievement.emoji}</div>
                <div className="text-4xl font-extrabold text-emerald-400 mb-3">{achievement.number}</div>
                <div className="text-base font-semibold text-emerald-300 mb-4">{achievement.label}</div>
                <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;