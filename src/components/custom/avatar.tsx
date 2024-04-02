import {
  Avatar as AvatarPrime,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const Avatar = () => {
  return (
    <AvatarPrime className="h-6 w-6">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarPrime>
  );
};
export default Avatar;
