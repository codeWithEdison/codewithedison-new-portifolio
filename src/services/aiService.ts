// src/services/aiService.ts
import OpenAI from 'openai';
import { ApiMessage, Message } from '../types/message';
import { portfolioService } from './portfolioService';

// Initialize OpenAI client with your API key directly
const openai = new OpenAI({
  apiKey: "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", // Replace with your actual API key
  dangerouslyAllowBrowser: true // Required when using in browser environment
});

class AiService {
  /**
   * Generate a response using the OpenAI API
   */
  async generateResponse(messages: Message[]): Promise<string> {
    try {
      // Get the last user message (compatible with older TypeScript)
      const userMessages = messages.filter(msg => msg.role === 'user');
      const lastUserMessage = userMessages.length > 0 ? userMessages[userMessages.length - 1] : undefined;
      let context = '';
      
      // Get portfolio context if there's a user message
      if (lastUserMessage) {
        context = portfolioService.generateAiContext(lastUserMessage.content);
      }

      // Format messages for OpenAI API
      const formattedMessages: ApiMessage[] = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Add system message with context
      const systemMessage: ApiMessage = {
        role: 'system',
        content: `You are Edison's AI assistant. You help answer questions about Edison Uwihanganye, 
        a Computer Scientist, Fullstack Developer, Trainer/Mentor, and AI/Blockchain Enthusiast.
        
        Use the following context information to answer the user's questions:
        ${context}
        
        Be helpful, concise, and friendly in your responses. If you don't know the answer based on the provided context,
        suggest the user reach out directly through the contact form for more specific details.`
      };

      // Create completion
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini', // You can use this or gpt-3.5-turbo
        messages: [systemMessage, ...formattedMessages],
        temperature: 0.7,
        max_tokens: 500,
      });

      return response.choices[0].message.content || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error('Error generating AI response:', error);
      // Fall back to local responses if the API fails
      return this.generateFallbackResponse(messages);
    }
  }

  /**
   * Fallback response generator when API is not available
   */
  private generateFallbackResponse(messages: Message[]): string {
    // Find the last user message
    const userMessages = messages.filter(msg => msg.role === 'user');
    const lastUserMessage = userMessages.length > 0 ? userMessages[userMessages.length - 1] : undefined;
    const question = lastUserMessage?.content || '';
    
    const responses: Record<string, string> = {
      default: "I'm Edison's AI assistant. I can tell you about his skills, projects, and background. What would you like to know?",
      skills: "Edison is a skilled full-stack developer with expertise in React, Next.js, Node.js, and TypeScript. He also has experience in AI/ML, blockchain development, and is an educator & mentor.",
      projects: "Edison has worked on various projects including enterprise solutions, web applications, and blockchain implementations. His portfolio showcases his diverse range of skills.",
      background: "Edison is based in Kigali and has extensive experience in crafting digital experiences and building enterprise solutions.",
      contact: "You can get in touch with Edison through the contact form on this website. He's always open to new opportunities and collaborations!",
    };

    // Simple keyword matching
    if (question.toLowerCase().includes('skill')) return responses.skills;
    if (question.toLowerCase().includes('project')) return responses.projects;
    if (question.toLowerCase().includes('background') || question.toLowerCase().includes('experience')) return responses.background;
    if (question.toLowerCase().includes('contact') || question.toLowerCase().includes('reach')) return responses.contact;
    
    return responses.default;
  }

  /**
   * Enhanced version with context from a knowledge base
   * This is a more advanced implementation that would require backend support
   */
  async generateEnhancedResponse(messages: Message[]): Promise<string> {
    // This would typically be implemented in a backend service
    // For now, we're using the improved version with portfolio context
    return this.generateResponse(messages);
  }
}

export const aiService = new AiService();