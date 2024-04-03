import { Page, usePages } from "./_custom-hook";
import { renderPages } from "./_renders";

const PageSection = () => {
  const [pages] = usePages() as [Page[]];
  return <>{renderPages(pages)}</>;
};

export default PageSection;
