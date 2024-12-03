import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gr from "../Assets/gr.png"
import gfg from "../Assets/goforgold.png"
import hj from "../Assets/healthyjeevan.png"
import gs from "../Assets/img2gunshot.png"
import ntx from "../Assets/newtonix.png"

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Gaming Redefined',
    description: 'A modern gaming website built with React and GSAP, featuring smooth scroll animations and contemporary UI/UX design.',
    image: gr,
    technologies: ['React', 'GSAP', 'Tailwind CSS'],
    liveUrl: 'https://gaming-redefined.vercel.app',
    githubUrl: 'https://github.com/1kunalvats9'
  },
  {
    title: 'GoforGold',
    description: 'A dedicated platform for NEWTON School of Technology\'s ICPC bootcamp, helping Indian developers aim for gold.',
    image: gfg,
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://www.goforgold.in',
    githubUrl: 'https://github.com/1kunalvats9'
  },
  {
    title: 'HealthyJeevan',
    description: 'A recipe showcase website for a YouTuber, featuring their channel content and helping expand their brand presence.',
    image: hj,
    technologies: ['React', 'YouTube API', 'Tailwind CSS'],
    liveUrl: 'https://www.healthyjeevan.co.in',
    githubUrl: 'https://github.com/1kunalvats9'
  },
  {
    title: 'Gunshot Fire Direction Detection',
    description: 'An innovative SIH hackathon project that detects gunshot direction and intensity using advanced audio processing.',
    image: gs,
    technologies: ['Python', 'Signal Processing', 'SR'],
    githubUrl: 'https://github.com/1Kunalvats9/GFDDS'
  },
  {
    title: "Newtonix",
    description: "A e-learning platform where students can lern and try new things , this website includes authentication and authorisation for privacy and security for Login. Students can also watch lectures here.",
    image:ntx,
    technologies: ['HTML','CSS','React','Javascripts','TailwindCSS'],
    githubUrl: "https://github.com/1Kunalvats9/Newtonix"
  }
];

export function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-400">Showcasing my best work</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700"
            >
              <div className="flex flex-col lg:flex-row">
                <motion.div 
                  className="lg:w-1/2 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </motion.div>
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink size={20} />
                        <span>Live Preview</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300"
                    >
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}