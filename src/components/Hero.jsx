import React, { useEffect, useState } from "react";
import ThreeCharacter from "./ThreeCharacter";
import Photo from "../assets/sanjai.jpg"

const Hero = () => {
  const [isPhotoAnimating, setIsPhotoAnimating] = useState(true);
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);

  useEffect(() => {
    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }

    // Photo animation sequence
    setTimeout(() => setIsPhotoVisible(true), 300);
    setTimeout(() => setIsPhotoAnimating(false), 5000);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden"
    >
      <div id="particles-js" className="absolute inset-0"></div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-matrix-rain opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Character Container */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-64 h-64 hidden lg:block">
        <ThreeCharacter />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="animate-float">
          {/* Single Photo Container - Animated */}
          <div className="relative mb-8">
            <div
              className={`w-48 h-48 mx-auto mb-6 relative transition-all duration-1000 ${
                isPhotoAnimating
                  ? "animate-advanced-orbit transform scale-75"
                  : "transform scale-100"
              }`}
            >
              {/* Outer cosmic ring */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-spin-slow opacity-30 blur-lg"></div>

              {/* Middle energy ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-500 animate-pulse opacity-50"></div>

              {/* Inner glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-ping opacity-40"></div>

              {/* Main photo container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin-slow blur-sm opacity-80"></div>
              <div className="absolute inset-2 rounded-full bg-white/20 backdrop-blur-sm"></div>

              {/* Profile Photo */}
              <img
                src={Photo}
                alt="SanjaiThun S - Professional Photo"
                className="absolute inset-4 w-40 h-40 rounded-full object-cover border-4 border-white/30 shadow-2xl transform hover:scale-110 transition-transform duration-500"
              />

              {/* Dynamic status indicators */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-3 border-white animate-pulse shadow-xl flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full border-2 border-white animate-bounce shadow-lg"></div>
              <div className="absolute top-1/2 -left-4 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-70"></div>
              <div className="absolute top-1/2 -right-4 w-4 h-4 bg-pink-400 rounded-full animate-pulse opacity-70"></div>

              {/* Floating particles */}
              {isPhotoAnimating && (
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                  <div className="absolute left-0 top-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute right-0 bottom-1/3 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-50"></div>
                </div>
              )}
            </div>
          </div>

          <h1
            className={`text-6xl md:text-8xl font-bold mb-6 leading-tight transition-all duration-1000 ${
              isPhotoAnimating
                ? "opacity-60 transform scale-95"
                : "opacity-100 transform scale-100"
            }`}
          >
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-neon-glow">
              SANJAITHUN S
            </span>
            <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent animate-neon-glow"></span>
          </h1>

          {/* Floating Particles around title */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full animate-particle-float opacity-60"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${30 + Math.random() * 40}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative mb-8">
            <p
              className={`text-2xl md:text-3xl opacity-90 mb-4 transition-all duration-1000 ${
                isPhotoAnimating ? "opacity-60" : "opacity-100"
              }`}
            >
              React Developer & Data Analytics Expert
            </p>

            {/* Welcome Message - Appears when photo settles */}
            {!isPhotoAnimating && (
              <div className="mb-4 animate-scale-in">
                <p className="text-xl text-yellow-300 font-semibold animate-pulse">
                  ✨ Welcome to my digital universe! ✨
                </p>
              </div>
            )}

            <div
              className={`flex flex-wrap justify-center gap-3 mb-6 transition-all duration-1000 ${
                isPhotoAnimating
                  ? "opacity-60 transform scale-95"
                  : "opacity-100 transform scale-100"
              }`}
            >
              <span className="glass px-4 py-2 rounded-full text-sm font-semibold hover-lift">
                🏆 CGPA Topper
              </span>
              <span className="glass px-4 py-2 rounded-full text-sm font-semibold hover-lift">
                🚀 Hackathon Winner
              </span>
              <span className="glass px-4 py-2 rounded-full text-sm font-semibold hover-lift">
                💻 Full Stack Developer
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative glass px-8 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">🚀 View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative border-2 border-white px-8 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">💬 Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Enhanced Achievement Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="glass px-6 py-3 rounded-full hover-lift cursor-pointer group">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold group-hover:text-green-300 transition-colors">
                  Available for Work
                </span>
              </div>
            </div>
            <div className="glass px-6 py-3 rounded-full hover-lift cursor-pointer group">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <span className="text-sm font-semibold group-hover:text-blue-300 transition-colors">
                  Remote Ready
                </span>
              </div>
            </div>
            <div className="glass px-6 py-3 rounded-full hover-lift cursor-pointer group">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                <span className="text-sm font-semibold group-hover:text-purple-300 transition-colors">
                  Full Stack
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-10 w-12 h-12 bg-purple-400/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center glass">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
