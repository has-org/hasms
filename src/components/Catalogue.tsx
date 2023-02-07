import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import logo from "../../public/logo2.jpg";


type Catalogue = {
  id: number;
  name: string;
  image: string | StaticImageData;
};

type CatalogueProp = {
  catalogue: Catalogue;
  primary?: boolean
};

export const Catalogue: React.FC<CatalogueProp> = ({ catalogue, primary }) => {
  return (
    <Link href={"/"}>
      <div className="border rounded-md border-slate-200 flex justify-center relative">
        <Image
          className="rounded object-fill"
          alt="Mountains"
          src={catalogue?.image ? catalogue.image : ''}
          style={{
            width: "100%",
            height: primary ? "168px" : "108px",
          }}
        />
        <div className="absolute bottom-0 left-0 w-80 p-2 bg-gradient-to-r from-gray-50	">
          asdasd
        </div>
      </div>
    </Link>
  );
}
