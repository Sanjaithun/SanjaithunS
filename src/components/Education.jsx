import React from 'react';
import { resumeData } from '../data/resumeData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Education & Certifications</h2>
          <p className="text-xl text-gray-600">Academic achievements and professional certifications</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="tilt-card glass rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-blue-500 font-semibold">{edu.institution}</p>
                      <p className="text-gray-600">{edu.duration} | {edu.location}</p>
                      <p className="text-gray-600">{edu.gpa || edu.percentage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="tilt-card glass rounded-2xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{cert.split(' - ')[0]}</h4>
                      <p className="text-sm text-gray-600">{cert.split(' - ')[1]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
