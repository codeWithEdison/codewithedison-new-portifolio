
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Code, FileCode, Layers, Monitor, Server, Braces, Workflow, Database, ShieldCheck, GitBranch, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const ProgramCurriculumTabs = () => {
  return (
    <Tabs defaultValue="month1" className="w-full max-w-5xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="month1" className="text-sm sm:text-base py-3">Month 1: Frontend</TabsTrigger>
        <TabsTrigger value="month2" className="text-sm sm:text-base py-3">Month 2: Backend</TabsTrigger>
        <TabsTrigger value="month3" className="text-sm sm:text-base py-3">Month 3: Full-Stack</TabsTrigger>
      </TabsList>
      
      <TabsContent value="month1" className="space-y-4">
        <h3 className="text-xl font-semibold text-center mb-6">Modern Frontend Foundations</h3>
        
        <WeekCard 
          weekNumber={1}
          title="Web Fundamentals & Modern HTML/CSS"
          description="Master the fundamentals of modern web development with HTML5 and CSS3"
          topics={[
            { icon: <Monitor size={20} />, text: "Modern HTML5 Features" },
            { icon: <Layers size={20} />, text: "CSS Fundamentals & Modern Techniques" },
            { icon: <Monitor size={20} />, text: "Responsive Design" }
          ]}
          task="Create a responsive portfolio website template with accessible HTML and modern CSS (no frameworks). Include a contact form with client-side validation."
          technologies={["HTML5", "CSS3", "Semantic HTML", "Flexbox", "Grid"]}
        />
        
        <WeekCard 
          weekNumber={2}
          title="Modern CSS Frameworks & Tools"
          description="Learn utility-first CSS with Tailwind and preprocessing with SASS"
          topics={[
            { icon: <Layers size={20} />, text: "Tailwind CSS" },
            { icon: <FileCode size={20} />, text: "CSS Preprocessors (SASS)" },
            { icon: <Braces size={20} />, text: "CSS-in-JS Introduction" }
          ]}
          task="Rebuild the portfolio from Week 1 using Tailwind CSS, adding dark/light mode toggle, and implementing more complex layout components."
          technologies={["Tailwind CSS", "SASS", "Styled-components"]}
        />
        
        <WeekCard 
          weekNumber={3}
          title="JavaScript Fundamentals & ES6+"
          description="Master modern JavaScript features and DOM manipulation"
          topics={[
            { icon: <Code size={20} />, text: "Modern JavaScript (ES6+)" },
            { icon: <Braces size={20} />, text: "DOM Manipulation" }
          ]}
          task="Build an interactive task management application with vanilla JavaScript (no frameworks). Include features like adding, editing, completing, and filtering tasks with local storage persistence."
          technologies={["JavaScript", "ES6+", "DOM API", "Local Storage"]}
        />
        
        <WeekCard 
          weekNumber={4}
          title="Advanced JavaScript & Introduction to TypeScript"
          description="Learn advanced JS concepts and start with TypeScript"
          topics={[
            { icon: <Code size={20} />, text: "Advanced JavaScript Concepts" },
            { icon: <FileCode size={20} />, text: "TypeScript Fundamentals" }
          ]}
          task="Convert the task management app from Week 3 to TypeScript, adding proper typing, interfaces, and implementing more advanced features like categories and priority levels."
          technologies={["TypeScript", "OOP", "Functional Programming"]}
        />
      </TabsContent>
      
      <TabsContent value="month2" className="space-y-4">
        <h3 className="text-xl font-semibold text-center mb-6">Frontend Frameworks & Backend Foundations</h3>
        
        <WeekCard 
          weekNumber={5}
          title="React Fundamentals"
          description="Master the fundamentals of React and building component-based UIs"
          topics={[
            { icon: <Code size={20} />, text: "React Core Concepts" },
            { icon: <Layers size={20} />, text: "React Router" }
          ]}
          task="Build a multi-page React application with React Router, implementing at least 4 different pages and a global navigation system."
          technologies={["React", "JSX", "Hooks", "React Router"]}
        />
        
        <WeekCard 
          weekNumber={6}
          title="Advanced React & State Management"
          description="Learn advanced React patterns and global state management"
          topics={[
            { icon: <Code size={20} />, text: "Advanced React Hooks" },
            { icon: <Workflow size={20} />, text: "State Management with Redux Toolkit" }
          ]}
          task="Build a product catalog application with Redux Toolkit for state management, implementing filtering, sorting, and a shopping cart feature."
          technologies={["Redux Toolkit", "useContext", "useReducer", "RTK Query"]}
        />
        
        <WeekCard 
          weekNumber={7}
          title="Backend Fundamentals with Node.js"
          description="Start building server-side applications with Node.js and Express"
          topics={[
            { icon: <Server size={20} />, text: "Node.js Fundamentals" },
            { icon: <Workflow size={20} />, text: "Express.js Framework" }
          ]}
          task="Create a RESTful API with Express.js including routes for CRUD operations, implementing proper error handling, and middleware for logging and authentication."
          technologies={["Node.js", "Express.js", "RESTful APIs", "Middleware"]}
        />
        
        <WeekCard 
          weekNumber={8}
          title="Databases & ORM"
          description="Learn database design and ORM patterns with Prisma"
          topics={[
            { icon: <Database size={20} />, text: "Modern Database Options" },
            { icon: <Database size={20} />, text: "Prisma ORM" }
          ]}
          task="Extend the API from Week 7 by connecting it to a PostgreSQL database using Prisma, implementing complex data relationships, and adding pagination/filtering capabilities."
          technologies={["PostgreSQL", "MongoDB", "Prisma", "Database Design"]}
        />
      </TabsContent>
      
      <TabsContent value="month3" className="space-y-4">
        <h3 className="text-xl font-semibold text-center mb-6">Full-Stack Integration & Advanced Topics</h3>
        
        <WeekCard 
          weekNumber={9}
          title="Authentication & Security"
          description="Implement secure authentication and proper security measures"
          topics={[
            { icon: <ShieldCheck size={20} />, text: "Modern Authentication" },
            { icon: <ShieldCheck size={20} />, text: "Security Best Practices" }
          ]}
          task="Implement a complete authentication system for your API with JWT, email verification, password reset, and OAuth integration with at least one provider (Google/GitHub)."
          technologies={["JWT", "OAuth 2.0", "HTTPS", "CORS", "Security"]}
        />
        
        <WeekCard 
          weekNumber={10}
          title="Full-Stack Integration"
          description="Connect frontend and backend with modern patterns and Next.js"
          topics={[
            { icon: <Workflow size={20} />, text: "API Integration with React" },
            { icon: <Code size={20} />, text: "Next.js Fundamentals" }
          ]}
          task="Build a full-stack application using Next.js connecting to your backend API, implementing authentication, and using React Query for data fetching and caching."
          technologies={["Next.js", "React Query", "React Hook Form", "Full-Stack"]}
        />
        
        <WeekCard 
          weekNumber={11}
          title="DevOps & Deployment"
          description="Learn deployment workflows, containerization, and CI/CD"
          topics={[
            { icon: <GitBranch size={20} />, text: "Version Control & Collaboration" },
            { icon: <Workflow size={20} />, text: "Containerization with Docker" },
            { icon: <Rocket size={20} />, text: "Cloud Deployment" }
          ]}
          task="Set up a CI/CD pipeline using GitHub Actions for your application, containerize your backend with Docker, and deploy both frontend and backend to cloud platforms."
          technologies={["Git", "GitHub Actions", "Docker", "Vercel", "Railway"]}
        />
        
        <WeekCard 
          weekNumber={12}
          title="Final Project & Portfolio Enhancement"
          description="Build an industry-level project integrating all skills"
          topics={[
            { icon: <Workflow size={20} />, text: "Industry Project Structure" },
            { icon: <Rocket size={20} />, text: "Performance Optimization" }
          ]}
          task="Complete a comprehensive full-stack application that demonstrates all the skills learned throughout the course."
          technologies={["Next.js", "Prisma", "Docker", "CI/CD", "Storybook"]}
        />
      </TabsContent>
    </Tabs>
  );
};

interface WeekCardProps {
  weekNumber: number;
  title: string;
  description: string;
  topics: { icon: React.ReactNode; text: string }[];
  task: string;
  technologies: string[];
}

const WeekCard = ({ weekNumber, title, description, topics, task, technologies }: WeekCardProps) => {
  return (
    <Card className="transition-all duration-200 hover:shadow-md overflow-hidden group border border-border/50 bg-card">
      <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/5 dark:from-accent/5 dark:to-primary/10 relative overflow-hidden">
        <Badge variant="outline" className="absolute top-3 right-4 bg-background/50 backdrop-blur-sm">
          Week {weekNumber}
        </Badge>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2 mb-6">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="mt-0.5 text-accent">{topic.icon}</div>
              <span>{topic.text}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium text-sm text-muted-foreground mb-2">Weekly Task:</h4>
          <p className="text-sm bg-accent/5 p-3 rounded-md border border-accent/10">{task}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary/50">{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
