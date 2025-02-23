import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

const SSLPayment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCreatePayment = async (e) => {
    e.preventDefault();
    const payment = {
      email: user?.email,
      price: totalPrice,
      transectionId: "",
      date: new Date(), // utc date convert, use moment js
      cartIds: cart.map((item) => item._id),
      menuItemIds: cart.map((item) => item.menuID),
      status: "pending",
    };

    const response = await axiosSecure.post("/create-ssl-payment", payment);
    if (response?.data?.gatewayUrl) {
      window.location.replace(response?.data?.gatewayUrl);
    }
  };

  return (
    <div>
      <form onSubmit={handleCreatePayment} className="form-control">
        <label className="label">
          <span className="label-text">Enter Your Email</span>
        </label>
        <input
          type="email"
          placeholder="Your Email"
          defaultValue={user?.email}
          readOnly
          className="input input-bordered"
          required
        />
        <button className="my-4 btn bg-[#D1A054] text-white hover:text-[#D1A054] hover:bg-white">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default SSLPayment;
