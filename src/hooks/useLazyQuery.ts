import { useState, useRef, useCallback, useEffect } from "react";

const queryCache: Record<string, any> = {};

function useLazyQuery<T>(
  baseKey: string,
  queryFunction: (...args: any[]) => Promise<T>
): [(...args: any[]) => void, T | null, Error | null, boolean] {
  const isMounted = useRef(true);

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const execute = useCallback(
    async (...args: any[]) => {
      // Создаем уникальный ключ на основе baseKey и аргументов
      const key = `${baseKey}-${JSON.stringify(args)}`;

      setIsLoading(true);
      try {
        if (queryCache[key]) {
          setData(queryCache[key]);
          setIsLoading(false);
        } else {
          const result = await queryFunction(...args);
          if (isMounted.current) {
            setData(result);
            queryCache[key] = result;
            setIsLoading(false);
          }
        }
      } catch (err) {
        if (isMounted.current) {
          setError(err as Error);
          setIsLoading(false);
        }
      }
    },
    [baseKey, queryFunction]
  );

  // Убедимся, что мы устанавливаем isMounted.current в false, когда компонент размонтируется
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return [execute, data, error, isLoading];
}

export default useLazyQuery;
