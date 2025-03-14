import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Layers, Music, Database, Home, Building, FileStack } from 'lucide-react';
import { Helmet } from 'react-helmet';

const HeartPulse = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    <path d="M3.22 12H9.5l.5-1 .5 2 .5-2 .5 2 .5-1.5 1 3 .5-3.5 1 2 2.22-3"></path>
  </svg>
);

const Vote = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 12 2 2 4-4"></path>
    <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"></path>
    <path d="M22 19H2"></path>
  </svg>
);

const Wallet = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
  </svg>
);

const TicketIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
    <path d="M13 5v2"></path>
    <path d="M13 17v2"></path>
    <path d="M13 11v2"></path>
  </svg>
);

const X = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size || 24} 
    height={props.size || 24} 
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

type Project = {
  id?: number;
  title: string;
  category?: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon?: unknown;
  tags?: string[];
  links?: {
    github?: string;
    live?: string;
  };
  highlight?: boolean;
};

const combinedProjects: Project[] = [
  {
    id: 2,
    title: "UR-AMS - University  Asset Management  System",
    category: "Education",
    description: "An  system for optimizing resource allocation across university departments, improving efficiency by 35%.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TensorFlow", "Django", "React", "PostgreSQL"],
    githubUrl: "https://github.com/codeWithEdison/ur-ams",
    liveUrl: "https://ur-ams.example.com",
    tags: ["Education", "AI", "Resource Management"],
    icon: Building
  },
  {
    id: 3,
    title: "HIV-TB Dashboard",
    category: "Healthcare",
    description: "Interactive data visualization platform for healthcare providers, offering real-time insights into patient care metrics.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["D3.js", "React", "Express", "MongoDB", "AWS Lambda"],
    githubUrl: "https://github.com/codeWithEdison/hiv-tb-dashboard",
    liveUrl: "https://hiv-tb-dashboard.example.com",
    tags: ["Healthcare", "Data Visualization", "Analytics"],
    icon: HeartPulse,
    highlight: true
  },
  {
    id: 4,
    title: "CareSphere DApp",
    category: "Blockchain",
    description: "Blockchain-based healthcare management application using smart contracts for secure health records.",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Solidity", "React", "Web3.js", "Ethereum"],
    githubUrl: "https://github.com/codeWithEdison/careSphere-Dapp",
    tags: ["Blockchain", "Healthcare", "DApp"],
    icon: HeartPulse,
    highlight: true
  },
  {
    id: 5,
    title: "Balance DApp",
    category: "Blockchain",
    description: "Decentralized application for checking wallet balances and making transactions on blockchain.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    githubUrl: "https://github.com/codeWithEdison/Balance-Dapp",
    tags: ["Blockchain", "DApp", "Wallet"],
    icon: Wallet
  },
  {
    id: 6,
    title: "GENRE-RECOMMENDATION-API",
    category: "AI/ML",
    description: "Machine learning-based music genre recommendation system with RESTful API integration using Express.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Express.js", "ML Libraries", "REST API"],
    githubUrl: "https://github.com/codeWithEdison/GENRE-RECOMMANDATION-API",
    tags: ["Machine Learning", "API", "Express", "Music"],
    icon: Music
  },
  {
    id: 7,
    title: "X-Ticket",
    category: "Web",
    description: "Modern ticketing platform providing seamless event ticket management and distribution.",
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "API"],
    githubUrl: "https://github.com/codeWithEdison/x-ticket",
    liveUrl: "https://x-ticket.example.com",
    tags: ["Ticketing", "Events", "Web"],
    icon: TicketIcon
  },
];

const categories = ['All', ...Array.from(new Set(combinedProjects.map((project) => project.category)))].filter(Boolean);

export function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('projects');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = filter === 'All' 
    ? combinedProjects 
    : combinedProjects.filter((project) => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Edison Uwihanganye's Projects - Fullstack Development, AI, Blockchain</title>
        <meta name="description" content="Explore Edison Uwihanganye's portfolio of projects spanning enterprise systems, healthcare applications, AI solutions, and blockchain innovation." />
        <meta name="keywords" content="Edison Uwihanganye, software projects, fullstack development, AI projects, blockchain applications, web development, portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": combinedProjects.map((project, index) => ({
              "@type": "SoftwareApplication",
              "position": index + 1,
              "name": project.title,
              "description": project.description,
              "applicationCategory": project.category || "Web Application",
              "operatingSystem": "Cross-platform",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }))
          })}
        </script>
      </Helmet>

      <section id="projects" className={`py-24 dark:bg-gray-900 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-medium mb-3">Projects</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Featured Work</h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Explore some of my recent projects spanning enterprise systems, AI applications, and blockchain solutions.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category
                    ? "bg-blue-600 text-white shadow-md dark:bg-blue-500"
                    : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setFilter(category)}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id || index} 
                className={`project-card group transform transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.description}`} 
                    className="w-full h-60 object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 opacity-80 transition-opacity duration-300 group-hover:opacity-95"></div>
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-500/80 backdrop-blur-sm text-white">
                      {project.category}
                    </span>
                  </div>

                  {project.highlight && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-amber-500/80 backdrop-blur-sm text-white">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 z-10">
                    <h4 className="text-xl font-bold mb-2 text-shadow">{project.title}</h4>
                    <p className="text-sm text-gray-200 line-clamp-2 mb-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="inline-block py-1 px-2 rounded text-xs font-medium bg-white/30 backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="inline-block py-1 px-2 rounded text-xs font-medium bg-white/30 backdrop-blur-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3 mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      <button 
                        className="py-1.5 px-3 rounded-md bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors text-sm flex items-center gap-1.5"
                        aria-label="View project details"
                      >
                        <Layers size={14} />
                        <span>Details</span>
                      </button>
                      {(project.githubUrl || project.links?.github) && (
                        <a 
                          href={project.githubUrl || project.links?.github} 
                          className="p-1.5 rounded-md bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View on GitHub"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {(project.liveUrl || project.links?.live) && (
                        <a 
                          href={project.liveUrl || project.links?.live} 
                          className="p-1.5 rounded-md bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
            </div>
          )}
          
          {selectedProject && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300" 
              onClick={() => setSelectedProject(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <div 
                className="bg-white/90 dark:bg-gray-800/90 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/30 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-72">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                  <button 
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close modal"
                  >
                    <X size={16} />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-500/80 backdrop-blur-sm text-white">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 id="project-modal-title" className="text-2xl font-bold mb-4 dark:text-white">{selectedProject.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 dark:text-gray-200">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {selectedProject.tags && selectedProject.tags.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 dark:text-gray-200">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700/60 dark:text-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    {(selectedProject.githubUrl || selectedProject.links?.github) && (
                      <a 
                        href={selectedProject.githubUrl || selectedProject.links?.github} 
                        className="btn-outline flex items-center gap-2 dark:text-gray-200 dark:border-gray-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span>View on GitHub</span>
                      </a>
                    )}
                    {(selectedProject.liveUrl || selectedProject.links?.live) && (
                      <a 
                        href={selectedProject.liveUrl || selectedProject.links?.live} 
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
    </>
  );
}
