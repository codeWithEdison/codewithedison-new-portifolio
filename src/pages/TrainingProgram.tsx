
import React, { useRef, useState } from 'react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { ProgramCurriculumTabs } from '../components/training/program-curriculum-tabs';
import { ProgramHero } from '../components/training/program-hero';
import { ProgramFeatures } from '../components/training/program-features';
import { ProgramFaq } from '../components/training/program-faq';
import { ProgramCta } from '../components/training/program-cta';
import { AskMeAI } from '../components/askme-ai';

const TrainingProgram = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation />
      
      {/* Hero Section */}
      <ProgramHero />
      
      {/* Program Features */}
      <ProgramFeatures />
      
      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
              Comprehensive Curriculum
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our carefully structured program combines theoretical knowledge with hands-on projects
              to ensure you gain practical skills demanded by the industry.
            </p>
          </div>
          
          <ProgramCurriculumTabs />
        </div>
      </section>
      
      {/* FAQ Section */}
      <ProgramFaq />
      
      {/* CTA Section */}
      <ProgramCta />
      
      <Footer />
      
      {/* Ask Me AI Component */}
      <AskMeAI />
    </div>
  );
};

export default TrainingProgram;
