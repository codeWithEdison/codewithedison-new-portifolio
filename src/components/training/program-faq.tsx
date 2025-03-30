
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ProgramFaq = () => {
  const faqs = [
    {
      question: "What are the prerequisites for this program?",
      answer: "While no prior coding experience is required, basic computer literacy and familiarity with web concepts are helpful. A strong desire to learn and commitment to the program schedule are essential. All you need is a laptop with internet access and the willingness to put in the work."
    },
    {
      question: "How is the program structured?",
      answer: "The program spans 3 months plus an additional month for the final project. We meet 3 days per week for 3-4 hours per session. Each week focuses on specific topics with practical exercises, and culminates in a weekly project. Between sessions, you'll have assignments and readings to reinforce your learning."
    },
    {
      question: "Is this program fully in-person or available remotely?",
      answer: "We offer both in-person sessions in Kigali and remote options. In-person students benefit from direct interaction with instructors, while remote students join via video conferencing with the same access to materials and support. We use collaborative tools to ensure remote students can participate fully."
    },
    {
      question: "What kind of projects will I build during the program?",
      answer: "You'll build increasingly complex projects each week, from responsive websites to interactive applications with authentication and database integration. By the end of the program, you'll have created a full-stack application that demonstrates all the skills you've learned, which will serve as a centerpiece for your portfolio."
    },
    {
      question: "How much time should I dedicate to the program outside of class?",
      answer: "We recommend allocating 15-20 hours per week outside of class for reviewing materials, completing assignments, and working on projects. The more time you invest, the more you'll benefit from the program."
    },
    {
      question: "What payment options are available?",
      answer: "The full program fee is 600K RWF. We offer a full payment option with a discount, as well as installment plans spread across the duration of the program. A deposit is required to secure your spot. We can discuss flexible payment arrangements based on your situation."
    },
    {
      question: "Will I receive job placement assistance after completion?",
      answer: "Yes! We provide job search support including resume reviews, interview preparation, and connections to our network of hiring partners. While we don't guarantee job placement, we work closely with you to maximize your opportunities and showcase your skills to potential employers."
    },
    {
      question: "What makes this program different from other coding bootcamps?",
      answer: "Our program stands out through its comprehensive curriculum covering both frontend and backend technologies, small class sizes for personalized attention, focus on practical projects rather than just theory, and strong emphasis on modern development practices used in the industry today. We also provide ongoing mentorship even after the program ends."
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our web development program
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-background rounded-xl p-6 shadow-sm border border-border/50">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Don't see your question? <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </section>
  );
};
