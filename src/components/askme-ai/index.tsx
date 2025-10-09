/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageCircle, Send, User, X, Mic, Circle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/components/theme-provider';
import ReactMarkdown from 'react-markdown';

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
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Call edge function directly with fetch
      const response = await fetch('https://irbypuxccgospzwwdfpv.supabase.co/functions/v1/chat-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyYnlwdXhjY2dvc3B6d3dkZnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MzQ3NDcsImV4cCI6MjA3NTUxMDc0N30.L1skH8ZQXVFlRd6y3Ib9pI-IyzRLxalk-lHc4IQkEUE`
        },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content }))
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to get response from AI assistant");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response || data.message || "I received your message but couldn't generate a proper response.",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get a response. Please try again.",
        variant: "destructive",
      });
      console.error('AI response error:', error);
      
      // Remove the user message on error
      setMessages(prev => prev.filter(m => m.id !== userMessage.id));
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecordVoice = async () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({
        title: "Not Supported",
        description: "Speech recognition is not supported in your browser.",
        variant: "destructive",
      });
      return;
    }

    try {
      if (isRecording) {
        setIsRecording(false);
        return;
      }

      setIsRecording(true);
      
      // Request microphone access
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Use Web Speech API
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        throw new Error("Speech recognition not supported");
      }
      
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        toast({
          title: "Error",
          description: `Failed to recognize speech: ${event.error}`,
          variant: "destructive",
        });
        setIsRecording(false);
      };
      
      recognition.onend = () => {
        setIsRecording(false);
      };
      
      recognition.start();
    } catch (error) {
      console.error('Voice recording error:', error);
      toast({
        title: "Error",
        description: "Failed to start voice recording. Please check microphone permissions.",
        variant: "destructive",
      });
      setIsRecording(false);
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
                      <div className="text-sm prose prose-sm max-w-none dark:prose-invert prose-p:my-2 prose-strong:font-bold prose-strong:text-inherit">
                        {message.role === "assistant" ? (
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => <p className="my-1">{children}</p>,
                              strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                              ul: ({ children }) => <ul className="my-2 ml-4 list-disc">{children}</ul>,
                              ol: ({ children }) => <ol className="my-2 ml-4 list-decimal">{children}</ol>,
                              li: ({ children }) => <li className="my-1">{children}</li>,
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        ) : (
                          <p className="whitespace-pre-line">{message.content}</p>
                        )}
                      </div>
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

// Add TypeScript types for the Speech Recognition API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}