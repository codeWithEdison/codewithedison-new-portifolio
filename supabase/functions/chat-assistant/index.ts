import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, stream = false } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Context about Edison from his websites
    const contextInfo = `
# About Edison UWIHANGANYE (CodeWithEdison)

## Professional Profile
Edison is a passionate Full Stack Developer with expertise in AI/ML and Blockchain, committed to building enterprise-grade solutions and mentoring the next generation of developers.

## Professional Philosophy
With over a decade of experience in software development, Edison has specialized in building robust enterprise systems that scale. His focus has always been on creating solutions that not only meet technical requirements but also provide exceptional user experiences.

Beyond coding, he is deeply committed to knowledge sharing through mentoring developers and training educators. He believes that technology should be accessible to all, and works to bridge the gap between complex technical concepts and practical applications.

## Career Highlights
- **Senior Full Stack Developer (2020 - Present)**: Leading development of enterprise applications for government and private sectors, with a focus on AI-powered systems and blockchain solutions.
- **Technical Educator (2018 - Present)**: Designing and delivering curriculum for technology education, with a focus on practical skills and real-world applications. Trained over 500 developers and educators.
- **Software Architect (2015 - 2020)**: Designed system architecture for large-scale applications, establishing best practices and technical standards while mentoring development teams.
- **Web Developer (2010 - 2015)**: Developed web applications and e-commerce solutions, working across the full stack and gaining expertise in modern web technologies.

## Technical Skills
### Frontend (Expert - 90%)
- React (9 years experience)
- Next.js (9 years experience)
- TypeScript (9 years experience)
- Tailwind CSS (8 years experience)

### Backend (Advanced - 85%)
- Node.js
- Python
- Java
- PostgreSQL

### AI/ML (Proficient - 73%)
- TensorFlow
- PyTorch
- NLP
- Computer Vision

### Blockchain (Proficient - 78%)
- Solidity
- Web3.js
- Smart Contracts
- DeFi Development

## Notable Projects
1. **UR-AMS - University Asset Management System**: An AI-powered system for optimizing resource allocation across university departments, improving efficiency by 35%. (Python, TensorFlow, Django)

2. **HIV-TB Dashboard**: Interactive data visualization platform for healthcare providers, offering real-time insights into patient care metrics. (D3.js, React, Express)

3. **CareSphere DApp**: Blockchain-based healthcare management application using smart contracts for secure health records. (Solidity, React, Web3.js)

4. **Balance DApp**: Decentralized application for checking wallet balances and making transactions on blockchain. (Solidity, Ethereum, Web3.js)

5. **GENRE-RECOMMENDATION-API**: Machine learning-based music genre recommendation system with RESTful API integration using Express. (Python, Express.js, ML Libraries)

6. **X-Ticket**: Modern ticketing platform providing seamless event ticket management and distribution. (React, Node.js, PostgreSQL)

## Contact Information
- Email: edsnknv@gmail.com
- Phone: +250788240303
- Location: Kigali, Rwanda

---

# Individual Training Program: Full-Stack Web Development

## Program Overview
Edison offers a comprehensive individual online training program in Full-Stack Web Development. This is a **personalized 1-on-1 training program** designed and delivered by Edison UWIHANGANYE (CodeWithEdison).

## Key Program Details
- **Duration**: 3 months of intensive training + 1 month for final project (16 weeks total)
- **Format**: 100% Online, individual sessions
- **Schedule**: 3 days per week, 2 hours per session
- **Training Type**: Individual program with personalized attention (NOT a class-based program)
- **Cost**: 600,000 RWF (Flexible payment plans available)
- **Next Cohort**: May 1, 2025
- **Application Deadline**: April 15, 2025

## Program Highlights
1. **Project-Based Learning**: Build 12+ real-world projects to create an impressive portfolio
2. **Modern Tech Stack**: Learn React, Node.js, TypeScript, Tailwind CSS, PostgreSQL, and more
3. **Personalized Guidance**: Individual attention throughout your journey
4. **Comprehensive Curriculum**: Covers fundamental concepts and advanced techniques
5. **Career-Focused**: Job-ready skills with practical development focus
6. **Job Placement Support**: Resume building, technical interview prep, and hiring partner connections
7. **Certification**: Industry-recognized certificate of completion

## Weekly Curriculum Breakdown

**Week 1**: Web Fundamentals & Modern HTML/CSS
- Master the fundamentals of modern web development with HTML5 and CSS3

**Week 2**: Modern CSS Frameworks & Tools
- Learn utility-first CSS with Tailwind and preprocessing with SASS

**Week 3**: JavaScript Fundamentals & ES6+
- Master modern JavaScript features and DOM manipulation

**Week 4**: Advanced JavaScript & Introduction to TypeScript
- Learn advanced JS concepts and start with TypeScript

**Week 5**: React Fundamentals
- Master the fundamentals of React and building component-based UIs

**Week 6**: Advanced React & State Management
- Learn advanced React patterns and global state management

**Week 7**: Backend Fundamentals with Node.js
- Start building server-side applications with Node.js and Express

**Week 8**: Databases & ORM
- Learn database design and ORM patterns with Prisma

**Week 9**: Authentication & Security
- Implement secure authentication and proper security measures

**Week 10**: Full-Stack Integration
- Connect frontend and backend with modern patterns and Next.js

**Week 11**: DevOps & Deployment
- Learn deployment workflows, containerization, and CI/CD

**Week 12**: Advanced Topics & Project Planning
- Explore advanced concepts and plan your final project

**Week 13-16**: Final Project Implementation
- Build a full-scale application from start to finish

## Prerequisites
No prior programming experience required. The program is designed to take beginners to job-ready developers.

## What Makes This Program Different
- **Individual Format**: This is NOT a class-based bootcamp - it's personalized 1-on-1 training
- **Experienced Instructor**: Learn from Edison, who has trained over 500 developers
- **Flexible Schedule**: Individual sessions can be adapted to your needs
- **Real-World Focus**: Build actual projects that demonstrate job-ready skills

## Application Process
To apply for the program, students submit an application form with:
- Full Name
- Email
- Phone Number
- Educational Background
- Programming Experience
- Expectations from the program

Applications are sent to:
- WhatsApp: +250788240303
- Email: edsnknv@gmail.com

## Contact for More Information
- WhatsApp: +250 788 240 303
- Email: edsnknv@gmail.com
`;

    const systemPrompt = `You are Edison's AI assistant. Your role is to help answer questions about Edison UWIHANGANYE (CodeWithEdison), his work, skills, projects, and his individual training program.

IMPORTANT GUIDELINES:
- Be helpful, friendly, and concise
- Use the context provided to answer questions accurately
- For the training program, always emphasize that it's an INDIVIDUAL ONLINE program (not a class)
- If asked about cost, mention 600,000 RWF with flexible payment plans
- If someone wants to apply or needs more details, direct them to WhatsApp (+250788240303) or email (edsnknv@gmail.com)
- If you don't have specific information, suggest contacting Edison directly
- Keep responses conversational and professional
- Use markdown formatting in your responses: **bold** for emphasis, bullet points for lists, etc.
- Structure your responses with clear formatting to make them easy to read

Context Information:
${contextInfo}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add credits to your workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      throw new Error(`AI gateway error: ${errorText}`);
    }

    // If streaming is requested, return the stream
    if (stream) {
      return new Response(response.body, {
        headers: { 
          ...corsHeaders, 
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
        },
      });
    }

    // Otherwise, return the complete response
    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || "I couldn't generate a response.";
    
    return new Response(
      JSON.stringify({ response: assistantMessage }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("chat-assistant error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});