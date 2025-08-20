// src/components/ProjectCard.js
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import tagColorMap from '@/lib/tagColorMap';

export default function ProjectCard({ title, description, imageUrl, tags, slug }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-900/70 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-slate-700/50
                    transition-all duration-300 ease-in-out
                    hover:shadow-indigo-500/20 hover:border-indigo-500/30"
    >
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => {
            const colorClass = tagColorMap[tag] || 'bg-gray-500/20 text-gray-300';
            return (
              <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
                {tag}
              </span>
            );
          })}
        </div>
        <Link 
          href={`/projects/${slug}`} 
          className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          View Details &rarr;
        </Link>
      </div>
    </motion.div>
  );
}