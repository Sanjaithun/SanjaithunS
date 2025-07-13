import React from 'react';
import { resumeData } from '../data/resumeData';

const Projects = () => {
  const projectImages = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  ];

  const ProjectCard = ({ project, image, index }) => (
    <div className="tilt-card relative group animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="relative glass rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={`${project.name} interface`} 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-500/40 transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
          </div>
          {/* Floating status indicator */}
          <div className="absolute top-4 left-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{project.name}</h3>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
          <p className="text-sm text-gray-400 mb-4">{project.details}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  tech === 'In Progress' 
                    ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white animate-pulse' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:scale-105'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          <button 
            className={`w-full py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group ${
              project.technologies.includes('In Progress') 
                ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
            disabled={project.technologies.includes('In Progress')}
          >
            <span className="relative z-10">
              {project.technologies.includes('In Progress') ? '🚧 Coming Soon' : '🚀 View Project'}
            </span>
            {!project.technologies.includes('In Progress') && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Advanced Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-particle-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-32 left-16 w-24 h-24 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-purple-500/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 right-32 w-16 h-16 bg-pink-500/10 rounded-full animate-float" style={{animationDelay: '6s'}}></div>
      
      {/* Matrix Rain Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-green-400 rounded-full animate-matrix-rain opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-text-reveal">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-neon-glow">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Showcasing my latest work and innovations in web development, data analytics, and AI with cutting-edge technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              image={projectImages[index]} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
