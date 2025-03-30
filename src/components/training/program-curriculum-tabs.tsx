
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Code, FileCode, Layers, Monitor, Server, Braces, Workflow, Database, ShieldCheck, GitBranch, Rocket, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ProgramCurriculumTabs = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {/* Week 1 */}
        <WeekAccordionItem
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
        
        {/* Week 2 */}
        <WeekAccordionItem
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
        
        {/* Week 3 */}
        <WeekAccordionItem
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
        
        {/* Week 4 */}
        <WeekAccordionItem
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
        
        {/* Week 5 */}
        <WeekAccordionItem
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
        
        {/* Week 6 */}
        <WeekAccordionItem
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
        
        {/* Week 7 */}
        <WeekAccordionItem
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
        
        {/* Week 8 */}
        <WeekAccordionItem
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
        
        {/* Week 9 */}
        <WeekAccordionItem
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
        
        {/* Week 10 */}
        <WeekAccordionItem
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
        
        {/* Week 11 */}
        <WeekAccordionItem
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
        
        {/* Week 12 */}
        <WeekAccordionItem
          weekNumber={12}
          title="Advanced Topics & Project Planning"
          description="Explore advanced concepts and plan your final project"
          topics={[
            { icon: <Workflow size={20} />, text: "Industry Project Structure" },
            { icon: <Rocket size={20} />, text: "Performance Optimization" }
          ]}
          task="Create a comprehensive plan for your final project including wireframes, component structure, database schema, and API endpoints."
          technologies={["Next.js", "Prisma", "Docker", "CI/CD", "Storybook"]}
        />
        
        {/* Week 13-16: Final Project */}
        <WeekAccordionItem
          weekNumber={"13-16"}
          title="Final Project Implementation"
          description="Build a full-scale application from start to finish"
          topics={[
            { icon: <Code size={20} />, text: "Frontend Implementation" },
            { icon: <Server size={20} />, text: "Backend & Database" },
            { icon: <Rocket size={20} />, text: "Testing & Deployment" },
            { icon: <Workflow size={20} />, text: "Final Presentation & Portfolio" }
          ]}
          task="Complete a comprehensive full-stack application that demonstrates all the skills learned throughout the course. This includes Next.js frontend, Node.js backend with Prisma, authentication, testing, and cloud deployment."
          technologies={["React/Next.js", "Node.js", "Prisma", "TypeScript", "Tailwind CSS", "Testing", "CI/CD", "Docker"]}
        />
      </Accordion>
    </div>
  );
};

interface WeekAccordionItemProps {
  weekNumber: number | string;
  title: string;
  description: string;
  topics: { icon: React.ReactNode; text: string }[];
  task: string;
  technologies: string[];
}

const WeekAccordionItem = ({ weekNumber, title, description, topics, task, technologies }: WeekAccordionItemProps) => {
  return (
    <AccordionItem value={`week-${weekNumber}`} className="border border-border/50 rounded-lg mb-4 overflow-hidden">
      <AccordionTrigger className="px-6 py-4 bg-gradient-to-r from-accent/10 to-primary/5 dark:from-accent/5 dark:to-primary/10 hover:no-underline group">
        <div className="flex items-center justify-between w-full text-left">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
              Week {weekNumber}
            </Badge>
            <div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 py-4 bg-card">
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
      </AccordionContent>
    </AccordionItem>
  );
};
