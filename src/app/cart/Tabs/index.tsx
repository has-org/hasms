import PaymentTab from "./PaymentTab";
import CartTab from "./CartTab";
import OrderTab from "./OrderTab";

export const TABS = [
  {
    id: 1,
    name: "Korpa",
    component: <CartTab />,
  },
  {
    id: 2,
    name: "Dostava",
    component: <OrderTab />,
  },
  {
    id: 3,
    name: "Placanje",
    component: <PaymentTab />,
  },
];
