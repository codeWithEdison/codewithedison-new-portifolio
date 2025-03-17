// src/services/aiService.ts
import { ApiMessage, Message } from '../types/message';
import { portfolioService } from './portfolioService';

// Hugging Face API key - replace with your actual key
const HUGGING_FACE_API_KEY = "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";
// Model to use - this is a good open-source alternative to GPT models
const MODEL_NAME = "mistralai/Mistral-7B-Instruct-v0.2";

class AiService {
  /**
   * Generate a response using the Hugging Face API
   */
  async generateResponse(messages: Message[]): Promise<string> {
    try {
      console.log("Attempting to use Hugging Face API...");
      
      // Get the last user message
      const userMessages = messages.filter(msg => msg.role === 'user');
      const lastUserMessage = userMessages.length > 0 ? userMessages[userMessages.length - 1] : undefined;
      
      if (!lastUserMessage) {
        console.warn("No user message found - using fallback");
        return this.generateFallbackResponse(messages);
      }
      
      // Get context from portfolio
      const context = portfolioService.generateAiContext(lastUserMessage.content);
      console.log("Generated context for:", lastUserMessage.content);
      
      // Format previous messages for chat history context
      let chatHistory = "";
      for (let i = 0; i < messages.length; i++) {
        const msg = messages[i];
        const role = msg.role === 'user' ? 'User' : 'Assistant';
        chatHistory += `${role}: ${msg.content}\n`;
      }
      
      // Prepare the prompt in instruct format
      const prompt = `<s>[INST] You are Edison's AI assistant. You help answer questions about Edison Uwihanganye, a Computer Scientist, Fullstack Developer, Trainer/Mentor, and AI/Blockchain Enthusiast.

Here is some context information about Edison:
${context}

Chat history:
${chatHistory}

User question: ${lastUserMessage.content}

Answer the question based on the provided context. Be helpful, concise, and friendly. If you don't know the answer, suggest contacting directly through the contact form. [/INST]</s>`;
      
      console.log("Sending request to Hugging Face API...");
      
      // Call Hugging Face Inference API
      const response = await fetch(
        `https://api-inference.huggingface.co/models/${MODEL_NAME}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${HUGGING_FACE_API_KEY}`
          },
          body: JSON.stringify({
            inputs: prompt,
            parameters: {
              max_new_tokens: 500,
              temperature: 0.7,
              top_p: 0.9,
              do_sample: true,
              return_full_text: false
            }
          })
        }
      );
      
      if (!response.ok) {
        const error = await response.text();
        console.error("Hugging Face API error:", error);
        return this.generateFallbackResponse(messages);
      }
      
      const result = await response.json();
      console.log("Received response from Hugging Face API");
      
      // Extract the generated text
      const generatedText = Array.isArray(result) && result.length > 0 
        ? result[0].generated_text 
        : result.generated_text || "I couldn't generate a response.";
      
      return generatedText;
    } catch (error) {
      console.error('Error generating AI response:', error);
      return this.generateFallbackResponse(messages);
    }
  }

  /**
   * Fallback response generator when API is not available
   */
  private generateFallbackResponse(messages: Message[]): string {
    console.log("Using fallback response generator");
    
    // Find the last user message
    const userMessages = messages.filter(msg => msg.role === 'user');
    const lastUserMessage = userMessages.length > 0 ? userMessages[userMessages.length - 1] : undefined;
    const question = lastUserMessage?.content || '';
    
    console.log("Generating fallback for question:", question);
    
    const responses: Record<string, string> = {
      default: "I'm Edison's AI assistant. I can tell you about his skills, projects, and background. What would you like to know?",
      skills: "Edison is a skilled full-stack developer with expertise in React, Next.js, Node.js, and TypeScript. He also has experience in AI/ML, blockchain development, and is an educator & mentor.",
      projects: "Edison has worked on various projects including enterprise solutions, web applications, and blockchain implementations. His portfolio showcases his diverse range of skills.",
      background: "Edison is based in Kigali and has extensive experience in crafting digital experiences and building enterprise solutions.",
      contact: "You can get in touch with Edison through the contact form on this website. He's always open to new opportunities and collaborations!",
      ai: "Edison is an AI/ML enthusiast with experience in implementing machine learning models and AI-powered features in applications. He's particularly interested in practical applications of AI in web development.",
      blockchain: "Edison has expertise in blockchain development, having worked on smart contracts and DApps for financial inclusion projects. He created a blockchain education platform that reached over 1000 developers.",
      mentor: "As a passionate educator and mentor, Edison has guided over 500 developers through their coding journey, helping them build projects, master new technologies, and launch their careers in tech."
    };

    // Expanded keyword matching for better fallback responses
    if (question.toLowerCase().includes('skill') || question.toLowerCase().includes('know') || question.toLowerCase().includes('expert')) 
      return responses.skills;
    if (question.toLowerCase().includes('project') || question.toLowerCase().includes('work') || question.toLowerCase().includes('portfolio')) 
      return responses.projects;
    if (question.toLowerCase().includes('background') || question.toLowerCase().includes('experience') || question.toLowerCase().includes('history')) 
      return responses.background;
    if (question.toLowerCase().includes('contact') || question.toLowerCase().includes('reach') || question.toLowerCase().includes('email') || question.toLowerCase().includes('message')) 
      return responses.contact;
    if (question.toLowerCase().includes('ai') || question.toLowerCase().includes('machine learning') || question.toLowerCase().includes('ml')) 
      return responses.ai;
    if (question.toLowerCase().includes('blockchain') || question.toLowerCase().includes('crypto') || question.toLowerCase().includes('web3')) 
      return responses.blockchain;
    if (question.toLowerCase().includes('mentor') || question.toLowerCase().includes('teach') || question.toLowerCase().includes('training')) 
      return responses.mentor;
    
    return responses.default;
  }

  /**
   * Enhanced version with context from a knowledge base
   */
  async generateEnhancedResponse(messages: Message[]): Promise<string> {
    return this.generateResponse(messages);
  }
}

export const aiService = new AiService();