
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { GlassPanel } from './ui/glassmorphism';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) - 0.5;
      const y = ((e.clientY - rect.top) / rect.height) - 0.5;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"></div>
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] dark:bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      {/* Interactive blobs */}
      <div 
        className="absolute -z-10 w-[300px] h-[300px] left-1/4 top-1/3 rounded-full bg-blue-300/10 dark:bg-blue-500/10 blur-3xl"
        style={{ 
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: 'transform 0.2s ease-out' 
        }}
      ></div>
      <div 
        className="absolute -z-10 w-[400px] h-[400px] right-1/4 bottom-1/3 rounded-full bg-violet-300/10 dark:bg-violet-500/10 blur-3xl"
        style={{ 
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          transition: 'transform 0.2s ease-out' 
        }}
      ></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-medium mb-3">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Have a project in mind or want to explore collaboration opportunities? I'd love to hear from you.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <GlassPanel className="p-8 h-full dark:bg-gray-800/30 dark:backdrop-blur-lg dark:border-gray-700/30" intensity="light">
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Feel free to reach out using any of the methods below. I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-4 p-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1 text-gray-900 dark:text-white">Email</h5>
                    <a href="mailto:edison@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">edison@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-4 p-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1 text-gray-900 dark:text-white">Phone</h5>
                    <a href="tel:+123456789" className="text-blue-600 dark:text-blue-400 hover:underline">+123 456 789</a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-4 p-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1 text-gray-900 dark:text-white">Location</h5>
                    <p className="text-gray-600 dark:text-gray-300">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h5 className="font-medium mb-4 text-gray-900 dark:text-white">Connect with me</h5>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors"
                    aria-label="GitHub profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors"
                    aria-label="Twitter profile"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </GlassPanel>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800/90 p-8 rounded-xl shadow-lg dark:shadow-blue-900/5">
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h4>
              
              <div className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-700 transition-all duration-300",
                      focusedField === 'name' 
                        ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20 dark:ring-blue-400/20" 
                        : "border-gray-300 dark:border-gray-600"
                    )}
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -bottom-1 left-6 w-2 h-2 bg-blue-500 dark:bg-blue-400 rotate-45 transform transition-all duration-300"></div>
                  )}
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-700 transition-all duration-300",
                      focusedField === 'email' 
                        ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20 dark:ring-blue-400/20" 
                        : "border-gray-300 dark:border-gray-600"
                    )}
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -bottom-1 left-6 w-2 h-2 bg-blue-500 dark:bg-blue-400 rotate-45 transform transition-all duration-300"></div>
                  )}
                </div>
                
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-700 transition-all duration-300",
                      focusedField === 'subject' 
                        ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20 dark:ring-blue-400/20" 
                        : "border-gray-300 dark:border-gray-600"
                    )}
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                  />
                  {focusedField === 'subject' && (
                    <div className="absolute -bottom-1 left-6 w-2 h-2 bg-blue-500 dark:bg-blue-400 rotate-45 transform transition-all duration-300"></div>
                  )}
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-700 transition-all duration-300 resize-none",
                      focusedField === 'message' 
                        ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20 dark:ring-blue-400/20" 
                        : "border-gray-300 dark:border-gray-600"
                    )}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                  ></textarea>
                  {focusedField === 'message' && (
                    <div className="absolute -bottom-1 left-6 w-2 h-2 bg-blue-500 dark:bg-blue-400 rotate-45 transform transition-all duration-300"></div>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-all duration-300 relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {isSubmitting ? (
                    <span className="inline-flex items-center relative z-10">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center relative z-10">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
