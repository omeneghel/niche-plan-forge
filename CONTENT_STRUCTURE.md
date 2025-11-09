# Estrutura de Conteúdo Dinâmico

## Como Funciona

O projeto agora suporta conteúdo dinâmico para múltiplos nichos através de arquivos JSON.

### Estrutura de Rotas

- **Rota dinâmica**: `/plano-de-negocios-para-:niche`
- **Exemplo**: `/plano-de-negocios-para-restaurante`

### Arquivos de Conteúdo

Os arquivos de conteúdo ficam em: `public/content/{nicho}.json`

**Exemplo**: `public/content/restaurante.json`

### Como Adicionar um Novo Nicho

1. **Crie um arquivo JSON** em `public/content/` com o nome do nicho (slug)
   - Exemplo: `pizzaria.json`, `academia.json`, `pet-shop.json`

2. **Siga a estrutura do arquivo** `restaurante.json` como template

3. **Acesse a URL**: `/plano-de-negocios-para-{slug}`
   - Exemplo: `/plano-de-negocios-para-pizzaria`

### Estrutura do JSON

```json
{
  "niche": "Nome do Nicho",
  "slug": "slug-do-nicho",
  "introduction": {
    "paragraph1": "Primeiro parágrafo da introdução",
    "paragraph2": "Segundo parágrafo da introdução"
  },
  "sections": {
    "whyCreate": {
      "intro": "Introdução da seção",
      "financing": "Conteúdo sobre financiamento",
      "partners": "Conteúdo sobre sócios",
      "viability": "Conteúdo sobre viabilidade"
    },
    "whatIsImportant": {
      "intro": "Introdução da seção",
      "marketResearch": {
        "macroeconomic": "Análise macroeconômica",
        "sector": "Análise do setor",
        "targetAudience": "Público-alvo",
        "competition": "Concorrência",
        "region": "Região"
      },
      "marketing": {
        "methodologies": "Metodologias de marketing",
        "strategies": "Estratégias",
        "customerLoyalty": "Fidelização",
        "indicators": "Indicadores"
      },
      "operational": {
        "physicalSpace": "Espaço físico",
        "methodology5w2h": "5W2H",
        "organizationalChart": "Organograma",
        "usefulSoftware": "Softwares",
        "customerRelationship": "Relacionamento",
        "processMapping": "Processos"
      },
      "financial": {
        "costSurvey": "Custos",
        "initialInvestment": "Investimento inicial",
        "revenueProjection": "Projeção de receita",
        "indicatorsCalculation": "Indicadores"
      },
      "strategic": {
        "swotAnalysis": "SWOT",
        "goalsPlanning": "Metas"
      },
      "risks": {
        "riskMatrix": "Matriz de riscos"
      }
    },
    "whyHire": {
      "paragraph1": "Primeiro parágrafo",
      "paragraph2": "Segundo parágrafo (sobre ECONOMICA)"
    },
    "whatIsIncluded": {
      "strategicPlan": "Plano estratégico inicial",
      "marketResearch": "Pesquisa de mercado",
      "marketingPlan": "Plano de marketing",
      "operationalPlan": "Plano operacional",
      "financialPlan": "Plano financeiro",
      "strategicPlanFinal": "Plano estratégico final",
      "riskAnalysis": "Análise de riscos",
      "finalReport": "Relatório final"
    }
  }
}
```

## Integração com N8N

### Fluxo Recomendado

1. **N8N lê o CSV** com os nichos
2. **Para cada nicho**:
   - Chama ChatGPT para gerar o conteúdo
   - Formata o conteúdo no padrão JSON
   - Salva o arquivo em `public/content/{nicho}.json`
   - Faz commit no GitHub

3. **GitHub Actions** faz build automático
4. **Site** carrega o conteúdo dinamicamente

### Exemplo de Prompt para ChatGPT (via N8N)

```
Gere o conteúdo completo para um plano de negócios de {nicho} seguindo esta estrutura JSON:

[Cole a estrutura do JSON aqui]

O conteúdo deve ser específico para {nicho}, com exemplos práticos e dados relevantes do setor.
```

## Componentes

- **`IndexDynamic.tsx`**: Página dinâmica que carrega conteúdo via JSON
- **`useNicheContent.ts`**: Hook para carregar conteúdo do nicho
- **`niche-content.ts`**: Interface TypeScript com a estrutura de dados

## SEO

Cada página dinâmica tem:
- ✅ Title tag otimizado
- ✅ Meta description personalizada
- ✅ Canonical URL
- ✅ Breadcrumb dinâmico
- ✅ Conteúdo único por nicho

## Próximos Passos

1. Gerar conteúdo para os 101 nichos do CSV
2. Criar os arquivos JSON correspondentes
3. Fazer commit no GitHub
4. Testar as páginas geradas
