"use client";

import Image from "next/image";
import logo from "../../public/logos/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";
import Link from "next/link";
import { NavMenu } from "@/components/NavMenu";
export default function Header({ withNav = true, navigationMenu = [] }) {
  return (

    <div className="header grid grid-cols-12 items-center">
      <div className="logo-container ">
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


      <div className="mx-auto col-start-4 col-end-10">
        {withNav ? <NavMenu navigationMenu={navigationMenu} /> : null}
      </div>

      <div className="search-container col-start-11 col-end-11 justify-self-end">
        <SearchBox />
      </div>
      <div className="flex gap-x-2 pr-12 relative col-start-12 col-end-12 justify-self-end mr-5">
        <FontAwesomeIcon
          icon={faShoppingCart}
          style={{ fontSize: 32, color: "gray" }}
        />
        <FontAwesomeIcon
          icon={faUserCircle}
          style={{ fontSize: 32, color: "gray" }}
        />
      </div>
    </div>

  );
}
