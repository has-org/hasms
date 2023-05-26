'use client'
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { CartContext } from "@/hooks/CartContext/CartContext";
import { Product as ProductType } from "@/types/Product";
import { Button } from "@mui/material";
import { useState } from "react";
import DeliveryForm from "./delivery-form/Delivery";
import Tabs from "./Tabs";
import CartTab from "./Tabs/CartTab"
import OrderTab from "./Tabs/OrderTab"
import { useForm, FormProvider } from "react-hook-form";

const TABS = [
  {
    id: 1,
    name: 'Korpa',
    component: <CartTab />

  },
  {
    id: 2,
    name: 'Dostava',
    component: <OrderTab />

  }
]

export default function CartPage() {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const [isDeliveryInfo, setIsDeliveryInfo] = useState(false)
  const methods = useForm();
  const {handleSubmit} = methods
  

const onSubmit = (data: any) => {
  // setDeliveryInfo(data)
  setIsDeliveryInfo(false)
  setActiveTab(TABS[1])  
}

  return (
    <FormProvider {...methods} > 
    <div className=" min-h-screen	 flex flex-col">
      {isDeliveryInfo ? <DeliveryForm onSubmit={handleSubmit(onSubmit)}  />
        : <Tabs tab={activeTab} />
      }
      <div className="div">
       {!isDeliveryInfo && <Button onClick={() => setIsDeliveryInfo(true)}>Nastavi</Button>}
      </div>
    </div>
    </FormProvider>
  );
}
