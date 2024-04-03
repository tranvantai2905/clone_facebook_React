import { AppContext } from "@/app-context";
import { AppContextTyp } from "@/app-context/type";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
//
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

const LoginBox = () => {
  const { login } = useContext(AppContext) as AppContextTyp;
  const navigator = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, actions) => {
      setTimeout(() => {
        actions.setSubmitting(false);
        handleLogin(values);
        navigator("/home");
      }, 2000);
    },
  });
  const handleLogin = (input: { email: string; password: string }) => {
    const email = input["email"];
    const password = input["password"];
    const info = { email, password };
    login(info);
    toast.success("Login succeeded", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };
  return (
    <div className="flex flex-col rounded-md bg-white p-5 shadow-2xl">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex w-[330px] flex-col gap-3">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        <div className="mt-3 flex flex-col items-center">
          {formik.isSubmitting ? (
            <Button disabled className="w-full">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button className="w-full" type="submit" onBlur={formik.handleBlur}>
              Login
            </Button>
          )}
          {/* <Button className="w-full" type="submit" onBlur={formik.handleBlur}>
            Login
          </Button> */}
          <a className="py-5 text-xs">Forgotten password? </a>
        </div>
        <hr></hr>
        <div className="mt-5 flex justify-center">
          <Button>Create new account</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginBox;
