
import { useState, useEffect } from 'react';

// A FetchType interface for type-safe API response handling
interface FetchType<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

// Generic custom fetch hook
function useFetchCustom<T>(url: string): FetchType<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const res = await response.json();
        setData(res);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, error, loading };
};
export default useFetchCustom;

