const MetricsSection = () => {
  const metrics = [
    { value: "15+", label: "Projects" },
    { value: "5+", label: "Years Experience" },
    { value: "3M+", label: "Data Points Processed" },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary glow-text mb-2">
                {metric.value}
              </div>
              <div className="text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
