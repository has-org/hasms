// routes
// config
// components
import Iconify from "@/components/iconify";

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Moto",
    path: "/catalogue/motorcycles",
    children: [
      {
        title: "Motorcycles",
        path: "/",
        items: [
          {
            title: "SuperSport",
            description: "",
            path: "/",
            image: "http://minio.villa-seaview.online/images/super_sport.jpg",
          },
          {
            title: "Hyper Naked",
            description: "",
            path: "/",
            image: "http://minio.villa-seaview.online/images/hypernaked.jpeg",
          },
          {
            title: "Sport Heritage",
            description: "",
            path: "/",
            image: "http://minio.villa-seaview.online/images/heritage.jpeg",
          },
          {
            title: "Sport Touring",
            description: "",
            path: "/",
            image: "http://minio.villa-seaview.online/images/touring.jpeg",
          },
          {
            title: "Adventure",
            description: "",
            path: "/",
            image: "http://minio.villa-seaview.online/images/a-dventure.jpeg",
          },
          {
            title: "Competition",
            description: "",
            path: "/",
            image: "http://minio.villa-seaview.online/images/compettition.jpeg",
          },
        ],
      },
      {
        title: "Scooters",
        path: "/category/motorcycles",
        items: [
          {
            title: "Sport Scooters",
            path: "/",
            description: "",
            image:
              "http://minio.villa-seaview.online/images/skuteri-sport.jpeg",
          },
          {
            title: "Urban Mobility",
            path: "/",
            description: "",
            image: "http://minio.villa-seaview.online/images/urban-mob.jpeg",
          },
        ],
      },
      {
        title: "ATV & Side by Side",
        path: "/category/atv",
        items: [
          {
            title: "Utility",
            path: "/",

            description: "",
            image: "http://minio.villa-seaview.online/images/util.jpeg",
          },
          {
            title: "Leisure",
            path: "/",

            description: "",
            image: "http://minio.villa-seaview.online/images/leis.jpeg",
          },
          {
            title: "Sport",
            path: "/",

            description: "",
            image: "http://minio.villa-seaview.online/images/spATV.jpeg",
          },
        ],
      },
      {
        title: "Snow",
        path: "/category/snow",
        items: [
          {
            title: "Crossover",
            path: "/",

            description: "",
            image: "http://minio.villa-seaview.online/images/cross.jpeg",
          },
          {
            title: "Youth",
            path: "/",

            description: "",
            image: "http://minio.villa-seaview.online/images/yout.jpeg",
          },
          {
            title: "Utility",
            path: "/",

            description: "",
            image: "http://minio.villa-seaview.online/images/snow_utility.jpeg",
          },
          {
            title: "Mountain",
            path: "/",

            description: "",
            image: "http://minio.villa-seaview.online/images/mount.jpeg",
          },
          {
            title: "Trail",
            path: "/",

            description: "",
            image: "http://minio.villa-seaview.online/images/trai.jpeg",
          },
        ],
      },
    ],
  },

  {
    title: "Nautics",
    path: "/category/nauticsd",
    children: [
      {
        title: "Marine engines",
        path: "/",
        image: "",
        description: "",
        items: [
          {
            title: "Premium (425hp - 225hp)",
            path: "",
            image: "http://minio.villa-seaview.online/images/nau_premium.jpg",
            description: "",
          },
          {
            title: "High Power (200hp - 90hp)",
            path: "",
            image: "http://minio.villa-seaview.online/images/nau_hipower.jpeg",
            description: "",
          },
          {
            title: "Mid Power (80hp - 30hp)",
            path: "",
            image: "http://minio.villa-seaview.online/images/nau_midpower.jpeg",
            description: "",
          },
          {
            title: "Verstile (25hp - 8hp)",
            path: "",
            image:
              "http://minio.villa-seaview.online/images/nau_versatile.jpeg",
            description: "",
          },
          {
            title: "Portable (6hp - 2.5hp)",
            path: "",
            image: "http://minio.villa-seaview.online/images/nau_portable.jpeg",
            description: "",
          },
          {
            title: "Electric Drive",
            path: "",
            image: "http://minio.villa-seaview.online/images/nau_electric.jpeg",
            description: "",
          },
        ],
      },
      {
        title: "WaveRunners",
        path: "/",
        image: "",
        description: "",
        items: [
          {
            title: "Sport",
            path: "",
            image: "http://minio.villa-seaview.online/images/nau_sport.jpeg",
            description: "",
          },
          {
            title: "Recreation",
            path: "",
            image:
              "http://minio.villa-seaview.online/images/nau_recreation.jpeg",
            description: "",
          },
          {
            title: "Cruising",
            path: "",
            image: "http://minio.villa-seaview.online/images/nau_cruising.jpeg",
            description: "",
          },
        ],
      },
      {
        title: "YAM",
        path: "/",
        image: "",
        description: "",
        items: [
          {
            title: "Cruising",
            path: "",
            image: "http://minio.villa-seaview.online/images/nau_yam.jpeg",
            description: "",
          },
        ],
      },
    ],
  },

  // {
  //   title: "Accessories & Apparel",
  //   path: "/category/atv",
  //   children: [
  //     { title: "Riding gear", path: "/", image: "", description: "" },
  //     { title: "Apparel", path: "/", image: "", description: "" },
  //     { title: "Marine Wear", path: "/", image: "", description: "" },
  //     { title: "Watersport", path: "/", image: "", description: "" },
  //     { title: "Cycling", path: "/", image: "", description: "" },
  //     { title: "Merchandise", path: "/", image: "", description: "" },
  //     { title: "Accessories", path: "/", image: "", description: "" },
  //     { title: "Yamalube", path: "/", image: "", description: "" },
  //     { title: "Power products", path: "/", image: "", description: "" },
  //   ],
  // },
];

export default navConfig;
