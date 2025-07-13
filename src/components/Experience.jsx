import React from 'react';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-16 left-16 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-28 h-28 bg-blue-200 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-indigo-200 rounded-full opacity-20 animate-bounce-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building the future through innovation and dedication
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="flex items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="tilt-card relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                          <div className="relative glass rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300 bg-white/80 backdrop-blur-sm">
                            <div className="flex items-center justify-end space-x-2 mb-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-semibold text-gray-700">{exp.type}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                            <p className="text-purple-500 font-semibold mb-2">{exp.duration}</p>
                            <p className="text-gray-600">{exp.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white relative z-10 shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white relative z-10 shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="w-1/2 pl-8">
                        <div className="tilt-card relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                          <div className="relative glass rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300 bg-white/80 backdrop-blur-sm">
                            <div className="flex items-center space-x-2 mb-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-semibold text-gray-700">{exp.type}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                            <p className="text-blue-500 font-semibold mb-2">{exp.duration}</p>
                            <p className="text-gray-600">{exp.description}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
