
import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { GlassPanel } from './ui/glassmorphism';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
    <section id="contact" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 to-blue-50"></div>
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-3">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg">
              Have a project in mind or want to explore collaboration opportunities? I'd love to hear from you.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <GlassPanel className="p-8 h-full" intensity="light">
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
              <p className="text-gray-600 mb-8">
                Feel free to reach out using any of the methods below. I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-2 rounded-full bg-blue-100 text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Email</h5>
                    <a href="mailto:edison@example.com" className="text-blue-600 hover:underline">edison@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-2 rounded-full bg-blue-100 text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Phone</h5>
                    <a href="tel:+123456789" className="text-blue-600 hover:underline">+123 456 789</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-2 rounded-full bg-blue-100 text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Location</h5>
                    <p className="text-gray-600">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h5 className="font-medium mb-4">Connect with me</h5>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="GitHub profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
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
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold mb-6">Send Me a Message</h4>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="input-field"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="input-field"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="input-field resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
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
