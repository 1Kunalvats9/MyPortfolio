import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Terminal, Brain, Database, Layout } from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', icon: <Globe className="w-8 h-8" />, level: 'Advanced' },
  { name: 'JavaScript', icon: <Code2 className="w-8 h-8" />, level: 'Advanced' },
  { name: 'Python', icon: <Terminal className="w-8 h-8" />, level: 'Intermediate' },
  { name: 'C/C++', icon: <Terminal className="w-8 h-8" />, level: 'Intermediate' },
  { name: 'Node.js', icon: <Database className="w-8 h-8" />, level: 'Advanced' },
  { name: 'React.js', icon: <Layout className="w-8 h-8" />, level: 'Advanced' },
  { name: 'Problem Solving', icon: <Brain className="w-8 h-8" />, level: 'Advanced' },
  { name: 'Locomotive.js', icon: <Code2 className="w-8 h-8" />, level: 'Intermediate' }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <div className="text-blue-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
                <span className="text-sm text-gray-500">{skill.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}