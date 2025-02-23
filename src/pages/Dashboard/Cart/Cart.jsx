import React from "react";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: "#000",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              background: "#000",
              color: "#fff",
              confirmButtonColor: "#D1A054",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row text-center gap-3 justify-evenly mb-8">
        <h2 className="text-4xl">ITEMS: {cart.length}</h2>
        <h2 className="text-4xl">TOTAL PRICE: {totalPrice}</h2>
        {cart.length ? <Link to={"/dashboard/payment"}>
          <button className="btn bg-[#D1A054] text-white hover:text-[#D1A054] hover:bg-white">
            PAY
          </button>
        </Link>: 
        <button disabled className="btn bg-[#D1A054] text-white hover:text-[#D1A054] hover:bg-white">
        PAY
      </button>
        }
      </div>
      <div className="overflow-x-auto border border-[#D1A054] shadow-md shadow-[#D1A054] rounded-md p-2">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost"
                  >
                    <FaTrashAlt className="text-[#D1A054]"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
