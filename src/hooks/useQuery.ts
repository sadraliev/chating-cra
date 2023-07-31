import { useState, useEffect, useRef } from "react";

const queryCache: Record<string, any> = {};

interface QueryResult<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

function useQuery<T>(
  key: string,
  queryFunction: () => Promise<T>
): QueryResult<T> {
  const isMounted = useRef(true);

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (queryCache[key]) {
          setData(queryCache[key]);
        } else {
          const result = await queryFunction();
          if (isMounted.current) {
            setData(result);
            queryCache[key] = result;
          }
        }
        setIsLoading(false);
      } catch (err) {
        if (isMounted.current) {
          setError(err as Error);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, [key, queryFunction]);

  return { data, error, isLoading };
}

export default useQuery;
