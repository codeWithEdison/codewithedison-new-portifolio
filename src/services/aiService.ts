import { Message } from '@/types/message';
import { portfolioService } from './portfolioService';

// Get Hugging Face API key and model name from environment variables
const HUGGING_FACE_API_KEY = import.meta.env.VITE_HUGGING_FACE_API_KEY;
const MODEL_NAME = import.meta.env.VITE_MODEL_NAME || "mistralai/Mistral-7Instruct-v0.2";

class AIService {
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

  // Generate AI response using Hugging Face API
  async generateResponse(messages: Message[]): Promise<string> {
    try {
      // Get the last user message
      const userMessages = messages.filter(msg => msg.role === 'user');
      const lastUserMessage = userMessages.length > 0 ? userMessages[userMessages.length - 1] : undefined;
      
      if (!lastUserMessage) {
        console.warn("No user message found - using fallback");
        return this.generateFallbackResponse(messages);
      }
      
      // Generate context based on the user's query
      const context = await this.generateContext(lastUserMessage.content);
      
      // Format previous messages for chat history context
      let chatHistory = "";
      for (let i = 0; i < messages.length; i++) {
        const msg = messages[i];
        const role = msg.role === 'user' ? 'User' : 'Assistant';
        chatHistory += `${role}: ${msg.content}\n`;
      }
      
      // Always attempt to use Hugging Face API first
      console.log("Attempting to use Hugging Face API...");
      try {
        // Check if API key is available
        if (!HUGGING_FACE_API_KEY) {
          console.warn("No Hugging Face API key found in environment variables");
          throw new Error("Missing API key");
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
          throw new Error(`API error: ${error}`);
        }
        
        const result = await response.json();
        console.log("Received response from Hugging Face API");
        
        // Extract the generated text
        const generatedText = Array.isArray(result) && result.length > 0 
          ? result[0].generated_text 
          : result.generated_text || "I couldn't generate a response.";
        
        return generatedText;
        
      } catch (huggingFaceError) {
        // Only use the fallback if the Hugging Face API call fails
        console.error("Hugging Face API failed, using fallback:", huggingFaceError);
        return this.generateFallbackResponse(messages);
      }
    } catch (error) {
      console.error('Error in generate response flow:', error);
      return this.generateFallbackResponse(messages);
    }
  }
  
  // Fallback response generation
  private generateFallbackResponse(messages: Message[]): string {
    console.log("Using fallback response generator");
    
    // Find the last user message
    const userMessages = messages.filter(msg => msg.role === 'user');
    const lastUserMessage = userMessages.length > 0 ? userMessages[userMessages.length - 1] : undefined;
    const question = lastUserMessage?.content || '';
    
    console.log("Generating fallback for question:", question);
    
    const normalizedQuery = question.toLowerCase();
    
    // Training program specific responses
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
    
    // General responses based on keywords
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
    if (normalizedQuery.includes('skill') || normalizedQuery.includes('know') || normalizedQuery.includes('expert')) 
      return responses.skills;
    if (normalizedQuery.includes('project') || normalizedQuery.includes('work') || normalizedQuery.includes('portfolio')) 
      return responses.projects;
    if (normalizedQuery.includes('background') || normalizedQuery.includes('experience') || normalizedQuery.includes('history')) 
      return responses.background;
    if (normalizedQuery.includes('contact') || normalizedQuery.includes('reach') || normalizedQuery.includes('email') || normalizedQuery.includes('message')) 
      return responses.contact;
    if (normalizedQuery.includes('ai') || normalizedQuery.includes('machine learning') || normalizedQuery.includes('ml')) 
      return responses.ai;
    if (normalizedQuery.includes('blockchain') || normalizedQuery.includes('crypto') || normalizedQuery.includes('web3')) 
      return responses.blockchain;
    if (normalizedQuery.includes('mentor') || normalizedQuery.includes('teach') || normalizedQuery.includes('training')) 
      return responses.mentor;
    
    return responses.default;
  }
}

export const aiService = new AIService();