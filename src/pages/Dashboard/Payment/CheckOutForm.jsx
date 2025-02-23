import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => {
          setError("Failed to initialize payment.");
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      return;
    } else {
      setError("");
    }

    setProcessing(true);

    // Confirm PaymentIntent
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Anonymous",
            name: user?.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
      setProcessing(false);
      return;
    }

    // Handle potential additional authentication
    if (paymentIntent.status === "requires_action") {
      const { error: actionError, paymentIntent: updatedIntent } =
        await stripe.confirmCardPayment(clientSecret);
      if (actionError) {
        setError(actionError.message);
        setProcessing(false);
        return;
      }
      if (updatedIntent.status !== "succeeded") {
        setError("Payment did not succeed.");
        setProcessing(false);
        return;
      }
    }

    if (paymentIntent.status === "succeeded") {
      setTransectionId(paymentIntent.id);

      // Save payment in the database
      const payment = {
        email: user?.email,
        price: totalPrice,
        transectionId: paymentIntent.id,
        date: new Date(), // Consider using a library for formatting UTC dates if needed
        cartIds: cart.map((item) => item._id),
        menuItemIds: cart.map((item) => item.menuID),
        status: "pending",
      };

      try {
        const res = await axiosSecure.post("/payment", payment);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "middle-center",
            icon: "success",
            title: "Thank you. Your Payment is Successful",
            background: "#000",
            color: "#fff",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (err) {
        setError("Failed to record payment. Please contact support.");
      }
    }
    setProcessing(false);
  };

  return (
    <div>
      <h1 className="text-xl font-bold my-10 text-center">
        Please Enter Your Card Details
      </h1>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn my-4 bg-[#D1A054] text-white hover:text-[#D1A054] hover:bg-white"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? "Processing..." : "Pay"}
        </button>
        {error && <p className="text-red-600">{error}</p>}
        {transectionId && (
          <p className="text-green-500">
            Your Transaction Id is: {transectionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
