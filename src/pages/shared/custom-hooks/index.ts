import { useEffect, useState } from "react";

export type Info = {
  username: string;
  src: string;
};
const mockInfo = {
  username: "Tai Tran",
  src: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/256808720_1029863651198262_2081377557852238490_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeElbsdf6DGOuIQIcPTjPRrOm9DZmEGjJhSb0NmYQaMmFLn3ebPN35K_FmkoJwUI_xefNupRepHqI-rCjnHazCig&_nc_ohc=lsi8_hanT0wAX_KM84u&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDwDC1vkaekvVaxwQCW9hNTH_XekTYIjUqXoqf_zObbOA&oe=6611AD98",
};
const useInfo = () => {
  const [Infos, setInfos] = useState<Info | null>(null);
  useEffect(() => {
    setInfos(mockInfo);
  }, []);
  return [Infos, setInfos];
};
export { useInfo };
