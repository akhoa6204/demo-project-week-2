import { useMemo, type ReactNode } from "react";
import { HomeContext } from "./HomeContext";
import useHomeHooks from "./useHomeHooks";

export default function HomeProvider({ children }: { children: ReactNode }) {
  const state = useHomeHooks();
  const value = useMemo(() => state, [state]);
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
