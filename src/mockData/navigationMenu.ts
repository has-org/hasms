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
  { id: 0, name: "Motori", subMenu: [], url: "/shop/category/1" },
  { id: 1, name: "Skuteri", subMenu: [], url: "/shop/category/2" },
  {
    id: 2,
    name: "Marina",
    subMenu: [
      {
        id: 0,
        name: "Gumenjaci",
        url: "/shop/catalogue/1",
      },
      { id: 1, name: "Jet Ski", url: "/shop/catalogue/2" },
      { id: 2, name: "Vanbrodski Motori", url: "/shop/catalogue/3" },
    ],
    url: "/shop/category/3"
  },
  {
    id: 3,
    name: "Kacige",
    subMenu: [
      { id: 0, name: "Integralne", url: "/shop/catalogue/4" },
      { id: 1, name: "JET", url: "/shop/catalogue/5" },
      { id: 2, name: "Modularne", url: "/shop/catalogue/6" },
      { id: 3, name: "CROSS & ATV", url: "/shop/catalogue/7" },
      { id: 4, name: "Djecije", url: "/shop/catalogue/8" },
      { id: 5, name: "Dodatna oprema", url: "/shop/catalogue/9" },
    ],
    url: "/shop/category/4"
  },
  {
    id: 4,
    name: "Odjeca i obuca",
    subMenu: [
      { id: 0, name: "Jakne", url: "/shop/jakne" },
      { id: 1, name: "Hlace", url: "/shop/hlace" },
      { id: 2, name: "Rukavice", url: "/shop/rukavice" },
      { id: 3, name: "Cizme", url: "/shop/cizme" },
      { id: 4, name: "Zastitna oprema", url: "/shop/zastitna_oprema" },
      { id: 5, name: "Dodatna oprema", url: "/shop/dodatna_oprema" },
      { id: 6, name: "Oprema za kisu", url: "/shop/oprema_za_kisu" },
    ],
    url: "/shop/odjeca_i_obuca"
  },
  {
    id: 5,
    name: "Servis i odrzavanje",
    subMenu: [
      { id: 0, name: "Sprejevi", url: "/shop/sprejevi" },
      { id: 1, name: "Kozmetika", url: "/shop/kozmetika" },
      { id: 2, name: "Akumulatori", url: "/shop/akumulatori" },
      { id: 3, name: "Ostalo", url: "/shop/ostalo" },
    ],
    url: "/shop/servis_i_odrzavanje"
  },
  {
    id: 5,
    name: "Dijelovi i oprema",
    subMenu: [
      { id: 0, name: "Koferi", url: "/shop/koferi" },
      { id: 1, name: "Torbe", url: "/shop/torbe" },
      { id: 2, name: "Zastite", url: "/shop/zastite" },
      { id: 3, name: "Rezervni dijelovi", url: "/shop/rezervni_dijelovi" },
    ],
    url: "/shop/dijelovi_i_oprema"
  },
];
