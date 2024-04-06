import Footer from "../shared/component/footer";
import LoginBox from "./LoginBox";
const LoginPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 bg-[#f0f2f5] pb-36 pt-32">
        <div className="flex max-w-[24%] flex-col items-start gap-5">
          <img
            className="m-[-38px] mt-[-100px] h-24"
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="Facebook"
          />
          <p className="ml-[-10px] break-words text-2xl">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <LoginBox />
          <p className="text-sm">
            <b>Create a Page</b> for a celebrity, brand or business.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
