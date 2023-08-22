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
        id: "0",
        title: "Motorcycles",
        path: "/catalogue/motorcycles",
        items: [
          {
            title: "SuperSport",
            description: "",
            path: "/catalogue/motorcycles/supersport",
            image: "http://minio.villa-seaview.online/images/super_sport.jpg",
          },
          {
            title: "Hyper Naked",
            description: "",
            path: "/catalogue/motorcycles/hypernaked",
            image: "http://minio.villa-seaview.online/images/hypernaked.jpeg",
          },
          {
            title: "Sport Heritage",
            description: "",
            path: " /catalogue/motorcycles/sportheritage",
            image: "http://minio.villa-seaview.online/images/heritage.jpeg",
          },
          {
            title: "Sport Touring",
            description: "",
            path: "/catalogue/motorcycles/sporttouring",
            image: "http://minio.villa-seaview.online/images/touring.jpeg",
          },
          {
            title: "Adventure",
            description: "",
            path: "/catalogue/motorcycles/adventure",
            image: "http://minio.villa-seaview.online/images/a-dventure.jpeg",
          },
          {
            title: "Competition",
            description: "",
            path: "/catalogue/motorcycles/competition",
            image: "http://minio.villa-seaview.online/images/compettition.jpeg",
          },
        ],
      },
      {
        id: "1",
        title: "Scooters",
        path: "/category/scooters",
        items: [
          {
            title: "Sport Scooters",
            path: "/catalogue/scooters/sportscooters",
            description: "",
            image:
              "http://minio.villa-seaview.online/images/skuteri-sport.jpeg",
          },
          {
            title: "Urban Mobility",
            path: "/catalogue/scooters/urbanmobility",
            description: "",
            image: "http://minio.villa-seaview.online/images/urban-mob.jpeg",
          },
        ],
      },
      {
        id: "2",
        title: "ATV & Side by Side",
        path: "/catalogue/atv",
        items: [
          {
            title: "Utility",
            path: "/catalogue/atv/utility",
            description: "",
            image: "http://minio.villa-seaview.online/images/util.jpeg",
          },
          {
            title: "Leisure",
            path: "/catalogue/atv/leisure",
            description: "",
            image: "http://minio.villa-seaview.online/images/leis.jpeg",
          },
          {
            title: "Sport",
            path: "/catalogue/atv/sport",
            description: "",
            image: "http://minio.villa-seaview.online/images/spATV.jpeg",
          },
        ],
      },
      {
        id: "3",
        title: "Snow",
        path: "/category/snow",
        items: [
          {
            title: "Crossover",
            path: "/catalogue/snow/crossover",
            description: "",
            image: "http://minio.villa-seaview.online/images/cross.jpeg",
          },
          {
            title: "Youth",
            path: "/catalogue/snow/youth",
            description: "",
            image: "http://minio.villa-seaview.online/images/yout.jpeg",
          },
          {
            title: "Utility",
            path: "/catalogue/snow/utility",
            description: "",
            image: "http://minio.villa-seaview.online/images/snow_utility.jpeg",
          },
          {
            title: "Mountain",
            path: "/catalogue/snow/mountain",
            description: "",
            image: "http://minio.villa-seaview.online/images/mount.jpeg",
          },
          {
            title: "Trail",
            path: "/catalogue/snow/trail",
            description: "",
            image: "http://minio.villa-seaview.online/images/trai.jpeg",
          },
        ],
      },
    ],
  },

  {
    title: "Nautics",
    path: "/catalogue/nautics",
    children: [
      {
        id: "4",
        title: "Marine engines",
        path: "/catalogue/nautics/marineengines",
        image: "",
        description: "",
        items: [
          {
            title: "Premium (425hp - 225hp)",
            path: "/catalogue/nautics/marineengines/premium",
            image: "http://minio.villa-seaview.online/images/nau_premium.jpg",
            description: "",
          },
          {
            title: "High Power (200hp - 90hp)",
            path: "/catalogue/nautics/marineengines/highpower",
            image: "http://minio.villa-seaview.online/images/nau_hipower.jpeg",
            description: "",
          },
          {
            title: "Mid Power (80hp - 30hp)",
            path: "/catalogue/nautics/marineengines/midpower",
            image: "http://minio.villa-seaview.online/images/nau_midpower.jpeg",
            description: "",
          },
          {
            title: "Verstile (25hp - 8hp)",
            path: "/catalogue/nautics/marineengines/versatile",
            image:
              "http://minio.villa-seaview.online/images/nau_versatile.jpeg",
            description: "",
          },
          {
            title: "Portable (6hp - 2.5hp)",
            path: "/catalogue/nautics/marineengines/portable",
            image: "http://minio.villa-seaview.online/images/nau_portable.jpeg",
            description: "",
          },
          {
            title: "Electric Drive",
            path: "/catalogue/nautics/marineengines/electricdrive",
            image: "http://minio.villa-seaview.online/images/nau_electric.jpeg",
            description: "",
          },
        ],
      },
      {
        id: "5",
        title: "WaveRunners",
        path: "/catalogue/nautics/waverunners",
        image: "",
        description: "",
        items: [
          {
            title: "Sport",
            path: "/catalogue/nautics/waverunners/sport",
            image: "http://minio.villa-seaview.online/images/nau_sport.jpeg",
            description: "",
          },
          {
            title: "Recreation",
            path: "/catalogue/nautics/waverunners/recreation",
            image:
              "http://minio.villa-seaview.online/images/nau_recreation.jpeg",
            description: "",
          },
          {
            title: "Cruising",
            path: "/catalogue/nautics/waverunners/cruising",
            image: "http://minio.villa-seaview.online/images/nau_cruising.jpeg",
            description: "",
          },
        ],
      },
      {
        id: "6",
        title: "YAM",
        path: "/catalogue/nautics/yam",
        image: "",
        description: "",
        items: [
          {
            title: "Cruising",
            path: "/catalogue/nautics/yam/cruising",
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
