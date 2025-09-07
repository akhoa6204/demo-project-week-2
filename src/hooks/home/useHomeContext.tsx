import { useContext } from "react";
import { HomeContext, type HomeContextType } from "./HomeContext";

export default function useHomeContext(): HomeContextType {
  const ctx = useContext(HomeContext);
  if (!ctx)
    throw new Error("useHomeContext must be used within <HomeProvider>");
  return ctx;
}
