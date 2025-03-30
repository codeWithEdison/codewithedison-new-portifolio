
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Code, GraduationCap, FileCheck, Users, Rocket, Briefcase, Award } from 'lucide-react';

export const ProgramFeatures = () => {
  const features = [
    {
      icon: <BookOpen className="h-12 w-12 p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" />,
      title: "Project-Based Learning",
      description: "Build 12+ real-world projects to apply your skills and create an impressive portfolio that showcases your abilities to employers."
    },
    {
      icon: <Code className="h-12 w-12 p-2 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400" />,
      title: "Modern Tech Stack",
      description: "Learn the most in-demand technologies used by top companies including React, Node.js, TypeScript, Tailwind CSS, and PostgreSQL."
    },
    {
      icon: <GraduationCap className="h-12 w-12 p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400" />,
      title: "Industry Expert Instructors",
      description: "Learn from experienced developers with real-world industry experience who provide personalized guidance throughout your journey."
    },
    {
      icon: <FileCheck className="h-12 w-12 p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400" />,
      title: "Comprehensive Curriculum",
      description: "Our curriculum is carefully structured to cover both fundamental concepts and advanced techniques needed for modern web development."
    },
    {
      icon: <Users className="h-12 w-12 p-2 rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400" />,
      title: "Small Class Size",
      description: "Limited to 15 students per cohort to ensure you receive personalized attention and support throughout the program."
    },
    {
      icon: <Rocket className="h-12 w-12 p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400" />,
      title: "Career-Focused",
      description: "Develop job-ready skills with a focus on the practical aspects of development that employers are actively seeking."
    },
    {
      icon: <Briefcase className="h-12 w-12 p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" />,
      title: "Job Placement Support",
      description: "Receive guidance on resume building, technical interviews, and connections to our network of hiring partners."
    },
    {
      icon: <Award className="h-12 w-12 p-2 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400" />,
      title: "Certification",
      description: "Earn a certificate of completion recognized by our industry partners to validate your skills to potential employers."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Program Highlights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our intensive program provides everything you need to launch your career in web development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-200 hover:shadow-md group">
              <CardHeader className="pb-2">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
