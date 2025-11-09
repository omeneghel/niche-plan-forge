import { useState, useEffect } from 'react';
import { NicheContent } from '@/types/niche-content';

export const useNicheContent = (nicheSlug: string) => {
  const [content, setContent] = useState<NicheContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('🔍 DEBUG useNicheContent - Fetching:', `/${nicheSlug}.json`);
        const response = await fetch(`/${nicheSlug}.json`);
        console.log('🔍 DEBUG useNicheContent - Response status:', response.status, response.ok);
        
        if (!response.ok) {
          throw new Error(`Conteúdo não encontrado para o nicho: ${nicheSlug}`);
        }
        
        const data: NicheContent = await response.json();
        console.log('🔍 DEBUG useNicheContent - Data loaded:', data);
        setContent(data);
      } catch (err) {
        console.error('🔍 DEBUG useNicheContent - Error:', err);
        setError(err instanceof Error ? err.message : 'Erro ao carregar conteúdo');
      } finally {
        setLoading(false);
      }
    };

    if (nicheSlug) {
      console.log('🔍 DEBUG useNicheContent - nicheSlug:', nicheSlug);
      loadContent();
    } else {
      console.log('🔍 DEBUG useNicheContent - nicheSlug is empty!');
    }
  }, [nicheSlug]);

  return { content, loading, error };
};
