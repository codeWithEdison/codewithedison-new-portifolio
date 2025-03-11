
import React from 'react';
import { GlassCard } from './ui/glassmorphism';
import { Users, BookOpen, Code, Server } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">My Journey & Expertise</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg text-balance">
              I'm a passionate Full Stack Developer with expertise in AI/ML and Blockchain, 
              committed to building enterprise-grade solutions and mentoring the next generation of developers.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl mb-6 transform transition-all hover:scale-[1.01]">
              <img 
                src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Edison working" 
                className="w-full h-auto"
              />
            </div>
            
            <blockquote className="italic text-gray-600 text-lg border-l-4 border-blue-500 pl-4 py-2">
              "I believe in creating technology that solves real problems while being accessible to everyone."
            </blockquote>
          </div>
          
          <div>
            <h4 className="text-2xl font-bold mb-6">My Professional Philosophy</h4>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in software development, I've specialized in building 
              robust enterprise systems that scale. My focus has always been on creating solutions that 
              not only meet technical requirements but also provide exceptional user experiences.
            </p>
            
            <p className="text-gray-600 mb-8">
              Beyond coding, I'm deeply committed to knowledge sharing through mentoring developers 
              and training educators. I believe that technology should be accessible to all, and I work 
              to bridge the gap between complex technical concepts and practical applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 p-2 rounded-lg bg-blue-100 text-blue-600">
                  <Code size={20} />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Development</h5>
                  <p className="text-sm text-gray-600">Enterprise-grade applications with modern tech</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 p-2 rounded-lg bg-blue-100 text-blue-600">
                  <Server size={20} />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Architecture</h5>
                  <p className="text-sm text-gray-600">Scalable systems designed for performance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 p-2 rounded-lg bg-blue-100 text-blue-600">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Education</h5>
                  <p className="text-sm text-gray-600">Curriculum design and technical training</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 p-2 rounded-lg bg-blue-100 text-blue-600">
                  <Users size={20} />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Mentorship</h5>
                  <p className="text-sm text-gray-600">Guiding developers to reach their potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Career Milestones</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="mb-1 flex justify-between items-baseline">
                <h3 className="text-xl font-bold text-gray-900">Senior Full Stack Developer</h3>
                <span className="text-sm text-gray-500">2020 - Present</span>
              </div>
              <p className="text-gray-600">
                Leading development of enterprise applications for government and private sectors, 
                with a focus on AI-powered systems and blockchain solutions.
              </p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="mb-1 flex justify-between items-baseline">
                <h3 className="text-xl font-bold text-gray-900">Technical Educator</h3>
                <span className="text-sm text-gray-500">2018 - Present</span>
              </div>
              <p className="text-gray-600">
                Designing and delivering curriculum for technology education, with a focus on practical 
                skills and real-world applications. Trained over 500 developers and educators.
              </p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="mb-1 flex justify-between items-baseline">
                <h3 className="text-xl font-bold text-gray-900">Software Architect</h3>
                <span className="text-sm text-gray-500">2015 - 2020</span>
              </div>
              <p className="text-gray-600">
                Designed system architecture for large-scale applications, establishing best practices 
                and technical standards while mentoring development teams.
              </p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="mb-1 flex justify-between items-baseline">
                <h3 className="text-xl font-bold text-gray-900">Web Developer</h3>
                <span className="text-sm text-gray-500">2010 - 2015</span>
              </div>
              <p className="text-gray-600">
                Developed web applications and e-commerce solutions, working across the full stack 
                and gaining expertise in modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
