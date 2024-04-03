import dynamicIconImports from "lucide-react/dynamicIconImports";

export type PostActionTyp = {
  text: string;
  icon: {
    name: keyof typeof dynamicIconImports;
    color: string;
  };
};
