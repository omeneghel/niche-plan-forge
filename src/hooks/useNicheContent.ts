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
        
        const response = await fetch(`/${nicheSlug}.json`);
        
        if (!response.ok) {
          throw new Error(`Conteúdo não encontrado para o nicho: ${nicheSlug}`);
        }
        
        const data: NicheContent = await response.json();
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar conteúdo');
        console.error('Error loading niche content:', err);
      } finally {
        setLoading(false);
      }
    };

    if (nicheSlug) {
      loadContent();
    }
  }, [nicheSlug]);

  return { content, loading, error };
};
