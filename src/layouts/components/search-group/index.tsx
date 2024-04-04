import CustomInput from "@/components/custom/input";
import Logo from "./Logo";

const SearchGroup = () => {
  return (
    <div className="top-0 z-50 flex w-56 items-center self-start p-1">
      <Logo />
      <CustomInput type="text" placeholder="Search Facebook" />
    </div>
  );
};

export default SearchGroup;
