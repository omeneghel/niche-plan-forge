interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const ContentSection = ({ id, title, children }: ContentSectionProps) => {
  return (
    <section id={id} className="mb-12 scroll-mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-foreground">
        {children}
      </div>
    </section>
  );
};

interface SubsectionProps {
  title: string;
  children: React.ReactNode;
  level?: 3 | 4;
}

export const Subsection = ({ title, children, level = 3 }: SubsectionProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeClass = level === 3 ? "text-xl md:text-2xl" : "text-lg md:text-xl";
  
  return (
    <div className="mb-10">
      <HeadingTag className={`${sizeClass} font-semibold text-foreground mb-4`}>
        {title}
      </HeadingTag>
      <div className="text-foreground/80 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
};
