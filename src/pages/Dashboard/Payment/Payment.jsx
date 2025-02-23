import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useState } from "react";
import SSLPayment from "./SSLPayment";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const [paymentOption, setPaymentOption] = useState("");

  const handlePaymentOption = (event) => {
    setPaymentOption(event.target.value);
  };

  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please Pay to Eat"}
      ></SectionTitle>
      <div>
        <select
          onChange={handlePaymentOption}
          defaultValue={"null"}
          className="select select-bordered w-full max-w-xs"
        >
          <option value={"null"} disabled>
            Select Payment Option
          </option>
          <option value={"ssl"}>SSL Commerce</option>
          <option value={"card"}>Card Pay</option>
        </select>
      </div>
      {paymentOption === "" && (
        <div className="mt-10">
          <h1 className="text-xl font-bold text-center mt-40">Please Select A Payment Option</h1>
        </div>
      )}
      {paymentOption === "card" && (
        <div className="mt-10">
          <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
          </Elements>
        </div>
      )}

      {paymentOption === "ssl" && (
        <div className="mt-10">
          <SSLPayment></SSLPayment>
        </div>
      )}
    </div>
  );
};

export default Payment;
