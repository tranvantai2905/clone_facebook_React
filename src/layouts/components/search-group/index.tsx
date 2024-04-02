import CustomInput from "@/components/custom/input";
import Logo from "./Logo";

const SearchGroup = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-56 items-center p-1">
      <Logo />
      <CustomInput type="text" placeholder="Search Facebook" />
    </div>
  );
};

export default SearchGroup;
