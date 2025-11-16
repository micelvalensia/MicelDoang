import { ArrowRight, GitHubIcon } from "@/app/_components/Icons";

type Projects = {
  id: number,
  title: string,
  description: string,
  image: string,
  tech: string[],
  github: string
}

export default function CardProject({project}: {project: Projects}) {
  return (
    <div className="w-full">
      <div 
        className="group relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-all duration-300 rounded-lg overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-light text-black dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.description}
          </p>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="text-xs text-neutral-500 dark:text-neutral-500 font-mono uppercase tracking-wider"
              >
                {tech}{index < project.tech.length - 1 ? ' /' : ''}
              </span>
            ))}
          </div>
          {/* GitHub Link */}
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800 group/link"
          >
            <div className="flex items-center gap-2 text-black dark:text-white">
              <GitHubIcon />
              <span className="text-sm font-mono">View Code</span>
            </div>
            <ArrowRight className="w-4 h-4 text-black dark:text-white opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  )
}