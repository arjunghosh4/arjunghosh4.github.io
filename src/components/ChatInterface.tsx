import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<Message[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  // ✅ Scroll only inside the chat container — to the top of new message
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight - container.clientHeight,
        behavior: "smooth",
      });
    }
  }, [conversation]);

  // ✅ Keep input focused after every message
  useEffect(() => {
    inputRef.current?.focus();
  }, [conversation]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage: Message = { role: "user", content: message };
    setConversation((prev) => [...prev, userMessage]);
    setMessage("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      const aiMessage: Message = {
        role: "assistant",
        content: data.reply,
      };

      setConversation((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, something went wrong while processing your question.",
      };
      setConversation((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto flex flex-col space-y-6">
        {/* ✅ Only show conversation box after chat starts */}
        {conversation.length > 0 && (
          <div
            ref={messagesContainerRef}
            className="space-y-4 mb-6 max-h-96 overflow-y-auto p-4 bg-card/50 rounded-xl border border-primary/20 scroll-smooth"
          >
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-xl ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-secondary text-foreground border border-primary/30"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="text-xs text-primary font-semibold mb-1">
                      Arjun.AI
                    </div>
                  )}
                  <div className="text-sm leading-relaxed prose prose-invert max-w-none">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {[
            "Who is Arjun?",
            "Summarize Arjun’s background in data analytics.",
            "What did Arjun do at Tata Consultancy Services?",
            "Tell me about the AdTech data platform project.",
            "What tools and technologies does Arjun use?",
          ].map((q) => (
            <button
              key={q}
              onClick={() => {
                setMessage(q);
                handleSend();
              }}
              className="bg-primary/20 text-primary px-4 py-2 rounded-xl hover:bg-primary/30 transition"
            >
              {q}
            </button>
          ))}
        </div>

        {/* ✅ Input stays fixed visually but doesn't block the hero section */}
        <div className="flex gap-3 items-center mt-auto">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Ask me anything about my work…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 h-14 text-lg bg-card border-primary/30 focus:border-primary glow-border rounded-xl transition-all duration-300"
          />
          <Button
            onClick={handleSend}
            className="h-14 px-8 bg-primary hover:bg-primary/90 glow-button rounded-xl font-semibold"
          >
            Let's Chat <Send className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;