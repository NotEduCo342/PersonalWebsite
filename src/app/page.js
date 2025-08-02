import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
// Projects
import { projects } from '@/lib/projectData';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            
            {/* Here we create the "glow" effect using Tailwind's arbitrary values */}
            <span className="dark:[text-shadow:0_0_8px_rgba(255,255,255,0.3),_0_0_20px_rgba(96,165,250,0.4)]">
              Mahan
            </span>

            <span className="block text-3xl md:text-5xl text-slate-500 dark:text-slate-400 mt-2">
              Mechatronics Engineer & Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Crafting innovative solutions where hardware meets software. Specializing in microcontrollers and front-end development.
          </p>
          <a 
            href="#projects" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg px-8 py-4 rounded-xl inline-block transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
          >
            View My Work
          </a>
        </div>
      </section>
      <section id="about" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-2 border-indigo-500 pb-2">
              About Me
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 items-center">
            
            {/* Image Column */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-48 h-48 md:w-60 md:h-60">
                <Image
                  src="/profile.jpg" // The path to your image in the 'public' folder
                  alt="A portrait of Mahan"
                  fill // 'fill' makes the image fill its parent container
                  className="rounded-full object-cover border-4 border-slate-200 dark:border-slate-800 shadow-lg"
                />
              </div>
            </div>

            {/* Text Content Column */}
            <div className="md:col-span-2 text-slate-600 dark:text-slate-300 text-lg text-center md:text-left">
              <p className="mb-4">
                Hello! I&apos;m Mahan, a passionate Mechatronics Engineering student with a deep interest in the intersection of electronics and software. My journey began with a fascination for how things work, leading me to the world of ESP32 and Arduino.
              </p>
              <p>
                On the software side, I&apos;m honing my skills as a front-end developer, working with React and modern tools to build clean, user-friendly interfaces that bring ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="border-b-2 border-indigo-500 pb-2">
              My Projects
            </span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Here are a few projects I&apos;m currently working on. More details will be uploaded soon!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* We map over the projects data and render a card for each one */}
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
          </p>
          <a 
            href="mailto:farajimohamadmahan@gmail.com" // <-- TODO: Update your email
            className="btn-primary bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg px-8 py-4 rounded-xl inline-block mb-12 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
          >
            Say Hello
          </a>
<div className="flex justify-center space-x-6">
            <a href="https://github.com/NotEduCo342" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub Profile">
              <FaGithub size={32} />
            </a>
            <a href="https://linkedin.com/in/NotEduCo342" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 transition-colors" aria-label="LinkedIn Profile">
              <FaLinkedin size={32} />
            </a>
            <a href="https://t.me/NotEduCo342" className="text-slate-500 dark:text-slate-400 hover:text-blue-400 transition-colors" aria-label="Telegram Profile">
              <FaTelegramPlane size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* We'll add the other sections below this one in the next steps */}
    </main>
  );
}