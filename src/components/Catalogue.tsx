import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo2.jpg";



export default function Catalogue() {
  return (
    <Link href={"/"}>
      <div className="bg-[#9c8987] flex justify-center">
        <Image
          className="rounded"
          alt="Mountains"
          src={logo}
          width={150}
          height={100}
          style={{
            width: "100%",
            height: "128px",
          }}
        />
      </div>
    </Link>
  );
}
