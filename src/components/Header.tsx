"use client";

import Image from "next/image";
import logo from "../../public/logom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="flex justify-center">
        <div className="logo-container">
          <Link href={`/`}>
            <Image
              className="logo-img"
              alt="Mountains"
              src={logo}
              width={200}
              height={88}
            />
          </Link>
        </div>

      </div>
      <div className="search-container absolute  bottom-10 right-10 md:hidden">
        <SearchBox />
      </div>
      {/* <div className="">
        <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ fontSize: 32, color: "white" }}
          />
          <FontAwesomeIcon
            icon={faUserCircle}
            style={{ fontSize: 32, color: "white" }}
          />
      </div> */}
    </div>

  );
}
