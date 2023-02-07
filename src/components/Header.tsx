"use client";

import Image from "next/image";
import logo from "../../public/logom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";
import { NavMenu } from "@/components/NavMenu";
import { navigationMenu } from "@/mockData/navigationMenu";

export default function Header() {
  return (
    <>
      <div className="bg-gray-300 flex items-center px-6 h-[64px]">
        <div className="space-y-2"> 
          <div className="w-8 h-0.5 bg-blue-500"></div>
          <div className="w-8 h-0.5 bg-blue-500"></div>
          <div className="w-8 h-0.5 bg-blue-500"></div>
        </div>
        <div className="mx-auto">
          <Image
            className="rounded "
            alt="Mountains"
            src={logo}
            width={200}
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
      <div className="border-b-4  border-red-800 ">
        <NavMenu navigationMenu={navigationMenu} />
      </div>
    </>
  );
}
