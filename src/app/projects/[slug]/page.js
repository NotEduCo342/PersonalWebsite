import { projects } from '@/lib/projectData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';


export async function generateMetadata({ params }) {
  // First, await params to get the slug
  const { slug } = await params;
  
  // Now, find the project using the slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }

  return {
    title: `${project.title} | Mahan`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Mahan`,
      description: project.description,
      url: `https://noteduco342.ir/projects/${project.slug}`,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
        }
      ]
    },
  };
}


export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  // Find the project data based on the slug from the URL
  const project = projects.find((p) => p.slug === slug);

  // If no project is found, display the 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 pt-28 pb-12">
      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row md:space-x-12">

        {/* --- Left Sticky Column --- */}
        <div className="md:w-1/3 md:sticky top-28 self-start">
          <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
          <div className="flex flex-wrap gap-2 my-4">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-slate-400 mb-6">{project.description}</p>
          <Link href={project.githubUrl} className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]">
            <FaGithub size={20} />
            View on GitHub
          </Link>
        </div>

        {/* --- Right Scrollable Column --- */}
        <div className="md:w-2/3 mt-12 md:mt-0">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src={project.imageUrl}
              alt={`Featured image for ${project.title}`}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p>{project.longDescription}</p>
            {/* You can add more markdown or JSX content here */}
          </div>
        </div>

      </div>
    </div>
  );
}