import PrimLayout from "@/layouts/prim-layout";
import HomePage from "@/pages/home-page";
import LoginPage from "@/pages/login-page";

const layouts = {
  atPrimary: PrimLayout,
};

const routers = [
  { path: "", layout: layouts.atPrimary, element: HomePage, needLogin: true },
  { path: "/login", element: LoginPage, needLogin: false },
];

export default routers;
