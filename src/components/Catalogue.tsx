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

const PRIMARY_HEIGHT = '200px'
const REGULAR_HEIGHT = "156px"

export const Catalogue: React.FC<CatalogueProp> = ({ catalogue, primary }) => {
  return (
    <Link href={"/"}>
      <div className="flex justify-center relative">
        <Image
          className="rounded object-fill"
          alt="Mountains"
          src={catalogue?.image ? catalogue.image : ''}
          style={{
            width: "100%",
            height: primary ? PRIMARY_HEIGHT : REGULAR_HEIGHT,
            
          }}
        />
        <div className="absolute bottom-0 left-0 w-80 p-2 bg-gradient-to-r from-gray-50	">
          asdasd
        </div>
      </div>
    </Link>
  );
}
