import { Card, CardContent } from "@/components/ui/card";
import { ReelTyp } from "./_types";
import Avatar from "@/components/custom/avatar";

interface ReelProps {
  reel: ReelTyp;
}
const Reel = ({ reel }: ReelProps) => {
  return (
    <div className="p-1">
      <Card className="h-60 w-36 cursor-pointer">
        <CardContent className="relative flex aspect-square h-full w-full items-center justify-center overflow-hidden rounded-lg p-0">
          <div className="absolute left-3 top-2 h-fit w-fit overflow-hidden rounded-full bg-blue-500 p-1">
            <Avatar src={reel?.avatarSrc} className="h-8 w-8" />
          </div>
          <img src={reel.src} className="h-full w-full object-cover" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Reel;
