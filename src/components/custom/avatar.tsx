import {
  Avatar as AvatarPrime,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  className?: string;
}
const Avatar = ({ src, className }: AvatarProps) => {
  return (
    <AvatarPrime className={cn("h-6 w-6", className)}>
      {src ? (
        <AvatarImage src={src} alt="@shadcn" />
      ) : (
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      )}
      <AvatarFallback>CN</AvatarFallback>
    </AvatarPrime>
  );
};
export default Avatar;
