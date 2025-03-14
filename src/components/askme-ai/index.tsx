
import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageCircle, Send, User, X, Mic, Circle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/components/theme-provider';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

const defaultMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Hi there! I\'m Edison\'s AI assistant. Feel free to ask me anything about Edison, his skills, projects, or background!',
    timestamp: new Date(),
  },
];

const generateResponse = async (question: string): Promise<string> => {
  // This is a mock response - in a real application you would integrate with an AI API
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
  
  const responses: Record<string, string> = {
    default: "I'm Edison's AI assistant. I can tell you about his skills, projects, and background. What would you like to know?",
    skills: "Edison is a skilled full-stack developer with expertise in React, Next.js, Node.js, and TypeScript. He also has experience in AI/ML, blockchain development, and is an educator & mentor.",
    projects: "Edison has worked on various projects including enterprise solutions, web applications, and blockchain implementations. His portfolio showcases his diverse range of skills.",
    background: "Edison is based in Kigali and has extensive experience in crafting digital experiences and building enterprise solutions.",
    contact: "You can get in touch with Edison through the contact form on this website. He's always open to new opportunities and collaborations!",
  };

  // Simple keyword matching
  if (question.toLowerCase().includes('skill')) return responses.skills;
  if (question.toLowerCase().includes('project')) return responses.projects;
  if (question.toLowerCase().includes('background') || question.toLowerCase().includes('experience')) return responses.background;
  if (question.toLowerCase().includes('contact') || question.toLowerCase().includes('reach')) return responses.contact;
  
  return responses.default;
};

export const AskMeAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();
  const { theme } = useTheme();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get AI response
      const response = await generateResponse(input);
      
      // Add AI message
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecordVoice = () => {
    // Mock voice recording functionality
    if (isRecording) {
      setIsRecording(false);
      toast({
        title: "Voice input captured",
        description: "Voice recording is not yet fully implemented.",
      });
    } else {
      setIsRecording(true);
      toast({
        title: "Recording started",
        description: "Speak now... (Note: This is a demo feature)",
      });
      
      // Mock recording ending after 3 seconds
      setTimeout(() => {
        setIsRecording(false);
      }, 3000);
    }
  };

  const clearConversation = () => {
    setMessages(defaultMessages);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-24 right-6 z-50 rounded-full w-14 h-14 bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-md md:max-w-lg w-full p-0 overflow-hidden bg-background/95 backdrop-blur-sm border-l border-border/50">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between bg-background/80 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Ask Me AI</h3>
                <p className="text-xs text-muted-foreground">Ask Edison anything</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs" 
                onClick={clearConversation}
              >
                Clear chat
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-background/50 to-background/30">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "mb-4 flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-start gap-2 max-w-[80%]",
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                        message.role === "user"
                          ? "bg-blue-500"
                          : "bg-primary/20"
                      )}
                    >
                      {message.role === "user" ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div
                      className={cn(
                        "rounded-lg p-3",
                        message.role === "user"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                          : theme === "dark"
                          ? "bg-gray-800 text-gray-100"
                          : "bg-gray-100 text-gray-800"
                      )}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      <p className="text-[10px] opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center mb-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="ml-2 flex items-center space-x-1 text-primary">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  <span className="text-xs font-medium">Thinking...</span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-background/80 backdrop-blur-sm">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                type="button"
                variant="outline" 
                size="icon"
                disabled={isLoading}
                onClick={handleRecordVoice}
                className={cn(
                  "flex-shrink-0",
                  isRecording && "bg-red-500 text-white hover:bg-red-600 hover:text-white"
                )}
              >
                {isRecording ? (
                  <Circle className="h-4 w-4 fill-current animate-pulse" />
                ) : (
                  <Mic className="h-4 w-4" />
                )}
              </Button>
              <Button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};
