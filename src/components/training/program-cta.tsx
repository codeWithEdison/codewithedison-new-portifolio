
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GlassPanel } from '@/components/ui/glassmorphism';
import { ArrowRight, Calendar, Clock, CheckCircle2, User, Laptop } from 'lucide-react';

export const ProgramCta = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <GlassPanel className="p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Ready to Launch Your
                  <span className="heading-gradient block mt-1">Developer Career?</span>
                </h2>
                
                <p className="text-muted-foreground text-lg">
                  Join Edison's comprehensive 3-month individual training program and transform from beginner 
                  to job-ready full-stack developer with personalized guidance every step of the way.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Build a professional portfolio of real-world projects</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Master in-demand technologies including React, Node.js & more</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Get personalized feedback and guidance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Receive ongoing support and mentorship</p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button size="lg" className="gap-2 text-base" asChild>
                    <a href="#apply">
                      Apply Now <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <div>
                <Card className="p-6 border border-border/50 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Start Date</p>
                        <p className="text-sm text-muted-foreground">may 1, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Application Deadline</p>
                        <p className="text-sm text-muted-foreground">may 15, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Training Format</p>
                        <p className="text-sm text-muted-foreground">Individual online sessions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Laptop className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Schedule</p>
                        <p className="text-sm text-muted-foreground">3 days/week, 2 hours/session</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-md p-4 bg-secondary/30 mb-5">
                    <p className="text-sm font-medium mb-1">Program Fee:</p>
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-bold">600,000 RWF</span>
                      <span className="text-xs text-muted-foreground mb-1">total</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Flexible payment plans available</p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full" size="lg" asChild>
                      <a href="#apply">Apply Now</a>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <a href="#curriculum">View Curriculum</a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
};
