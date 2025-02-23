import React from "react";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaStar,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { MdEmail, MdOutlineRestaurantMenu } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="flex flex-col md:flex-row gap-20">
      {/* Dashboard Side bar */}
      <div className="md:w-64 md:min-h-screen bg-[#D1A054]">
        <ul className="menu p-4 gap-3 text-white">
          {isAdmin ? (
            <>
              <li className="hover:bg-neutral rounded-lg">
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li className="hover:bg-neutral rounded-lg">
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li className="hover:bg-neutral rounded-lg">
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList></FaList>
                  Manage Items 
                </NavLink>
              </li>
              <li className="hover:bg-neutral rounded-lg">
                <NavLink to={"/dashboard/manageBookings"}>
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li className="hover:bg-neutral rounded-lg">
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUser></FaUser>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="hover:bg-neutral rounded-lg">
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li className="hover:bg-neutral rounded-lg">
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li className="hover:bg-neutral rounded-lg">
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li className="hover:bg-neutral rounded-lg">
                <NavLink to={"/dashboard/review"}>
                  <FaStar></FaStar>
                  Review
                </NavLink>
              </li>
              <li className="hover:bg-neutral rounded-lg">
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaList></FaList>
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* Shared nav links */}
          <div className="divider before:bg-neutral after:bg-neutral"></div>

          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/"}>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/menu"}>
              <RiMenu5Fill />
              Menu
            </NavLink>
          </li>
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/order/salad"}>
              <MdOutlineRestaurantMenu />
              Order
            </NavLink>
          </li>
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/contact"}>
              <MdEmail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
