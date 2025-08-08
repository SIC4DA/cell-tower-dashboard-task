import { useState, useEffect } from "react";
import cellTowersData from "../mocks/CellTowers.json";
import type { CellTower } from "@/types/tower";

interface UseGetCellTowersReturn {
  data: CellTower[] | null;
  loading: boolean;
  error: string | null;
}

// normally this would be handled using something like react-query where it handles the caching, loading states, and error handling out of the box

const useGetCellTowers = (): UseGetCellTowersReturn => {
  const [data, setData] = useState<CellTower[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCellTowers = async () => {
      try {
        setLoading(true);
        setError(null);

        // a fake network delay (200ms - 500ms)
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 300 + 200),
        );

        const towers = cellTowersData as CellTower[];

        setData(towers);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred",
        );
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCellTowers();
  }, []);

  return { data, loading, error };
};

export default useGetCellTowers;
