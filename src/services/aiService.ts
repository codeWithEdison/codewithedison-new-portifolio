
import { ApiMessage, Message } from '@/types/message';
import { portfolioService } from './portfolioService';
import { config } from '@/config/env';
import { OpenAI } from 'openai';

class AIService {
  private openai: OpenAI | null = null;
  
  constructor() {
    // Initialize OpenAI if API key is available
    if (config.openai.apiKey) {
      this.openai = new OpenAI({
        apiKey: config.openai.apiKey,
        dangerouslyAllowBrowser: true
      });
    }
  }

  // Generate context for the AI based on user query
  private async generateContext(query: string): Promise<string> {
    // Get portfolio context
    const portfolioContext = portfolioService.generateAiContext(query);
    
    // Get training program information if the query seems related
    let trainingContext = "";
    if (this.isTrainingRelatedQuery(query)) {
      trainingContext = this.getTrainingProgramContext();
    }
    
    // Combine contexts
    return `${portfolioContext}\n\n${trainingContext}`.trim();
  }
  
  // Check if a query is related to the training program
  private isTrainingRelatedQuery(query: string): boolean {
    const trainingKeywords = [
      'training', 'program', 'course', 'curriculum', 'learn', 'teaching',
      'bootcamp', 'class', 'cohort', 'session', 'instruction', 'workshop',
      'fee', 'cost', 'price', 'payment', 'enrollment', 'certificate',
      'fullstack', 'development', 'web development', 'coding'
    ];
    
    const normalizedQuery = query.toLowerCase();
    return trainingKeywords.some(keyword => normalizedQuery.includes(keyword));
  }
  
  // Get information about the training program
  private getTrainingProgramContext(): string {
    return `
    About Edison's Training Program:
    
    Edison offers a comprehensive 3-month Full-Stack Web Development program priced at 600,000 RWF. The program includes:
    
    - Duration: 3 months of instruction + 1 month for the final project
    - Schedule: 3 days per week, with weekly practical projects
    - Curriculum: Covers frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, Databases)
    - Project-based: Students build 12+ projects throughout the program
    - Small class size: Limited to 15 students for personalized attention
    - Career support: Resume building, interview preparation, and industry connections
    
    The program is designed to take students from beginners to job-ready developers through hands-on projects and practical exercises using modern technologies like React, TypeScript, Node.js, and more.
    
    Payment plans are available, and the program offers both in-person (Kigali) and remote options for students.
    `;
  }

  // Generate AI response
  async generateResponse(messages: Message[]): Promise<string> {
    try {
      // Extract the last user message to generate context
      const lastUserMessage = messages.filter(m => m.role === 'user').pop();
      
      if (!lastUserMessage) {
        return "I couldn't process your request. Please try asking a question.";
      }
      
      // Generate context based on the user's query
      const context = await this.generateContext(lastUserMessage.content);
      
      // If OpenAI is not initialized, use a fallback approach
      if (!this.openai) {
        return this.generateFallbackResponse(lastUserMessage.content, context);
      }
      
      // Prepare messages for the API
      const apiMessages: ApiMessage[] = [
        {
          role: 'system',
          content: `You are an AI assistant for Edison, a full-stack developer and coding instructor. 
          Respond to questions about Edison's background, skills, projects, and training program.
          
          Here is relevant information to help you answer the question:
          
          ${context}
          
          Be friendly, helpful, and concise. If you don't have enough information to answer a question, 
          suggest how the user could contact Edison directly. Don't make up information that's not provided.`
        },
        ...messages.map(msg => ({ role: msg.role, content: msg.content }))
      ];
      
      // Make API call to OpenAI
      const response = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 500
      });
      
      return response.choices[0].message.content || "I couldn't generate a response. Please try again.";
      
    } catch (error) {
      console.error('Error generating AI response:', error);
      return "I'm having trouble connecting to my knowledge base. Please try again later.";
    }
  }
  
  // Fallback response generation when OpenAI is not available
  private generateFallbackResponse(query: string, context: string): string {
    // Simple keyword matching for fallback responses
    const normalizedQuery = query.toLowerCase();
    
    if (this.isTrainingRelatedQuery(normalizedQuery)) {
      if (normalizedQuery.includes('cost') || normalizedQuery.includes('price') || normalizedQuery.includes('fee')) {
        return "The Full-Stack Web Development program costs 600,000 RWF for the full 3-month curriculum plus 1 month for the final project. We offer flexible payment plans to accommodate different financial situations.";
      }
      
      if (normalizedQuery.includes('duration') || normalizedQuery.includes('long') || normalizedQuery.includes('time')) {
        return "The program runs for 3 months of intensive training plus an additional month dedicated to building your final project. We meet 3 days per week for 3-4 hours each session.";
      }
      
      if (normalizedQuery.includes('curriculum') || normalizedQuery.includes('learn') || normalizedQuery.includes('cover')) {
        return "The curriculum covers the entire full-stack development process. In Month 1, you'll learn HTML, CSS, JavaScript, and TypeScript. Month 2 focuses on React, state management, Node.js and databases. Month 3 covers authentication, full-stack integration, and deployment. Each week includes practical projects to apply what you've learned.";
      }
      
      return "My Full-Stack Web Development program is designed to take you from beginner to job-ready in 3 months. The program costs 600,000 RWF and includes project-based learning with modern technologies like React, Node.js, and TypeScript. We meet 3 days per week and have both in-person and remote options available. Would you like specific information about the curriculum, schedule, or enrollment process?";
    }
    
    // Default response with prompt to contact directly
    return "I'd be happy to help with your question, but I might not have all the specific details you need. You can contact Edison directly through the contact form for the most up-to-date information. Is there something specific about Edison's background, skills, or services that I can try to help with?";
  }
}

export const aiService = new AIService();
