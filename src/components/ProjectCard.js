// src/components/ProjectCard.js
import Image from 'next/image';
import Link from 'next/link';

const tagColorMap = {
  'React': 'bg-sky-100 text-sky-800 dark:bg-sky-500/20 dark:text-sky-300',
  'Next.js': 'bg-gray-200 text-gray-800 dark:bg-gray-400/20 dark:text-gray-200',
  'ESP32': 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300',
  'Arduino': 'bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-300',
  'Tailwind CSS': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300',
  'JavaScript': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300',
  'UI/UX': 'bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-300',
  'ESP-NOW': 'bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-300',
};

export default function ProjectCard({ title, description, imageUrl, tags, slug }) {
  return (
    <div className="bg-white dark:bg-slate-900/70 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700/50
                    transform hover:-translate-y-2 transition-transform duration-300 ease-in-out
                    hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 hover:border-slate-300 dark:hover:border-indigo-500/30">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => {
            const colorClass = tagColorMap[tag] || 'bg-gray-200 text-gray-800 dark:bg-gray-500/20 dark:text-gray-300';
            return (
              <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
                {tag}
              </span>
            )
          })}
        </div>
        <Link href={`/projects/${slug}`} className="font-semibold text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}