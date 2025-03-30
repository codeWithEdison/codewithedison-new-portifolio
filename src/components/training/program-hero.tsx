
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glassmorphism';
import { Calendar, Clock, MapPin, GraduationCap, Users, Layers } from 'lucide-react';

export const ProgramHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-violet-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-sm bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400">
                Professional Training Program
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Full-Stack Web Development
                <span className="heading-gradient block">Accelerated Program</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Become a job-ready full-stack developer in just 3 months with our intensive, project-based 
              curriculum that covers modern web technologies from HTML & CSS to React, Node.js, and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <GraduationCap className="h-5 w-5" />
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#curriculum">
                  <Layers className="h-5 w-5" />
                  View Curriculum
                </a>
              </Button>
            </div>

            <div className="pt-3">
              <p className="text-sm text-muted-foreground">
                Next cohort starts on <span className="font-medium text-foreground">July 1, 2024</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <GlassCard className="p-6 sm:p-8 relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Program Details</h3>
                <Badge className="text-xl py-1 px-4">600K RWF</Badge>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">3 months + 1 month for final project</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Schedule</p>
                    <p className="text-sm text-muted-foreground">3 days per week, 3-4 hours per session</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Kigali, Rwanda & Remote options available</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Class Size</p>
                    <p className="text-sm text-muted-foreground">Limited to 15 students for personalized attention</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full" size="lg">
                  Reserve Your Spot
                </Button>
                <p className="text-xs text-center mt-3 text-muted-foreground">
                  Limited seats available. Payment plans available.
                </p>
              </div>
            </GlassCard>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-blue-500/20 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-violet-500/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
