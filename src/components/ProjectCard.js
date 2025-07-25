// src/components/ProjectCard.js
import Image from 'next/image';
import Link from 'next/link';

const tagColorMap = {
  'React': 'bg-sky-500/20 text-sky-300',
  'Next.js': 'bg-gray-400/20 text-gray-200',
  'ESP32': 'bg-rose-500/20 text-rose-300',
  'Arduino': 'bg-teal-500/20 text-teal-300',
  'Tailwind CSS': 'bg-cyan-500/20 text-cyan-300',
  'JavaScript': 'bg-yellow-500/20 text-yellow-300',
  'UI/UX': 'bg-purple-500/20 text-purple-300',
  'ESP-NOW': 'bg-orange-500/20 text-orange-300',
};

export default function ProjectCard({ title, description, imageUrl, tags, slug }) {
  return (
    <div className="bg-slate-900/70 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-slate-700/50
                    transform hover:-translate-y-2 transition-transform duration-300 ease-in-out
                    hover:shadow-indigo-500/20 hover:border-indigo-500/30">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover"
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
            )
          })}
        </div>
        <Link href={`/projects/${slug}`} className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}