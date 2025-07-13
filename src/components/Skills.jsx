import React, { useState, useEffect } from 'react';
import { FaReact, FaJs, FaPython, FaNodeJs, FaGitAlt, FaAws, FaDatabase, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiNextdotjs, SiVuedotjs, SiAngular, SiDocker, SiKubernetes, SiRedis, SiGraphql, SiFirebase, SiJest, SiCypress, SiTensorflow, SiPandas, SiNumpy, SiJupyter, SiApachespark, SiApacheairflow, SiGooglecloud } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      color: 'from-blue-400 to-cyan-500',
      skills: [
        { name: 'React', icon: <FaReact />, level: 95, color: 'text-blue-400' },
        { name: 'JavaScript', icon: <FaJs />, level: 92, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 88, color: 'text-blue-500' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: 'text-gray-300' },
        { name: 'Vue.js', icon: <SiVuedotjs />, level: 80, color: 'text-green-400' },
        { name: 'Angular', icon: <SiAngular />, level: 75, color: 'text-red-500' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92, color: 'text-cyan-400' },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 85, color: 'text-purple-500' }
      ]
    },
    backend: {
      title: 'Backend Development',
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 90, color: 'text-green-500' },
        { name: 'Express.js', icon: <SiExpress />, level: 88, color: 'text-gray-300' },
        { name: 'Python', icon: <FaPython />, level: 85, color: 'text-yellow-500' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 82, color: 'text-blue-400' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: 'text-green-400' },
        { name: 'Redis', icon: <SiRedis />, level: 78, color: 'text-red-500' },
        { name: 'GraphQL', icon: <SiGraphql />, level: 80, color: 'text-pink-400' },
        { name: 'Firebase', icon: <SiFirebase />, level: 85, color: 'text-yellow-500' }
      ]
    },
    dataAnalytics: {
      title: 'Data Analytics',
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90, color: 'text-yellow-500' },
        { name: 'Pandas', icon: <SiPandas />, level: 88, color: 'text-blue-400' },
        { name: 'NumPy', icon: <SiNumpy />, level: 85, color: 'text-cyan-400' },
        { name: 'Jupyter', icon: <SiJupyter />, level: 90, color: 'text-orange-400' },
        { name: 'Tableau', icon: <FaDatabase />, level: 85, color: 'text-blue-500' },
        { name: 'Power BI', icon: <FaDatabase />, level: 80, color: 'text-yellow-600' },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 75, color: 'text-orange-500' },
        { name: 'Apache Spark', icon: <SiApachespark />, level: 70, color: 'text-orange-400' },
        { name: 'Apache Airflow', icon: <SiApacheairflow />, level: 75, color: 'text-blue-600' }
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Docker', icon: <SiDocker />, level: 82, color: 'text-blue-400' },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 75, color: 'text-blue-500' },
        { name: 'AWS', icon: <FaAws />, level: 80, color: 'text-yellow-500' },
        { name: 'Azure', icon: <FaAws />, level: 75, color: 'text-blue-400' },
        { name: 'Google Cloud', icon: <SiGooglecloud />, level: 70, color: 'text-blue-500' },
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: 'text-orange-500' },
        { name: 'Jest', icon: <SiJest />, level: 85, color: 'text-red-500' },
        { name: 'Cypress', icon: <SiCypress />, level: 80, color: 'text-green-400' }
      ]
    }
  };

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2024',
      badge: '🏆',
      color: 'from-yellow-400 to-orange-500',
      status: 'active'
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2024',
      badge: '🌟',
      color: 'from-blue-400 to-cyan-500',
      status: 'active'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      badge: '⚡',
      color: 'from-purple-400 to-pink-500',
      status: 'active'
    },
    {
      name: 'Meta React Developer',
      issuer: 'Meta (Facebook)',
      date: '2023',
      badge: '🚀',
      color: 'from-blue-500 to-indigo-500',
      status: 'active'
    },
    {
      name: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      date: '2023',
      badge: '📊',
      color: 'from-green-400 to-teal-500',
      status: 'active'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2023',
      badge: '🍃',
      color: 'from-green-500 to-emerald-500',
      status: 'active'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-matrix-rain opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-cyan-500/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-text-reveal">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-neon-glow">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technical skills across full-stack development, data analytics, and cloud technologies
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              <span className="relative z-10">{category.title}</span>
              {activeCategory !== key && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass p-6 rounded-2xl hover-lift cursor-pointer group relative overflow-hidden animate-card-hover"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Icon */}
              <div className={`text-4xl mb-4 ${skill.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {skill.name}
              </h3>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                <div
                  className={`h-2 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                    transition: 'width 1s ease-out'
                  }}
                ></div>
              </div>
              
              {/* Skill Level */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Proficiency</span>
                <span className="text-sm font-semibold text-white">{skill.level}%</span>
              </div>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skillCategories[activeCategory].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-neon-glow">
              Certifications & Achievements
            </span>
          </h3>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="glass p-6 rounded-2xl hover-lift cursor-pointer group relative overflow-hidden animate-card-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Badge */}
              <div className="text-4xl mb-4 group-hover:animate-bounce">
                {cert.badge}
              </div>
              
              {/* Certification Info */}
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {cert.name}
              </h4>
              <p className="text-gray-400 mb-2">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              
              {/* Status Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${cert.color} text-white`}>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                {cert.status.toUpperCase()}
              </div>
              
              {/* Verification Button */}
              <button className="mt-4 w-full py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300 group-hover:border-blue-400">
                Verify Certificate
              </button>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-6">Technical Expertise Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">5+</div>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">50+</div>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">15+</div>
                <p className="text-gray-400">Technologies Mastered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">6</div>
                <p className="text-gray-400">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;