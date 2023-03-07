import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import logo from "../../public/logo2.jpg";


type Catalogue = {
  id: number;
  name: string;
  image: string | StaticImageData;
  type: string;
};

type CatalogueProp = {
  catalogue: Catalogue;
  primary?: boolean
};



export const Catalogue: React.FC<CatalogueProp> = ({ catalogue, primary }) => {
  return (
    <Link href={`/${catalogue.type}/${catalogue.id}`}>
      <div className="catalogue-container flex justify-center relative">
        <div className={"catalogue-img-container " + (primary ? 'primary' : '') }>
          <Image
            className={`catalogue-img  p-0.5`}
            alt="Mountains"
            src={catalogue?.image ? catalogue.image : ''}
            fill
          />
        </div>

        <div className="absolute bottom-0 left-0 w-80 p-2 bg-gradient-to-r from-gray-50	">
          asdasd
        </div>
      </div>
    </Link>
  );
}
