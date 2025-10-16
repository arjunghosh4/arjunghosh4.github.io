import { useState } from "react";
import Hero from "@/components/Hero";
import ChatInterface from "@/components/ChatInterface";
import QuickActions from "@/components/QuickActions";
import MetricsSection from "@/components/MetricsSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <ChatInterface />
        <section className="text-center py-10 text-muted-foreground text-sm border-t border-primary/20">
          <p>
            I created <strong>Arjun.AI</strong> as a personal experiment to blend storytelling and technology — 
            turning my resume and data projects into an interactive experience powered by LangChain and AWS Bedrock.
          </p>
        </section>
        <QuickActions />
        <MetricsSection />
        
        {/* Contact Button */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Button
              onClick={() => setContactOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow-pulse text-lg px-8 py-6"
            >
              Reach out to Arjun
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Index;
