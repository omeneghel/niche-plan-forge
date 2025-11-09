import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { ContentSection, Subsection } from "@/components/ContentSection";
import { Helmet } from "react-helmet";

const Index = () => {
  // This would come from API/props in production
  const niche = "Restaurante";

  return (
    <>
      <Helmet>
        <title>Plano de Negócios para {niche}: Uma Estratégia Sólida para o Seu Negócio</title>
        <meta name="description" content={`Descubra como um plano de negócios é crucial para o sucesso de um(a) ${niche} e como estruturar o seu negócio com eficiência. Consultoria especializada ECONOMICA UNICAMP.`} />
        <link rel="canonical" href={`https://economica.com.br/plano-de-negocios-para-${niche.toLowerCase()}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Hero niche={niche} />

        <main className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Content Column */}
            <article className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div className="text-lg text-foreground/80 leading-relaxed">
                <p>
                  Um plano de negócios bem estruturado é fundamental para o sucesso de qualquer empreendimento, especialmente no competitivo setor de {niche.toLowerCase()}. Ele funciona como um mapa estratégico que orienta decisões, antecipa desafios e maximiza oportunidades de crescimento.
                </p>
                <p className="mt-4">
                  Neste guia completo, você descobrirá como construir um plano de negócios robusto para seu {niche.toLowerCase()}, com metodologias comprovadas e análises detalhadas que farão a diferença entre o sucesso e o fracasso do seu empreendimento.
                </p>
              </div>

              {/* Section 1 */}
              <ContentSection id="por-que-montar" title={`1 - Por que montar um plano de negócio para ${niche}?`}>
                <p>
                  No setor de alimentação, onde as margens são apertadas e a concorrência é intensa, ter um plano de negócios detalhado não é apenas recomendável – é essencial. Veja as principais razões:
                </p>

                <Subsection title="1.1: Conseguir financiamentos e crédito">
                  <p>
                    Bancos e investidores exigem um plano de negócios sólido antes de liberar recursos. Para um restaurante, isso significa demonstrar claramente a viabilidade financeira, projeções de fluxo de caixa, análise de ponto de equilíbrio e retorno sobre investimento. Sem essas informações detalhadas, as chances de aprovação de crédito são mínimas.
                  </p>
                </Subsection>

                <Subsection title="1.2: Expandir com novos sócios">
                  <p>
                    Se você planeja trazer sócios para investir ou participar da operação do restaurante, um plano de negócios bem elaborado é sua principal ferramenta de convencimento. Ele demonstra profissionalismo, conhecimento do mercado e uma visão clara de crescimento, elementos essenciais para atrair parceiros qualificados.
                  </p>
                </Subsection>

                <Subsection title="1.3: Entender a viabilidade do negócio">
                  <p>
                    Antes de investir tempo e recursos significativos, é crucial validar se seu conceito de restaurante é viável. O plano de negócios força você a analisar custos operacionais, ticket médio necessário, volume de clientes, localização ideal e outros fatores críticos que determinarão se o negócio é sustentável a longo prazo.
                  </p>
                </Subsection>
              </ContentSection>

              {/* Section 2 */}
              <ContentSection id="o-que-e-importante" title={`2 - O que é importante na hora de construir um plano de negócios para ${niche}?`}>
                <p>
                  Um plano de negócios completo para restaurante deve abordar cinco pilares fundamentais, cada um com suas particularidades e metodologias específicas:
                </p>

                <Subsection title="2.1: Pesquisa e análise de mercado">
                  <Subsection title="2.1.1 Análise macroeconômica" level={4}>
                    <p>
                      Compreenda o cenário econômico atual e suas implicações para o setor de alimentação. Fatores como inflação, poder de compra, taxa de desemprego e tendências de consumo impactam diretamente a demanda por serviços de restaurante.
                    </p>
                  </Subsection>

                  <Subsection title="2.1.2 Análise do setor" level={4}>
                    <p>
                      O setor de alimentação fora do lar representa uma parcela significativa da economia. Analise tendências como crescimento do delivery, busca por experiências gastronômicas diferenciadas, preferências por alimentação saudável e o impacto de novas tecnologias na operação de restaurantes.
                    </p>
                  </Subsection>

                  <Subsection title="2.1.3 Mapeamento do público-alvo" level={4}>
                    <p>
                      Defina com precisão quem são seus clientes ideais: faixa etária, renda, preferências gastronômicas, frequência de consumo e motivações de compra. Para um restaurante, entender se seu público busca praticidade, experiência gastronômica, preço acessível ou exclusividade é fundamental para todo o posicionamento do negócio.
                    </p>
                  </Subsection>

                  <Subsection title="2.1.4 Análise da concorrência" level={4}>
                    <p>
                      Mapeie restaurantes concorrentes na região: cardápios, preços, qualidade, atendimento, ambiente e diferenciais. Identifique gaps no mercado que seu restaurante pode preencher e entenda o que já funciona bem na região.
                    </p>
                  </Subsection>

                  <Subsection title="2.1.5 Estudo da região" level={4}>
                    <p>
                      A localização é crucial para restaurantes. Analise fluxo de pessoas, características demográficas, renda média, presença de empresas, escolas e residências, disponibilidade de estacionamento, visibilidade e acessibilidade do ponto.
                    </p>
                  </Subsection>
                </Subsection>

                <Subsection title="2.2: Plano de marketing">
                  <Subsection title="2.2.1 Análise de metodologias de marketing" level={4}>
                    <p>
                      Para restaurantes, o marketing vai além da propaganda. Inclui presença em redes sociais, parcerias com aplicativos de delivery, programa de fidelidade, eventos especiais, marketing de influência e gestão de reputação online.
                    </p>
                  </Subsection>

                  <Subsection title="2.2.2 Estratégias de marketing" level={4}>
                    <p>
                      Defina os 7 P's do marketing aplicados ao seu restaurante: Produto (cardápio), Preço (estratégia de precificação), Praça (localização e canais de venda), Promoção (comunicação), Pessoas (equipe), Processos (experiência do cliente) e Physical Evidence (ambiente físico).
                    </p>
                  </Subsection>

                  <Subsection title="2.2.3 Fidelização dos clientes" level={4}>
                    <p>
                      No setor de alimentação, clientes recorrentes são a chave da lucratividade. Desenvolva estratégias como programas de pontos, descontos para frequentadores, eventos exclusivos, comunicação personalizada e excelência consistente no atendimento.
                    </p>
                  </Subsection>

                  <Subsection title="2.2.4 Painel de indicadores do marketing" level={4}>
                    <p>
                      Estabeleça KPIs claros: custo de aquisição de clientes, ticket médio, frequência de visitas, taxa de retorno, engajamento em redes sociais, avaliações online e conversão de campanhas promocionais.
                    </p>
                  </Subsection>
                </Subsection>

                <Subsection title="2.3: Plano operacional">
                  <Subsection title="2.3.1 Espaço físico" level={4}>
                    <p>
                      Planeje a distribuição do espaço: cozinha (pelo menos 30% da área), salão, estoque, área de higienização, vestiários e banheiros. Considere fluxo de trabalho, normas sanitárias, capacidade de atendimento e conforto dos clientes.
                    </p>
                  </Subsection>

                  <Subsection title="2.3.2 Metodologia 5W2H" level={4}>
                    <p>
                      Organize todas as atividades operacionais do restaurante respondendo: O quê? (tarefas), Quem? (responsáveis), Quando? (prazos), Onde? (locais), Por quê? (justificativas), Como? (métodos) e Quanto? (custos).
                    </p>
                  </Subsection>

                  <Subsection title="2.3.3 Quadro organizacional" level={4}>
                    <p>
                      Defina a estrutura da equipe: chef/cozinheiros, auxiliares de cozinha, garçons, recepcionista, gerente, equipe de limpeza. Especifique funções, responsabilidades e hierarquia.
                    </p>
                  </Subsection>

                  <Subsection title="2.3.4 Softwares úteis" level={4}>
                    <p>
                      Sistemas de gestão são essenciais: PDV (ponto de venda), controle de estoque, gestão financeira, integração com delivery, reservas online e gestão de relacionamento com clientes.
                    </p>
                  </Subsection>

                  <Subsection title="2.3.5 Relacionamento com cliente" level={4}>
                    <p>
                      Estabeleça protocolos de atendimento, gestão de feedback, resolução de reclamações, comunicação pós-visita e programas de relacionamento que garantam experiências positivas consistentes.
                    </p>
                  </Subsection>

                  <Subsection title="2.3.6 Mapeamento dos processos" level={4}>
                    <p>
                      Documente todos os processos-chave: recebimento de mercadorias, armazenamento, preparo, atendimento ao cliente, fechamento de contas, limpeza e manutenção. Processos bem definidos garantem qualidade e eficiência.
                    </p>
                  </Subsection>
                </Subsection>

                <Subsection title="2.4: Plano financeiro">
                  <Subsection title="2.4.1 Levantamento de custos" level={4}>
                    <p>
                      Mapeie todos os custos: fixos (aluguel, salários, contas), variáveis (ingredientes, embalagens, comissões de delivery), impostos e despesas com manutenção. Para restaurantes, o custo com ingredientes tipicamente representa 30-35% do faturamento.
                    </p>
                  </Subsection>

                  <Subsection title="2.4.2 Análise do investimento inicial" level={4}>
                    <p>
                      Calcule o capital necessário para abertura: reforma do espaço, equipamentos de cozinha, mobiliário, utensílios, estoque inicial, licenças, marketing de lançamento e capital de giro para os primeiros meses.
                    </p>
                  </Subsection>

                  <Subsection title="2.4.3 Projeção da receita" level={4}>
                    <p>
                      Estime o faturamento baseando-se em: número de lugares, rotatividade de mesas, ticket médio, dias e horários de funcionamento. Desenvolva três cenários (otimista, realista e pessimista) para os próximos 5 anos.
                    </p>
                  </Subsection>

                  <Subsection title="2.4.4 Cálculo de indicadores" level={4}>
                    <p>
                      Determine o ponto de equilíbrio (quantos clientes/mês são necessários para cobrir custos), payback (tempo para recuperar o investimento), margem de contribuição e lucratividade esperada. Esses indicadores são cruciais para decisões estratégicas.
                    </p>
                  </Subsection>
                </Subsection>

                <Subsection title="2.5: Plano estratégico">
                  <Subsection title="2.5.1 Análise SWOT" level={4}>
                    <p>
                      Identifique Forças (ex: localização privilegiada), Fraquezas (ex: falta de experiência no setor), Oportunidades (ex: crescimento do delivery) e Ameaças (ex: alta concorrência) do seu restaurante.
                    </p>
                  </Subsection>

                  <Subsection title="2.5.2 Plano de Metas" level={4}>
                    <p>
                      Utilize o Balanced Scorecard para definir metas em quatro perspectivas: Financeira (faturamento, lucratividade), Clientes (satisfação, retenção), Processos Internos (eficiência operacional) e Aprendizado (capacitação da equipe).
                    </p>
                  </Subsection>
                </Subsection>

                <Subsection title="2.6: Análise de Riscos">
                  <Subsection title="2.6.1 Matriz de riscos" level={4}>
                    <p>
                      Mapeie riscos do negócio classificando-os por probabilidade e impacto: problemas com fornecedores, variação de preços de ingredientes, questões sanitárias, alta rotatividade de pessoal, mudanças na legislação, crises econômicas. Para cada risco, defina planos de mitigação.
                    </p>
                  </Subsection>
                </Subsection>
              </ContentSection>

              {/* Section 3 */}
              <ContentSection id="por-que-contratar" title={`3 - Por que contratar uma consultoria para construir um plano de negócios para ${niche}?`}>
                <p>
                  Uma empresa especializada reúne experiência acumulada que ajuda a evitar erros comuns de empreendedores que não passaram por um processo de desenvolvimento de planos de negócios. Além de possuir metodologias consolidadas de planejamento e escopos claros de atuação.
                </p>
                <p className="mt-4">
                  A ECONOMICA é a empresa do Instituto de Economia da UNICAMP, atuante desde 1992 (mais de 30 anos), e entrega um Plano de Negócios "fim a fim" — da ambientação e estratégia inicial (MVV e Canvas) à Pesquisa e Análise de Mercado, Plano de Marketing (7Ps e indicadores), Plano Operacional (5W2H, processos, fornecedores), Plano Financeiro (custos, investimento, projeções e cenários, payback/breakeven), estratégia final (SWOT e BSC), matriz de riscos e relatório de apresentação.
                </p>
                <p className="mt-4">
                  O processo é todo conduzido por uma equipe dedicada em cronograma claro, o que reduz riscos e acelera decisões. Você economiza meses de pesquisa e evita erros que podem custar caro no setor de alimentação.
                </p>
              </ContentSection>

              {/* Section 4 */}
              <ContentSection id="o-que-esta-incluido" title="4 - O que estará incluído no seu plano de negócios?">
                <Subsection title={`4.1 - Plano estratégico inicial para ${niche}`}>
                  <p>
                    Definição de Missão, Visão e Valores da empresa e construção do Business Model Canvas, que descreve os blocos fundamentais do negócio (proposta de valor, recursos, canais, clientes e receitas).
                  </p>
                </Subsection>

                <Subsection title={`4.2 - Pesquisa e análise de mercado para ${niche}`}>
                  <p>
                    Inclui análise macroeconômica, análise setorial, mapeamento do público-alvo, análise da concorrência e estudo da região, com base em dados demográficos, espaciais e de consumo específicos do setor de alimentação.
                  </p>
                </Subsection>

                <Subsection title={`4.3 - Plano de marketing para ${niche}`}>
                  <p>
                    Aplicação dos 7 P's do marketing, análise do valor da marca e definição de estratégias de marketing e fidelização de clientes, acompanhadas de um painel de indicadores analíticos para acompanhamento das ações.
                  </p>
                </Subsection>

                <Subsection title={`4.4 - Plano operacional para ${niche}`}>
                  <p>
                    Estruturação do espaço físico e dos processos operacionais, utilização da ferramenta 5W2H para planejamento de atividades, elaboração do quadro organizacional e indicação de softwares de gestão úteis à operação.
                  </p>
                </Subsection>

                <Subsection title={`4.5 - Plano financeiro para ${niche}`}>
                  <p>
                    Levantamento dos custos fixos e variáveis, análise do investimento inicial, projeção de receitas e fluxo de caixa para 5 anos com três cenários (otimista, moderado e pessimista) e cálculo dos indicadores payback e ponto de equilíbrio.
                  </p>
                </Subsection>

                <Subsection title={`4.6 - Plano estratégico final para ${niche}`}>
                  <p>
                    Realização da análise SWOT (forças, fraquezas, oportunidades e ameaças) e elaboração do Plano de Metas com base no Balanced Scorecard (BSC), conectando perspectivas financeira, de mercado, processos internos e aprendizado.
                  </p>
                </Subsection>

                <Subsection title={`4.7 - Análise de riscos para ${niche}`}>
                  <p>
                    Construção da Matriz de Riscos, que identifica e classifica os riscos conforme probabilidade e impacto, oferecendo uma visão clara dos desafios e vulnerabilidades do empreendimento.
                  </p>
                </Subsection>

                <Subsection title={`4.8 - Relatório final para ${niche}`}>
                  <p>
                    Entrega de um documento consolidado com todas as análises e recomendações, acompanhado de apresentação final à equipe cliente, garantindo compreensão total dos resultados e orientações.
                  </p>
                </Subsection>
              </ContentSection>

              {/* CTA Final */}
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Solicite seu Plano de Negócios para {niche} agora!
                </h2>
                <p className="text-lg mb-6 text-primary-foreground/90">
                  Entre em contato com a ECONOMICA e transforme sua ideia em um negócio de sucesso.
                </p>
                <p className="text-sm text-primary-foreground/80">
                  Preencha o formulário ao lado e nossa equipe entrará em contato em até 24 horas.
                </p>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className="lg:col-span-1">
              <ContactForm niche={niche} />
            </aside>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-muted border-t border-border py-8 px-4 mt-16">
          <div className="container mx-auto max-w-7xl text-center text-sm text-muted-foreground">
            <p>
              &copy; 2025 ECONOMICA - Empresa Júnior do Instituto de Economia da UNICAMP. 
              Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
