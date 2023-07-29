import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border flex justify-center items-center px-10 py-5 cursor-pointer min-h-[150px]">
        <PayPalScriptProvider>
            <PayPalButtons
            fundingSource="paypal"
            style={{ layout: "vertical", label: "donate" }}
            />
        </PayPalScriptProvider>
    </div>  )
}

export default PaypalCard