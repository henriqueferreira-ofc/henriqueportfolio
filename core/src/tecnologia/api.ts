// Implementação completa com tipos e tratamento de erros
export const httpGet = async <T = any>(url: string): Promise<T> => {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.json() as T;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error; // Ou retorne um valor padrão se preferir
    }
  };