import {
  Avatar as AvatarPrime,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface AvatarProps {
  src?: string;
}
const Avatar = ({ src }: AvatarProps) => {
  return (
    <AvatarPrime className="h-6 w-6">
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
