import { useEffect, useState } from "react";
import { ShortCut } from "./_types";
import { mockShortCut } from "./_mock-data";

const useShortCutSidebar = () => {
  const [shortCuts, setShortCuts] = useState<ShortCut[] | null>(null);
  useEffect(() => {
    setShortCuts(mockShortCut);
  }, []);
  return [shortCuts, setShortCuts];
};
export { useShortCutSidebar };
