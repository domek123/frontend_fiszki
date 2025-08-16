import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSets } from "@/api";
export const useSets = () => {
  const [sets, setSets] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ["sets"],
    queryFn: fetchSets,
  });

  useEffect(() => {
    if (data) {
      setSets(data);
    }
  }, [data]);

  return { sets, isLoading };
};
