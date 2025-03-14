// src/services/portfolioService.ts
import portfolioData from '../data/portfolio.json';

class PortfolioService {
  // Get all portfolio data
  getAllData() {
    return portfolioData;
  }

  // Get about information
  getAbout() {
    return portfolioData.about;
  }

  // Get all projects
  getProjects() {
    return portfolioData.projects;
  }

  // Get project by title
  getProjectByTitle(title: string) {
    return portfolioData.projects.find(
      project => project.title.toLowerCase() === title.toLowerCase()
    );
  }

  // Get mentorship information
  getMentorship() {
    return portfolioData.mentorship;
  }

  // Get contact information
  getContact() {
    return portfolioData.contact;
  }

  // Search across all portfolio data
  searchPortfolio(query: string) {
    const searchResults = {
      about: {},
      projects: [],
      mentorship: {},
      contact: {}
    };

    // Normalize query
    const normalizedQuery = query.toLowerCase();

    // Search in about section
    const aboutBio = portfolioData.about.bio.toLowerCase();
    if (aboutBio.includes(normalizedQuery)) {
      searchResults.about = portfolioData.about;
    }

    // Search in skills
    const matchingSkills = portfolioData.about.skills.filter(skill => 
      skill.toLowerCase().includes(normalizedQuery)
    );
    if (matchingSkills.length > 0) {
      searchResults.about = portfolioData.about;
    }

    // Search in projects
    portfolioData.projects.forEach(project => {
      const projectText = `
        ${project.title} 
        ${project.description} 
        ${project.technologies.join(' ')} 
        ${project.highlights.join(' ')}
      `.toLowerCase();
      
      if (projectText.includes(normalizedQuery)) {
        searchResults.projects.push(project);
      }
    });

    // Search in mentorship
    const mentorshipText = `
      ${portfolioData.mentorship.description}
      ${portfolioData.mentorship.testimonials.map(t => t.comment).join(' ')}
    `.toLowerCase();
    
    if (mentorshipText.includes(normalizedQuery)) {
      searchResults.mentorship = portfolioData.mentorship;
    }

    return searchResults;
  }

  // Generate AI context from portfolio data
  generateAiContext(query: string) {
    // Search for relevant information
    const searchResults = this.searchPortfolio(query);
    
    // Create a context string
    let context = "";
    
    // Add about information if found
    if (Object.keys(searchResults.about).length > 0) {
      context += `About Edison:\n${portfolioData.about.bio}\n\n`;
      context += `Skills: ${portfolioData.about.skills.join(', ')}\n\n`;
    }
    
    // Add project information if found
    if (searchResults.projects.length > 0) {
      context += "Projects:\n";
      searchResults.projects.forEach(project => {
        context += `- ${project.title}: ${project.description}\n`;
        context += `  Technologies: ${project.technologies.join(', ')}\n`;
        context += `  Highlights: ${project.highlights.join(', ')}\n\n`;
      });
    }
    
    // Add mentorship information if found
    if (Object.keys(searchResults.mentorship).length > 0) {
      context += `Mentorship:\n${portfolioData.mentorship.description}\n\n`;
      context += "Testimonials:\n";
      portfolioData.mentorship.testimonials.forEach(testimonial => {
        context += `"${testimonial.comment}" - ${testimonial.name}, ${testimonial.role}\n`;
      });
    }
    
    // Add contact information if relevant
    if (query.includes("contact") || query.includes("email") || query.includes("reach")) {
      context += "\nContact Information:\n";
      context += `Email: ${portfolioData.contact.email}\n`;
      context += `Location: ${portfolioData.contact.location}\n`;
    }
    
    return context;
  }
}

export const portfolioService = new PortfolioService();