import { Catalogue as CatalogueType } from "@/types/Catalogue";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import logo from "../../public/logo2.jpg";


type CatalogueProp = {
  catalogue: CatalogueType;
  primary?: boolean
};



export const Catalogue: React.FC<CatalogueProp> = ({ catalogue, primary }) => {
  let urlString = ''
  if ((catalogue?.type == 'category' || catalogue?.type == 'catalogue')) {
    urlString = `/shop/${catalogue?.type}/${catalogue?.id}`
  } else {
    urlString = `/${catalogue?.type}/${catalogue?.id}`
  }
  return (
    <Link href={urlString}>
      <div className="catalogue-container flex justify-center relative">
        <div className={"catalogue-img-container " + (primary ? 'primary' : '')}>
          <Image
            className={`catalogue-img  p-0.5`}
            alt="Catalogue Image"
            src={catalogue?.image ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${catalogue.image}` : 'https://placehold.co/600x400'}
            fill
          />
        </div>

        <div className="absolute bottom-0 left-0 w-80 p-2 bg-gradient-to-r from-gray-50	">
        {catalogue?.note ? catalogue.note : catalogue?.name}
        </div>
      </div>
    </Link>
  );
}
