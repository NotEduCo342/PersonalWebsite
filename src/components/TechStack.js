// src/components/TechStack.js
"use client";
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiEspressif,
  SiArduino,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiPython
} from 'react-icons/si';

const technologies = [
  { name: 'JavaScript', icon: SiJavascript, color: 'hover:text-yellow-400' },
  { name: 'React', icon: SiReact, color: 'hover:text-sky-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'hover:text-white' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'hover:text-green-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'hover:text-cyan-400' },
  { name: 'HTML5', icon: SiHtml5, color: 'hover:text-orange-500' },
  { name: 'CSS3', icon: SiCss3, color: 'hover:text-blue-500' },
  { name: 'Python', icon: SiPython, color: 'hover:text-yellow-300' },
  { name: 'ESP32', icon: SiEspressif, color: 'hover:text-rose-500' },
  { name: 'Arduino', icon: SiArduino, color: 'hover:text-teal-400' },
  { name: 'Git', icon: SiGit, color: 'hover:text-red-500' },
  { name: 'Figma', icon: SiFigma, color: 'hover:text-purple-400' },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="border-b-2 border-indigo-500 pb-2">
            My Tech Stack
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div 
                key={tech.name} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center"
              >
                <div className={`text-slate-400 transition-colors duration-300 ${tech.color}`}>
                  <IconComponent size={48} />
                </div>
                <p className="mt-2 text-sm text-slate-300">{tech.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
