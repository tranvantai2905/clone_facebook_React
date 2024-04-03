import { useInfo } from "@/pages/shared/custom-hooks";
import { Info } from "@/pages/shared/custom-hooks/_types";
import { renderInfoItems, renderNavSideItems } from "./_renders";
import { item_list } from "./_item";

const NavSection = () => {
  const [infos] = useInfo() as [Info];
  return (
    <>
      {" "}
      <div className="px-3 py-2">
        <div className="space-y-1">
          {renderInfoItems(infos)}
          {renderNavSideItems(item_list)}
        </div>
      </div>
    </>
  );
};

export default NavSection;
