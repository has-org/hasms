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
    path: "/catalogues/0",
    children: [
      {
        id: "0",
        title: "Motorcycles",
        path: "/catalogues/0",
        items: [
          {
            id: "1",
            title: "SuperSport",
            description: "",
            path: "/catalogue/1",
            image: "http://minio.villa-seaview.online/images/super_sport.jpg",
          },
          {
            id: "2",
            title: "Hyper Naked",
            description: "",
            path: "/catalogue/2",
            image: "http://minio.villa-seaview.online/images/hypernaked.jpeg",
          },
          {
            id: "3",
            title: "Sport Heritage",
            description: "",
            path: " /catalogue/3",
            image: "http://minio.villa-seaview.online/images/heritage.jpeg",
          },
          {
            id: "4",
            title: "Sport Touring",
            description: "",
            path: "/catalogue/4",
            image: "http://minio.villa-seaview.online/images/touring.jpeg",
          },
          {
            id: "5",
            title: "Adventure",
            description: "",
            path: "/catalogue/5",
            image: "http://minio.villa-seaview.online/images/a-dventure.jpeg",
          },
          {
            id: "6",
            title: "Competition",
            description: "",
            path: "/catalogue/6",
            image: "http://minio.villa-seaview.online/images/compettition.jpeg",
          },
        ],
      },
      {
        id: "1",
        title: "Scooters",
        path: "/catalogues/1",
        items: [
          {
            id: "7",
            title: "Sport Scooters",
            path: "/catalogue/7",
            description: "",
            image:
              "http://minio.villa-seaview.online/images/skuteri-sport.jpeg",
          },
          {
            id: "8",
            title: "Urban Mobility",
            path: "/catalogue/8",
            description: "",
            image: "http://minio.villa-seaview.online/images/urban-mob.jpeg",
          },
        ],
      },
      {
        id: "2",
        title: "ATV & Side by Side",
        path: "/catalogues/2",
        items: [
          {
            id: 9,
            title: "Utility",
            path: "/catalogue/9",
            description: "",
            image: "http://minio.villa-seaview.online/images/util.jpeg",
          },
          {
            id: "10",
            title: "Leisure",
            path: "/catalogue/10",
            description: "",
            image: "http://minio.villa-seaview.online/images/leis.jpeg",
          },
          {
            id: "11",
            title: "Sport",
            path: "/catalogue/11",
            description: "",
            image: "http://minio.villa-seaview.online/images/spATV.jpeg",
          },
        ],
      },
      {
        id: "3,"
        title: "Snow",
        path: "/catalogues/3",
        items: [
          {
            id: "12",
            title: "Crossover",
            path: "/catalogue/12",
            description: "",
            image: "http://minio.villa-seaview.online/images/cross.jpeg",
          },
          {
            id: "13",
            title: "Youth",
            path: "/catalogue/13",
            description: "",
            image: "http://minio.villa-seaview.online/images/yout.jpeg",
          },
          {
            id: "14",
            title: "Utility",
            path: "/catalogue/14",
            description: "",
            image: "http://minio.villa-seaview.online/images/snow_utility.jpeg",
          },
          {
            id: "15",
            title: "Mountain",
            path: "/catalogue/15",
            description: "",
            image: "http://minio.villa-seaview.online/images/mount.jpeg",
          },
          {
            id: "16",
            title: "Trail",
            path: "/catalogue/16",
            description: "",
            image: "http://minio.villa-seaview.online/images/trai.jpeg",
          },
        ],
      },
    ],
  },

  {
    title: "Nautics",
    path: "/catalogues/4",
    children: [
      {
        id: "4",
        title: "Marine engines",
        path: "/catalogue/4",
        image: "",
        description: "",
        items: [
          {
            id: "17",
            title: "Premium (425hp - 225hp)",
            path: "/catalogue/17",
            image: "http://minio.villa-seaview.online/images/nau_premium.jpg",
            description: "",
          },
          {
            id: "18",
            title: "High Power (200hp - 90hp)",
            path: "/catalogue/18",
            image: "http://minio.villa-seaview.online/images/nau_hipower.jpeg",
            description: "",
          },
          {
            id: "19",
            title: "Mid Power (80hp - 30hp)",
            path: "/catalogue/19",
            image: "http://minio.villa-seaview.online/images/nau_midpower.jpeg",
            description: "",
          },
          {
            id: "20",
            title: "Verstile (25hp - 8hp)",
            path: "/catalogue/20",
            image:
              "http://minio.villa-seaview.online/images/nau_versatile.jpeg",
            description: "",
          },
          {
            id: "21",
            title: "Portable (6hp - 2.5hp)",
            path: "/catalogue/21",
            image: "http://minio.villa-seaview.online/images/nau_portable.jpeg",
            description: "",
          },
          {
            id: "22",
            title: "Electric Drive",
            path: "/catalogue/22",
            image: "http://minio.villa-seaview.online/images/nau_electric.jpeg",
            description: "",
          },
        ],
      },
      {
        id: "5",
        title: "WaveRunners",
        path: "/catalogues/5",
        image: "",
        description: "",
        items: [
          {
            id: "23",
            title: "Sport",
            path: "/catalogue/23",
            image: "http://minio.villa-seaview.online/images/nau_sport.jpeg",
            description: "",
          },
          {
            id: "24",
            title: "Recreation",
            path: "/catalogue/24",
            image:
              "http://minio.villa-seaview.online/images/nau_recreation.jpeg",
            description: "",
          },
          {
            id: "25",
            title: "Cruising",
            path: "/catalogue/25",
            image: "http://minio.villa-seaview.online/images/nau_cruising.jpeg",
            description: "",
          },
        ],
      },
      {
        id: "6",
        title: "YAM",
        path: "/catalogues/6",
        image: "",
        description: "",
        items: [
          {
            title: "Cruising",
            path: "/catalogue/26",
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
