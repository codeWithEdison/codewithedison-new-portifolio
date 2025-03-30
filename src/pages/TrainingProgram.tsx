
import React from 'react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { ProgramCurriculumTabs } from '../components/training/program-curriculum-tabs';
import { ProgramHero } from '../components/training/program-hero';
import { ProgramFeatures } from '../components/training/program-features';
import { ProgramFaq } from '../components/training/program-faq';
import { ProgramCta } from '../components/training/program-cta';
import { ProgramApplicationForm } from '../components/training/program-application-form';
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
              to ensure you gain practical skills demanded by the industry. The program spans 16 weeks, 
              with the final 4 weeks dedicated to the capstone project.
            </p>
          </div>
          
          <ProgramCurriculumTabs />
        </div>
      </section>
      
      {/* Application Form Section */}
      <section id="apply" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
              Apply Now
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards your development career. This is an individual online training program 
              designed and delivered by Edison UWIHANGANYE (CodeWithEdison), consisting of 2-hour sessions, 3 days per week.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ProgramApplicationForm />
          </div>
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
