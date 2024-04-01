import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginBox = () => {
  return (
    <div className="flex flex-col rounded-md bg-white p-5 shadow-2xl">
      <div className="flex w-[330px] flex-col gap-3">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </div>
      <div className="mt-3 flex flex-col items-center">
        <Button className="w-full">Login</Button>
        <a className="py-5 text-xs">Forgotten password? </a>
      </div>
      <hr></hr>
      <div className="mt-5 flex justify-center">
        <Button>Create new account</Button>
      </div>
    </div>
  );
};

export default LoginBox;
