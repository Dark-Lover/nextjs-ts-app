import Logo from "./Logo";
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="min-h-[400px] bg-blue-300 flex flex-col items-center py-10">
      <div className="flex flex-col gap-2 items-center sm:flex-row ">
        <Logo />
        <div className="flex  justify-center items-center gap-2">
          <div className="media_icon">
            <BsFacebook />
          </div>
          <div className="media_icon">
            <BsTwitter />
          </div>
          <div className="media_icon">
            <BsPinterest />
          </div>
          <div className="media_icon">
            <BsLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
