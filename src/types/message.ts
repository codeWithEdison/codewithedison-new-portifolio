// src/types/message.ts
export type MessageRole = 'user' | 'assistant' | 'system';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface ApiMessage {
  role: MessageRole;
  content: string;
}

export interface ApiResponse {
  message: string;
  timestamp: Date;
}