// src/lib/projectData.js
export const projects = [
  {
    slug: 'home-automation-hub', // The URL-friendly slug
    title: 'Home Automation Hub',
    description: 'A central control system for smart home devices using an ESP32 and ESP-NOW network.',
    longDescription: 'This project aims to create a fully-featured smart home hub that communicates with various sensors and actuators over an ESP-NOW mesh network. The main controller is an ESP32, which also serves a web-based dashboard built with React for real-time monitoring and control. The system is designed to be low-latency and operate independently of a Wi-Fi connection.',
    imageUrl: '/project_placeholder_HA.png',
    tags: ['ESP32', 'React', 'ESP-NOW', 'Next.js'],
    githubUrl: 'https://github.com/NotEduCo342' // TODO: Add your GitHub link
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'The very website you are looking at now, built with Next.js and Tailwind CSS.',
    longDescription: 'This portfolio was designed to be a fast, responsive, and SEO-friendly showcase of my work. Built using the Next.js App Router, it leverages Server Components for performance and features a component-based architecture for maintainability. The styling is done entirely with Tailwind CSS, following a modern, utility-first approach.',
    imageUrl: '/project_placeholder_RW.png',
    tags: ['Next.js', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/NotEduCo342' // TODO: Add your GitHub link
  },
  {
    slug: 'mechatronics-project',
    title: 'Mechatronics Project',
    description: 'A brief description of another cool mechatronics or software project goes here.',
    longDescription: 'This is where you would write a more detailed explanation of your project. You can talk about the challenges, the technologies used, and what you learned. You could even embed more images or videos here later on.',
    imageUrl: '/project_placeholder_MP.png',
    tags: ['Arduino', 'JavaScript', 'UI/UX'],
    githubUrl: 'https://github.com/NotEduCo342' // TODO: Add your GitHub link
  }
];