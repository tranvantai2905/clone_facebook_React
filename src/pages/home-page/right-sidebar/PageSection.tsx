import { usePages } from "./_custom-hook";
import { renderPages } from "./_renders";
import { Page } from "./_types";

const PageSection = () => {
  const [pages] = usePages() as [Page[]];
  return <>{renderPages(pages)}</>;
};

export default PageSection;
