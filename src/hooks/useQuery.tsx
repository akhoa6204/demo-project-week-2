import { useState } from "react";
import type { IParams } from "../interface/IParams";

const useQuery = (params?: IParams) => {
  const [query, setQuery] = useState<IParams>(params || { limit: 8 });
  const updateQuery = (newQuery: IParams) => {
    setQuery((pre) => ({ ...pre, ...newQuery }));
  };
  return {
    query,
    updateQuery,
  };
};
export default useQuery;
