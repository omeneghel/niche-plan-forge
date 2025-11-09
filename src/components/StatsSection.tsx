export const StatsSection = () => {
  const stats = [
    { number: "30+", label: "Anos de experiência" },
    { number: "500+", label: "Projetos entregues" },
    { number: "95%", label: "Taxa de satisfação" },
    { number: "24h", label: "Resposta média" },
  ];

  return (
    <section className="bg-muted py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
