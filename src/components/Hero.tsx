import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold glow-text">
          Hi, I'm Arjun.AI.
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
          The AI-powered Data & Cloud Analyst built by Arjun Ghosh.
        </h2>
        <p className="text-lg text-accent font-medium">
          Ask me about my projects, skills, or experience.
        </p>
      </div>
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        ↓
      </div> */}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <ChevronDown size={36} strokeWidth={2} />
      </div>
    </section>
  );
};

export default Hero;
