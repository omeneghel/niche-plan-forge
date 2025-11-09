import { useParams, Navigate } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { ContentSection, Subsection } from "@/components/ContentSection";
import { StatsSection } from "@/components/StatsSection";
import { Helmet } from "react-helmet";
import { useNicheContent } from "@/hooks/useNicheContent";

const IndexDynamic = () => {
  const { niche } = useParams<{ niche: string }>();
  console.log('🔍 DEBUG IndexDynamic - niche param:', niche);
  
  const { content, loading, error } = useNicheContent(niche || "");
  console.log('🔍 DEBUG IndexDynamic - content:', content);
  console.log('🔍 DEBUG IndexDynamic - loading:', loading);
  console.log('🔍 DEBUG IndexDynamic - error:', error);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando conteúdo...</p>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Plano de Negócios para {content.niche}: Uma Estratégia Sólida para o Seu Negócio</title>
        <meta
          name="description"
          content={`Descubra como um plano de negócios é crucial para o sucesso de um ${content.niche} e como estruturar o seu negócio com eficiência. Consultoria especializada ECONOMICA UNICAMP.`}
        />
        <link rel="canonical" href={`https://economica.com.br/plano-de-negocios-para-${content.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <Hero niche={content.niche} />
        <StatsSection />

        <main className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Content Column */}
            <article className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div className="text-lg text-foreground/80 leading-relaxed">
                <p>{content.introduction.paragraph1}</p>
                <p className="mt-4">{content.introduction.paragraph2}</p>
              </div>

              {/* Section 1 */}
              <ContentSection id="por-que-montar" title={`Por que montar um plano de negócio para ${content.niche}?`}>
                <p>{content.sections.whyCreate.intro}</p>

                <Subsection title="Conseguir financiamentos e crédito">
                  <p>{content.sections.whyCreate.financing}</p>
                </Subsection>

                <Subsection title="Expandir com novos sócios">
                  <p>{content.sections.whyCreate.partners}</p>
                </Subsection>

                <Subsection title="Entender a viabilidade do negócio">
                  <p>{content.sections.whyCreate.viability}</p>
                </Subsection>
              </ContentSection>

              {/* Section 2 */}
              <ContentSection
                id="o-que-e-importante"
                title={`O que é importante na hora de construir um plano de negócios para ${content.niche}?`}
              >
                <p className="mb-6">{content.sections.whatIsImportant.intro}</p>

                <Subsection title="Pesquisa e análise de mercado">
                  <Subsection title="Análise macroeconômica" level={4}>
                    <p>{content.sections.whatIsImportant.marketResearch.macroeconomic}</p>
                  </Subsection>

                  <Subsection title="Análise do setor" level={4}>
                    <p>{content.sections.whatIsImportant.marketResearch.sector}</p>
                  </Subsection>

                  <Subsection title="Mapeamento do público-alvo" level={4}>
                    <p>{content.sections.whatIsImportant.marketResearch.targetAudience}</p>
                  </Subsection>

                  <Subsection title="Análise da concorrência" level={4}>
                    <p>{content.sections.whatIsImportant.marketResearch.competition}</p>
                  </Subsection>

                  <Subsection title="Estudo da região" level={4}>
                    <p>{content.sections.whatIsImportant.marketResearch.region}</p>
                  </Subsection>
                </Subsection>

                <Subsection title="Plano de marketing">
                  <Subsection title="Análise de metodologias de marketing" level={4}>
                    <p>{content.sections.whatIsImportant.marketing.methodologies}</p>
                  </Subsection>

                  <Subsection title="Estratégias de marketing" level={4}>
                    <p>{content.sections.whatIsImportant.marketing.strategies}</p>
                  </Subsection>

                  <Subsection title="Fidelização dos clientes" level={4}>
                    <p>{content.sections.whatIsImportant.marketing.customerLoyalty}</p>
                  </Subsection>

                  <Subsection title="Painel de indicadores do marketing" level={4}>
                    <p>{content.sections.whatIsImportant.marketing.indicators}</p>
                  </Subsection>
                </Subsection>

                <Subsection title="Plano operacional">
                  <Subsection title="Espaço físico" level={4}>
                    <p>{content.sections.whatIsImportant.operational.physicalSpace}</p>
                  </Subsection>

                  <Subsection title="Metodologia 5W2H" level={4}>
                    <p>{content.sections.whatIsImportant.operational.methodology5w2h}</p>
                  </Subsection>

                  <Subsection title="Quadro organizacional" level={4}>
                    <p>{content.sections.whatIsImportant.operational.organizationalChart}</p>
                  </Subsection>

                  <Subsection title="Softwares úteis" level={4}>
                    <p>{content.sections.whatIsImportant.operational.usefulSoftware}</p>
                  </Subsection>

                  <Subsection title="Relacionamento com cliente" level={4}>
                    <p>{content.sections.whatIsImportant.operational.customerRelationship}</p>
                  </Subsection>

                  <Subsection title="Mapeamento dos processos" level={4}>
                    <p>{content.sections.whatIsImportant.operational.processMapping}</p>
                  </Subsection>
                </Subsection>

                <Subsection title="Plano financeiro">
                  <Subsection title="Levantamento de custos" level={4}>
                    <p>{content.sections.whatIsImportant.financial.costSurvey}</p>
                  </Subsection>

                  <Subsection title="Análise do investimento inicial" level={4}>
                    <p>{content.sections.whatIsImportant.financial.initialInvestment}</p>
                  </Subsection>

                  <Subsection title="Projeção da receita" level={4}>
                    <p>{content.sections.whatIsImportant.financial.revenueProjection}</p>
                  </Subsection>

                  <Subsection title="Cálculo de indicadores" level={4}>
                    <p>{content.sections.whatIsImportant.financial.indicatorsCalculation}</p>
                  </Subsection>
                </Subsection>

                <Subsection title="Plano estratégico">
                  <Subsection title="Análise SWOT" level={4}>
                    <p>{content.sections.whatIsImportant.strategic.swotAnalysis}</p>
                  </Subsection>

                  <Subsection title="Plano de Metas" level={4}>
                    <p>{content.sections.whatIsImportant.strategic.goalsPlanning}</p>
                  </Subsection>
                </Subsection>

                <Subsection title="Análise de Riscos">
                  <Subsection title="Matriz de riscos" level={4}>
                    <p>{content.sections.whatIsImportant.risks.riskMatrix}</p>
                  </Subsection>
                </Subsection>
              </ContentSection>

              {/* Section 3 */}
              <ContentSection
                id="por-que-contratar"
                title={`Por que contratar uma consultoria para construir um plano de negócios para ${content.niche}?`}
              >
                <p>{content.sections.whyHire.paragraph1}</p>
                <p className="mt-4">{content.sections.whyHire.paragraph2}</p>
              </ContentSection>

              {/* Section 4 */}
              <ContentSection id="o-que-esta-incluido" title="O que estará incluído no seu plano de negócios?">
                <Subsection title={`Plano estratégico inicial para ${content.niche}`}>
                  <p>{content.sections.whatIsIncluded.strategicPlan}</p>
                </Subsection>

                <Subsection title={`Pesquisa e análise de mercado para ${content.niche}`}>
                  <p>{content.sections.whatIsIncluded.marketResearch}</p>
                </Subsection>

                <Subsection title={`Plano de marketing para ${content.niche}`}>
                  <p>{content.sections.whatIsIncluded.marketingPlan}</p>
                </Subsection>

                <Subsection title={`Plano operacional para ${content.niche}`}>
                  <p>{content.sections.whatIsIncluded.operationalPlan}</p>
                </Subsection>

                <Subsection title={`Plano financeiro para ${content.niche}`}>
                  <p>{content.sections.whatIsIncluded.financialPlan}</p>
                </Subsection>

                <Subsection title={`Plano estratégico final para ${content.niche}`}>
                  <p>{content.sections.whatIsIncluded.strategicPlanFinal}</p>
                </Subsection>

                <Subsection title={`Análise de riscos para ${content.niche}`}>
                  <p>{content.sections.whatIsIncluded.riskAnalysis}</p>
                </Subsection>

                <Subsection title={`Relatório final para ${content.niche}`}>
                  <p>{content.sections.whatIsIncluded.finalReport}</p>
                </Subsection>
              </ContentSection>

              {/* CTA Final */}
              <section className="bg-gradient-to-br from-accent/15 to-accent/5 rounded-xl p-8 border-2 border-accent/30 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Solicite seu Plano de Negócios para {content.niche} agora!
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Entre em contato com a ECONOMICA e transforme sua ideia em um negócio de sucesso.
                </p>
                <a
                  href="#contact-form"
                  className="inline-block bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  Falar com um Especialista
                </a>
              </section>
            </article>

            {/* Sidebar Column */}
            <aside className="lg:col-span-1">
              <div id="contact-form">
                <ContactForm niche={content.niche} />
              </div>
            </aside>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-8 mt-16">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <p>&copy; 2025 ECONOMICA - Empresa Júnior do Instituto de Economia da UNICAMP. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IndexDynamic;
