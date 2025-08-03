// src/components/ProjectCard.js
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, description, imageUrl, tags, slug }) {
  return (
    <div className="bg-card text-card-foreground backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border
                    transform hover:-translate-y-2 transition-transform duration-300 ease-in-out
                    hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 hover:border-accent">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/projects/${slug}`} className="font-semibold text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}