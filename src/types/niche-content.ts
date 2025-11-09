export interface NicheContent {
  niche: string;
  slug: string;
  introduction: {
    paragraph1: string;
    paragraph2: string;
  };
  sections: {
    whyCreate: {
      intro: string;
      financing: string;
      partners: string;
      viability: string;
    };
    whatIsImportant: {
      intro: string;
      marketResearch: {
        macroeconomic: string;
        sector: string;
        targetAudience: string;
        competition: string;
        region: string;
      };
      marketing: {
        methodologies: string;
        strategies: string;
        customerLoyalty: string;
        indicators: string;
      };
      operational: {
        physicalSpace: string;
        methodology5w2h: string;
        organizationalChart: string;
        usefulSoftware: string;
        customerRelationship: string;
        processMapping: string;
      };
      financial: {
        costSurvey: string;
        initialInvestment: string;
        revenueProjection: string;
        indicatorsCalculation: string;
      };
      strategic: {
        swotAnalysis: string;
        goalsPlanning: string;
      };
      risks: {
        riskMatrix: string;
      };
    };
    whyHire: {
      paragraph1: string;
      paragraph2: string;
    };
    whatIsIncluded: {
      strategicPlan: string;
      marketResearch: string;
      marketingPlan: string;
      operationalPlan: string;
      financialPlan: string;
      strategicPlanFinal: string;
      riskAnalysis: string;
      finalReport: string;
    };
  };
}
