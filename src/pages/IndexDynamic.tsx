import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

type Section = { title?: string; text?: string; bullets?: string[] };
type PageData = {
  title: string;
  hero?: { headline?: string; subheadline?: string };
  sections?: Section[];
  cta?: { label?: string; href?: string };
};

function str(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

function strArrFrom(obj: unknown) {
  if (Array.isArray(obj)) return obj.filter((x) => typeof x === "string" && x.trim()) as string[];
  if (obj && typeof obj === "object") return Object.values(obj).filter((x) => typeof x === "string" && x.trim()) as string[];
  return [];
}

function normalize(raw: any): PageData {
  const obj = Array.isArray(raw) ? raw[0] : raw;
  const title = obj?.niche ? `Plano de Negócios para ${obj.niche}` : str(obj?.title) || "Página";
  const sections: Section[] = [];

  const intro1 = str(obj?.introduction?.paragraph1);
  const intro2 = str(obj?.introduction?.paragraph2);
  const introTxt = [intro1, intro2].filter(Boolean).join("\n\n");
  if (introTxt) sections.push({ title: "Introdução", text: introTxt });

  const why = obj?.sections?.whyCreate ?? {};
  const whyBullets = [str(why.financing), str(why.partners), str(why.viability)].filter(Boolean);
  if (str(why.intro) || whyBullets.length) sections.push({ title: "Por que criar um plano", text: str(why.intro), bullets: whyBullets });

  const wi = obj?.sections?.whatIsImportant ?? {};
  const blocks = [
    ["Pesquisa de mercado", wi.marketResearch],
    ["Marketing", wi.marketing],
    ["Operacional", wi.operational],
    ["Financeiro", wi.financial],
    ["Estratégia", wi.strategic],
    ["Riscos", wi.risks],
  ] as const;
  for (const [label, block] of blocks) {
    const bullets = strArrFrom(block);
    if (bullets.length) sections.push({ title: label, bullets });
  }

  const whyHire = obj?.sections?.whyHire ?? {};
  const whyHireTxt = [str(whyHire.paragraph1), str(whyHire.paragraph2)].filter(Boolean).join("\n\n");
  if (whyHireTxt) sections.push({ title: "Por que contratar", text: whyHireTxt });

  const included = obj?.sections?.whatIsIncluded ?? {};
  const incBullets = strArrFrom(included);
  if (incBullets.length) sections.push({ title: "O que está incluído", bullets: incBullets });

  return {
    title,
    hero: { headline: title },
    sections,
  };
}

export default function IndexDynamic() {
  const { slug } = useParams<{ slug: string }>();

  const { data, isLoading, isError } = useQuery<PageData>({
    queryKey: ["page", slug],
    queryFn: async () => {
      const res = await fetch(`/content/${slug}.json`, { cache: "no-store" });
      if (!res.ok) throw new Error("not found");
      const json = await res.json();
      return normalize(json);
    },
    enabled: !!slug,
  });

  if (isLoading) return <main className="p-6 max-w-3xl mx-auto text-xl">Carregando…</main>;
  if (isError || !data) return <main className="p-6 max-w-3xl mx-auto text-xl">Página não encontrada</main>;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>{data.title}</title>
      </Helmet>

      <h1 className="text-3xl font-bold">{data.hero?.headline ?? data.title}</h1>

      <div className="mt-8 space-y-8">
        {(data.sections ?? []).map((s, i) => (
          <section key={i} className="space-y-2">
            {s.title && <h2 className="text-xl font-semibold">{s.title}</h2>}
            {s.text && <p style={{ whiteSpace: "pre-line" }}>{s.text}</p>}
            {s.bullets && s.bullets.length > 0 && (
              <ul className="list-disc pl-6 space-y-1">
                {s.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
