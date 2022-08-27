import Logo from "./Logo";
//prettier-ignore
import {BsFacebook,BsTwitter,BsPinterest,BsLinkedin,BsGeoAltFill,BsFillTelephoneFill,BsFillEnvelopeFill,BsChevronRight} from "react-icons/bs";

function Footer() {
  return (
    <footer className="min-h-[300px] bg-violet-50 flex flex-col items-center pt-10">
      <div className="flex flex-col gap-2 items-center mb-4 sm:flex-row ">
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
      {/* Footer Body */}
      <div className="flex gap-2 flex-wrap justify-center">
        {/* Contact Us */}
        <div className=" w-full max-w-xs p-2">
          <h3 className="relative text-lg font-semibold py-2 mb-4 after:content-['_'] after:bg-text-pumpk after:w-10 after:h-0.5 after:absolute after:bottom-0 after:left-0">
            Contact Us
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <BsGeoAltFill className="text-text-pumpk" />
            <span className="text-xs">
              27000 San Fransisco, CO6765 United States Morocco
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <BsFillTelephoneFill className="text-text-pumpk" />
            <span className="text-xs">+5566555667</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <BsFillEnvelopeFill className="text-text-pumpk" />
            <span className="text-xs">demo@agency.com</span>
          </div>
        </div>
        {/* My Account */}
        <div className=" w-full max-w-xs p-2 sm:w-64 ">
          <h3 className="relative text-lg font-semibold py-2 mb-4 after:content-['_'] after:bg-text-pumpk after:w-10 after:h-0.5 after:absolute after:bottom-0 after:left-0">
            My Account
          </h3>
          <ul>
            <li className="flex items-center gap-2 mb-2">
              <BsChevronRight className="text-text-pumpk text-xs font-bold" />
              <span className="text-xs">My Account</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <BsChevronRight className="text-text-pumpk text-xs font-bold" />
              <span className="text-xs">View Cart</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <BsChevronRight className="text-text-pumpk text-xs font-bold" />
              <span className="text-xs">Wishlist</span>
            </li>
          </ul>
        </div>
        {/* Opening Time */}
        <div className=" w-full max-w-xs p-2 sm:w-64">
          <h3 className="relative text-lg font-semibold py-2 mb-4 after:content-['_'] after:bg-text-pumpk after:w-10 after:h-0.5 after:absolute after:bottom-0 after:left-0">
            Opening Time
          </h3>
          <div className="flex items-center gap-2 mb-2 text-xs ">
            <span className="font-semibold  w-16">Mon-Tue:</span>
            <span>8AM - 10PM </span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-xs ">
            <span className="font-semibold  w-16">Wed:</span>
            <span>8AM - 7PM </span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-xs ">
            <span className="font-semibold  w-16">Fri:</span>
            <span>7AM - 12PM </span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-xs ">
            <span className="font-semibold  w-16">Sat:</span>
            <span>9AM - 8PM </span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-xs ">
            <span className="font-semibold  w-16">Sun:</span>
            <span>Closed </span>
          </div>
        </div>
        {/* Newsletter Time */}

        <div className=" w-full max-w-xs p-2 sm:w-64 ">
          <h3 className="relative text-lg font-semibold py-2 mb-4 after:content-['_'] after:bg-text-pumpk after:w-10 after:h-0.5 after:absolute after:bottom-0 after:left-0">
            Newsletter
          </h3>
          <p className="flex items-center gap-2 mb-2 text-xs ">
            Authoritatively morph 24/7 potentialities with error-free
            partnerships
          </p>
          <div className="flex items-centermb-2 text-xs h-8 ">
            <input
              type="text"
              placeholder="Email Adress"
              className="h-full px-4 w-40"
            />
            <button className="h-full bg-text-light_pumpk w-20 text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <small className="py-2">All rights Reserved @ Houssine</small>
    </footer>
  );
}

export default Footer;
