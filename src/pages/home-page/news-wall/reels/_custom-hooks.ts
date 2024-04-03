import { useEffect, useState } from "react";
import { mockReels } from "./_mock-data";
import { ReelTyp } from "./_types";

const useReels = () => {
  const [reels, setReels] = useState<ReelTyp[] | null>(null);
  useEffect(() => {
    setReels(mockReels);
  }, []);
  return [reels, setReels];
};
export { useReels };
