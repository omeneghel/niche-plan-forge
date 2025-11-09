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
    <section className="bg-hero-gradient text-primary-foreground py-16 px-4 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Plano de Negócios para {niche}: Uma Estratégia Sólida para o Seu Negócio
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
          Descubra como um plano de negócios é crucial para o sucesso de um(a) {niche} e como estruturar o seu negócio com eficiência.
        </p>
      </div>
    </section>
  );
};
