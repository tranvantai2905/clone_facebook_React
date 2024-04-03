import { useShortCutSidebar } from "./_custom-hook";
import { renderShortCutItems } from "./_renders";
import { ShortCut } from "./_types";

const ShortCutSection = () => {
  const [shortCuts] = useShortCutSidebar() as [ShortCut[]];
  return (
    <>
      <h2 className="z-0 px-7 text-lg font-semibold tracking-tight">
        Your shortcuts
      </h2>
      <div className="px-3 py-2">
        <div className="space-y-1">{renderShortCutItems(shortCuts)}</div>
      </div>
    </>
  );
};

export default ShortCutSection;
