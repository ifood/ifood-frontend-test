import React, { createContext, useContext, useCallback, useState } from "react";
import ToastContainer from "../components/ToastContainer";

import { uuid } from 'uuidv4';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addToast = useCallback(({type, title, description}: Omit<ToastMessage, 'id'>) => {
    const id = uuid()

    const toast = {
      id,
      title,
      type,
      description
    }

    setMessages(oldMessages => [...oldMessages, toast])
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages => oldMessages.filter(message => message.id !== id))
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export { ToastProvider, useToast };
