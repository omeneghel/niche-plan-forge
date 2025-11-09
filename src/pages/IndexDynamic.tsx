import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

type PageData = {
  title: string;
  hero?: { headline?: string; subheadline?: string };
  sections?: Array<{ title?: string; text?: string; bullets?: string[] }>;
  cta?: { label?: string; href?: string };
};

export default function IndexDynamic() {
  const { slug } = useParams<{ slug: string }>();

  const { data, isLoading, isError } = useQuery<PageData>({
    queryKey: ["page", slug],
    queryFn: async () => {
      const res = await fetch(`/content/${slug}.json`, { cache: "no-store" });
      if (!res.ok) throw new Error("not found");
      return res.json();
    },
    enabled: !!slug
  });

  if (isLoading) {
    return <main className="p-6 max-w-3xl mx-auto text-xl">Carregando…</main>;
  }

  if (isError || !data) {
    return <main className="p-6 max-w-3xl mx-auto text-xl">Página não encontrada</main>;
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>{data.title}</title>
      </Helmet>

      <h1 className="text-3xl font-bold">{data.hero?.headline ?? data.title}</h1>
      {data.hero?.subheadline && <p className="mt-2 text-muted-foreground">{data.hero.subheadline}</p>}

      <div className="mt-8 space-y-8">
        {data.sections?.map((s, i) => (
          <section key={i} className="space-y-2">
            {s.title && <h2 className="text-xl font-semibold">{s.title}</h2>}
            {s.text && <p>{s.text}</p>}
            {s.bullets && (
              <ul className="list-disc pl-6 space-y-1">
                {s.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {data.cta?.label && (
        <div className="mt-10">
          <a href={data.cta.href ?? "#"} className="inline-flex items-center rounded-xl px-4 py-2 bg-primary text-primary-foreground">
            {data.cta.label}
          </a>
        </div>
      )}
    </main>
  );
}
