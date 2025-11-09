import { Breadcrumb } from "./Breadcrumb";

interface HeroProps {
  niche: string;
}

export const Hero = ({ niche }: HeroProps) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Plano de Negócios", href: "/plano-de-negocios" },
    { label: niche },
  ];

  return (
    <section className="relative bg-hero-gradient text-primary-foreground py-20 px-4 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Plano de Negócios para {niche}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 font-medium mb-4">
            Uma Estratégia Sólida para o Seu Negócio
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl leading-relaxed">
            Descubra como um plano de negócios é crucial para o sucesso de um {niche.toLowerCase()} e como estruturar o
            seu negócio com eficiência através da consultoria especializada da ECONOMICA.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};
