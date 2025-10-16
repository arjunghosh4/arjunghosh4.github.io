const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground">
        <p className="text-sm">
          I created Arjun.AI as a personal experiment to blend storytelling and technology, turning my resume and data projects into an interactive experience powered by LangChain and AWS Bedrock.
          Built by <span className="text-primary font-semibold">Arjun Krishna Ghosh</span> | 
          Powered by <span className="text-primary">LangChain + AWS Bedrock</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
