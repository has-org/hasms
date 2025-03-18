


export type CatalogueCharacteristics = {
  id: string;
  title: string;
  text: string;
  image: string;
}

export type CatalogueDetails = {
  model: string;
  manufacturer: string;
  year_manufactured: string;
  horse_power: string;
  kilowatt_power: string;
  cubic_centimeters: string;
  distance_traveled: string;
  specification_url: string;
  additional_equipment_url: string;
  description: string;
  description_title: string;
};

export type CatalogueVariantImages = {
  id: string;
  main_image: string;
  images: string[];
  thumbnail: string;
};

export type CatalogueVariants = {
  id: string;
  name: string;
  price: number;
  color: string;
  catalogue_variant_images: CatalogueVariantImages[];
};

export type ICatalogue = {
  id: string;
  code: string;
  name: string;
  type: string;
  color?: string;
  model?: string;
  state: string;
  options: string[]
  price: string;
  description: string;
  description_title: string;
  manufacturer: string;
  characteristics: string
  images: string[]
};