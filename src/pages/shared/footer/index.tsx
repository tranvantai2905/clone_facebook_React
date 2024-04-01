import { twMerge } from "tailwind-merge";

const langs = [
  "English (UK)",
  "Tiếng Việt",
  "中文(台灣)",
  "한국어",
  "日本語",
  "Français (France)",
  "ภาษาไทย",
  "Español",
  "Português (Brasil)",
  "Deutsch",
  "Italiano",
];

const features = [
  "Sign",
  "UpLog",
  "inMessengerFacebook",
  "LiteVideoPlacesGamesMarketplaceMeta",
  "PayMeta",
  "StoreMeta",
  "QuestImagine",
  "with Meta",
  "AIInstagramThreadsFundraisersServicesVoting",
  "Information",
  "CentrePrivacy",
  "PolicyPrivacy",
  "CentreGroupsAboutCreate",
  "adCreate",
  "PageDevelopersCareersCookiesAdChoicesTermsHelpContact",
  "uploading",
  "non-usersSettings",
];
const Footer = () => {
  const renderText = (text: string, className?: string) => {
    return (
      <div
        className={twMerge(
          className,
          "p-1 text-[12px] leading-4 text-[#8a8d91]",
        )}
      >
        {text}
      </div>
    );
  };

  return (
    <div className="mt-5 flex min-h-64 w-full justify-center bg-white py-2">
      <div className="min-h-4 w-[50%]">
        <div className="flex">{langs.map((item) => renderText(item))}</div>
        <hr></hr>
        <div className="flex flex-wrap">
          {features.map((item) => renderText(item))}
        </div>
        <div className="mt-2">{renderText("Meta © 2024", "text-[10px]")}</div>
      </div>
    </div>
  );
};

export default Footer;
