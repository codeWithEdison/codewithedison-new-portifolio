
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PhoneCall, Mail, Send } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
  background: z.string().min(10, { message: "Please provide some information about your background." }),
  experience: z.string().min(10, { message: "Please describe your programming experience." }),
  expectations: z.string().min(10, { message: "Please share what you expect to achieve." }),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions to proceed."
  })
});

export const ProgramApplicationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      background: "",
      experience: "",
      expectations: "",
      termsAccepted: false
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Prepare WhatsApp message (URL encoded)
    const whatsappMessage = encodeURIComponent(`
*New Training Program Application*
*Name:* ${values.fullName}
*Email:* ${values.email}
*Phone:* ${values.phone}
*Background:* ${values.background}
*Experience:* ${values.experience}
*Expectations:* ${values.expectations}
    `);
    const whatsappUrl = `https://wa.me/250788240303?text=${whatsappMessage}`;
    
    // Prepare mailto link
    const emailSubject = encodeURIComponent("New Application: Full-Stack Web Development Program");
    const emailBody = encodeURIComponent(`
Name: ${values.fullName}
Email: ${values.email}
Phone: ${values.phone}

Background: ${values.background}

Experience: ${values.experience}

Expectations: ${values.expectations}
    `);
    const mailtoUrl = `mailto:edsnknv@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Show success toast
    toast.success("Application submitted successfully!", {
      description: "We'll get back to you shortly."
    });

    // Open WhatsApp and email in new tabs
    window.open(whatsappUrl, "_blank");
    window.open(mailtoUrl, "_blank");
    
    // Reset form
    form.reset();
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Apply for Training Program</CardTitle>
        <CardDescription>
          Fill out this application form to join Edison's individual online training program.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+250 7XX XXX XXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="background"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Educational Background</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please share your educational background and current occupation" 
                      className="min-h-[80px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Programming Experience</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe any programming experience you have (it's okay if you're a beginner)" 
                      className="min-h-[80px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expectations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Expectations</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="What do you hope to achieve with this training program?" 
                      className="min-h-[80px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-secondary/20">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Terms and Conditions</FormLabel>
                    <FormDescription>
                      I agree to the terms of service and privacy policy. I understand this is an individual 
                      online training program that runs 3 days per week, 2 hours per session.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <Button type="submit" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Submit Application
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-1.5">
                  <PhoneCall className="h-4 w-4 text-blue-500" />
                  <span>WhatsApp: +250 788 240 303</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <span>Email: edsnknv@gmail.com</span>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
