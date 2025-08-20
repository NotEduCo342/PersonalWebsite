"use client";
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, lazy, Suspense } from 'react';
import ProjectSkeleton from '@/components/ProjectSkeleton';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

// Lazy load heavy components
const ProjectCard = lazy(() => import('@/components/ProjectCard'));
const TechStack = lazy(() => import('@/components/TechStack'));

function AnimatedProjectCard({ project }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls}>
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          tags={project.tags}
          slug={project.slug}
        />
      </Suspense>
    </motion.div>
  );
}

export default function ClientHomePage({ initialProjects }) {
  // Use server-loaded data instead of tRPC for initial render
  const projects = initialProjects;

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
          >
            <span className="[text-shadow:0_0_8px_rgba(255,255,255,0.3),_0_0_20px_rgba(96,165,250,0.4)]">
              Mahan
            </span>
            <span className="block text-3xl md:text-5xl text-slate-400 mt-2">
              Mechatronics Engineer & Developer
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Crafting innovative solutions where hardware meets software. Specializing in microcontrollers and front-end development.
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="#projects" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg px-8 py-4 rounded-xl inline-block transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
          >
            View My Work
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="border-b-2 border-indigo-500 pb-2">
              About Me
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-1 flex justify-center"
            >
              <div className="relative w-48 h-48 md:w-60 md:h-60">
                <Image
                  src="/profile.jpg"
                  alt="A portrait of Mahan"
                  fill
                  className="rounded-full object-cover border-4 border-slate-800 shadow-lg"
                  priority
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 text-slate-300 text-lg text-center md:text-left"
            >
              <p className="mb-4">
                Hello! I&apos;m Mahan, a passionate Mechatronics Engineering student with a deep interest in the intersection of electronics and software. My journey began with a fascination for how things work, leading me to the world of ESP32 and Arduino.
              </p>
              <p>
                On the software side, I&apos;m honing my skills as a front-end developer, working with React and modern tools to build clean, user-friendly interfaces that bring ideas to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Lazy Loaded */}
      <Suspense fallback={<div className="py-24 text-center">Loading tech stack...</div>}>
        <TechStack />
      </Suspense>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            <span className="border-b-2 border-indigo-500 pb-2">
              My Projects
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-400 text-center mb-12 max-w-3xl mx-auto"
          >
            Here are a few projects I&apos;m currently working on. More details will be uploaded soon!
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects && projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Suspense fallback={<ProjectSkeleton />}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    tags={project.tags}
                    slug={project.slug}
                  />
                </Suspense>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Let&apos;s Connect
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 mb-8 text-lg"
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            href="mailto:noteduco342@gmail.com"
            className="btn-primary bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg px-8 py-4 rounded-xl inline-block mb-12 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
          >
            Say Hello
          </motion.a>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/NotEduCo342" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub Profile">
              <FaGithub size={32} />
            </a>
            <a href="https://linkedin.com/in/NotEduCo342" className="text-slate-400 hover:text-sky-500 transition-colors" aria-label="LinkedIn Profile">
              <FaLinkedin size={32} />
            </a>
            <a href="https://t.me/NotEduCo342" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Telegram Profile">
              <FaTelegramPlane size={32} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
