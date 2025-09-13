import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your campus assistant. I can help you with academic schedules, facility timings, dining services, library resources, and campus events. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("library") || input.includes("hours")) {
      return "The main library is open Monday-Friday 7 AM - 11 PM, Saturday 9 AM - 9 PM, and Sunday 10 AM - 10 PM. Study rooms are available for booking online!";
    }
    
    if (input.includes("dining") || input.includes("food") || input.includes("cafeteria")) {
      return "Campus dining halls: Main Cafeteria (7 AM - 9 PM), Student Union Food Court (10 AM - 8 PM), and Coffee Corner (6 AM - 6 PM). All accept student meal plans!";
    }
    
    if (input.includes("schedule") || input.includes("class") || input.includes("academic")) {
      return "You can access your academic schedule through the student portal. Registration for next semester opens November 15th. Need help with specific course information?";
    }
    
    if (input.includes("event") || input.includes("activity")) {
      return "Upcoming events: Career Fair (Oct 25), Fall Festival (Oct 31), Study Abroad Info Session (Nov 5). Check the campus calendar for more details!";
    }
    
    if (input.includes("gym") || input.includes("fitness") || input.includes("recreation")) {
      return "The Recreation Center is open daily 5 AM - 11 PM. Facilities include gym, pool, basketball courts, and group fitness classes. Student ID required for access.";
    }
    
    return "I'd be happy to help! I can provide information about library hours, dining services, academic schedules, campus events, and facility access. What specific information are you looking for?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Card className="flex flex-col h-[600px] shadow-chat">
      <div className="bg-gradient-primary text-primary-foreground p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Bot className="h-6 w-6" />
          Campus Assistant
        </h2>
        <p className="text-primary-foreground/80 text-sm">Ask me anything about campus services!</p>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.sender === "bot" && (
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              
              {message.sender === "user" && (
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-secondary-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Ask about campus services..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSend} variant="chat" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};