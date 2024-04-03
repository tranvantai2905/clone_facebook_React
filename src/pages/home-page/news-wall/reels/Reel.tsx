import { Card, CardContent } from "@/components/ui/card";
import { ReelTyp } from "./_types";
import Avatar from "@/components/custom/avatar";
import { Link } from "react-router-dom";

interface ReelProps {
  to?: string;
  reel: ReelTyp;
}
const Reel = ({ to, reel }: ReelProps) => {
  return (
    <Link to={to as string} className="p-1">
      <Card className="group h-60 w-36 cursor-pointer overflow-hidden">
        <CardContent className="relative flex aspect-square h-full w-full items-center justify-center overflow-hidden rounded-lg p-0">
          <div className="absolute left-3 top-2 z-10 h-fit w-fit overflow-hidden rounded-full bg-blue-500 p-1">
            <Avatar src={reel?.avatarSrc} className="h-8 w-8" />
          </div>
          <img
            src={reel.src}
            className="rounded-lg object-cover object-center transition duration-200 ease-in group-hover:scale-105"
          />
          <div className="absolute bottom-3 left-3 w-full">
            <p className="text-xs font-semibold text-white">Tr Thị Minh Ngọc</p>
          </div>
          <div className="pointer-events-none absolute inset-0 z-10 hidden opacity-25 transition duration-200 ease-in group-hover:block group-hover:bg-slate-500"></div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Reel;
