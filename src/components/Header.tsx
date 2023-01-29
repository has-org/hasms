import Image from "next/image";
import logo from "../../public/logo2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <div className="bg-[#9c8987] flex items-center px-6 h-[64px]">
      <div className="space-y-2">
        <div className="w-8 h-0.5 bg-gray-800"></div>
        <div className="w-8 h-0.5 bg-gray-800"></div>
        <div className="w-8 h-0.5 bg-gray-800"></div>
      </div>
      <div className="mx-auto">
        <Image
          className="rounded w-[124px] h-[36px]"
          alt="Mountains"
          src={logo}
          width={124}
          height={36}
        />
      </div>
      <div className="hidden lg:block">
      <SearchBox />
      </div>
      <div className="">
        <FontAwesomeIcon
          icon={faShoppingCart}
          style={{ fontSize: 32, color: "white" }}
        />
        <FontAwesomeIcon
          icon={faUserCircle}
          style={{ fontSize: 32, color: "white" }}
        />
      </div>
    </div>
  );
}
