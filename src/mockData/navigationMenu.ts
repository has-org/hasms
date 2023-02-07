export type SubMenuChildren = {
  id: number;
  name: string;
  url?: string;
};

export type SubMenu = {
  id: number;
  name: string;
  url?: string;
  children?: Array<SubMenuChildren> | [];
};

export type NavigationMenu = {
  id: number;
  name: string;
  subMenu: Array<SubMenu> | [];
  url?: string;
};

export const navigationMenu: Array<NavigationMenu> = [
  { id: 0, name: "Motori", subMenu: [], url: "/shop" },
  { id: 1, name: "Skuteri", subMenu: [], url: "/shop" },
  {
    id: 2,
    name: "Marina",
    subMenu: [
      {
        id: 0,
        name: "Gumenjaci",
        children: [{ id: 0, name: "YAM 380 S", url: "/" }],
      },
      { id: 1, name: "Jet Ski", url: "/" },
      { id: 2, name: "Vanbrodski Motori", url: "/" },
    ],
    url: "/" 
  },
  {
    id: 3,
    name: "Kacige",
    subMenu: [
      { id: 0, name: "Integralne", url: "/" },
      { id: 1, name: "JET", url: "/shop" },
      { id: 2, name: "Modularne", url: "/" },
      { id: 3, name: "CROSS & ATV", url: "/" },
      { id: 4, name: "Djecije", url: "/" },
      { id: 5, name: "Dodatna oprema", url: "/" },
    ],
    url: "/" 
  },
  {
    id: 4,
    name: "Odjeca i obuca",
    subMenu: [
      { id: 0, name: "Jakne", url: "/shop" },
      { id: 1, name: "Hlace", url: "/" },
      { id: 2, name: "Rukavice", url: "/" },
      { id: 3, name: "Cizme", url: "/" },
      { id: 4, name: "Zastitna oprema", url: "/" },
      { id: 5, name: "Dodatna oprema", url: "/" },
      { id: 6, name: "Oprema za kisu", url: "/" },
    ],
    url: "/" 
  },
  {
    id: 5,
    name: "Servis i odrzavanje",
    subMenu: [
      { id: 0, name: "Sprejevi", url: "" },
      { id: 1, name: "Kozmetika", url: "" },
      { id: 2, name: "Akumulatori", url: "" },
      { id: 3, name: "Ostalo", url: "" },
    ],
    url: "/" 
  },
  {
    id: 5,
    name: "Dijelovi i oprema",
    subMenu: [
      { id: 0, name: "Koferi", url: "" },
      { id: 1, name: "Torbe", url: "" },
      { id: 2, name: "Zastite", url: "" },
      { id: 3, name: "Rezervni dijelovi", url: "" },
    ],
    url: "/" 
  },
];
