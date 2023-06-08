'use client'

import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import DeliveryForm from "./delivery-form/Delivery";

import { useForm, FormProvider } from "react-hook-form";
import { TABS } from "./Tabs";
import CartTab from "./Tabs/CartTab";
import OrderTab from "./Tabs/OrderTab";
import PaymentTab from "./Tabs/PaymentTab";


export default function CartPage() {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const [showDeliveryModal, setShowDeliveryModal] = useState(false)
  const [orderDetails, setOrderDetails] = useState<any>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
    withCompanyDetails: false,
    withDeliveryAddress: false,
    companyName: '',
    companyRegistrationNumber: '',
    companyTaxNumber: '',
    deliveryFirstName: '',
    deliveryLastName: '',
    deliveryAddress: '',
    deliveryCity: '',
    deliveryCountry: '',
    deliveryPostalCode: '',
    deliveryPhoneNumber: '',
    deliveryEmail: '',
  })


  const methods = useForm();
  const { handleSubmit, control } = methods

  useEffect(() => {
    setActiveTab(TABS[0])
  }, [])

  const onSubmit = (data: any) => {
    setOrderDetails(data)
    setShowDeliveryModal(false)
    setActiveTab(TABS[1])
  }

  return (
    <FormProvider {...methods} >
      <div className=" min-h-screen	 flex flex-col">
        {showDeliveryModal ? (<DeliveryForm onSubmit={handleSubmit(onSubmit)} />) : <>
          {activeTab.name === 'Korpa' && <CartTab />}
          {activeTab.name === 'Dostava' && <OrderTab orderDetails={orderDetails} control={control} setActiveTab={setActiveTab} />}
          {activeTab.name === 'Placanje' && <PaymentTab control={control} />}
        </>}
        <div className="div">
          {!showDeliveryModal && activeTab.name === 'Korpa' && <Button onClick={() => setShowDeliveryModal(true)}>Nastavi</Button>}
        </div>
      </div>
    </FormProvider>
  );
}
