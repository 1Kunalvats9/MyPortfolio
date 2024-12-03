import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profile from "../Assets/photo.png"
gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.blur-sphere', {
        y: 100,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        stagger: {
          amount: 1.5
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20"
    >
      {/* Animated background spheres */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blur-sphere absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl"></div>
        <div className="blur-sphere absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl"></div>
        <div className="blur-sphere absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Kunal Vats</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A passionate Computer Science and AI undergraduate at Newton School of Technology. 
            I specialize in creating innovative web solutions and have a keen interest in 
            problem-solving through technology. My journey involves turning complex challenges 
            into elegant solutions.
          </p>
          <div className="flex gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="relative w-72 h-72 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-xl opacity-50"></div>
            <img
              src={profile}
              alt="Kunal Vats"
              className="relative w-full h-full object-cover rounded-full border-4 border-white/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}