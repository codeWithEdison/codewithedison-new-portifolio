
import React, { useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "IRIMS - Integrated Risk Management System",
    category: "Enterprise",
    description: "A comprehensive risk management platform for large organizations, featuring real-time analytics and compliance tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    liveUrl: "#",
  },
  {
    id: 2,
    title: "UR-AMS - University Resource Allocation System",
    category: "Education",
    description: "An AI-powered system for optimizing resource allocation across university departments, improving efficiency by 35%.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TensorFlow", "Django", "React", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "HIV-TB Dashboard",
    category: "Healthcare",
    description: "Interactive data visualization platform for healthcare providers, offering real-time insights into patient care metrics.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["D3.js", "React", "Express", "MongoDB", "AWS Lambda"],
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Blockchain Land Registry",
    category: "Blockchain",
    description: "Decentralized application for transparent land ownership records, using smart contracts to ensure data integrity.",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "IPFS"],
    githubUrl: "#",
  },
  {
    id: 5,
    title: "AI-Powered Content Generator",
    category: "AI/ML",
    description: "Natural language processing tool that creates contextually relevant content for marketing and educational purposes.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["PyTorch", "FastAPI", "React", "Azure ML", "Docker"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "E-Learning Platform",
    category: "Education",
    description: "Comprehensive learning management system with interactive content, progress tracking, and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

export function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-3">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Featured Work</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg">
              Explore some of my recent projects spanning enterprise systems, AI applications, and blockchain solutions.
            </p>
          </div>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                {/* Project image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity group-hover:opacity-90"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-500 text-white">
                    {project.category}
                  </span>
                </div>
                
                {/* Project info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                  <h4 className="text-xl font-bold mb-2 text-shadow">{project.title}</h4>
                  <p className="text-sm text-gray-200 line-clamp-2 mb-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="inline-block py-1 px-2 rounded text-xs font-medium bg-white/20 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-block py-1 px-2 rounded text-xs font-medium bg-white/20 backdrop-blur-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200">
                    <button className="py-1.5 px-3 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-sm flex items-center gap-1.5">
                      <Layers size={14} />
                      <span>Details</span>
                    </button>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View on GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View live project"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
        
        {/* Project modal - in a real implementation, this would be a more sophisticated component */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <div 
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover object-center"
                />
                <button 
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {selectedProject.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      className="btn-outline flex items-center gap-2"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      className="btn-primary flex items-center gap-2"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>View Live Project</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function X(props: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size} 
      height={props.size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
