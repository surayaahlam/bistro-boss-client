import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="md:flex justify-between text-neutral-content">
        <aside className="bg-[#1F2937] flex-1 pr-20 p-10 flex flex-col items-end">
          <div className="text-center space-y-2 text-white">
            <h4 className="font-bold text-2xl">CONTACT US</h4>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00 </p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </aside>
        <nav className="bg-[#111827] flex-1 md:pl-20 p-10 flex flex-col items-center md:items-start justify-center">
          <div className="text-center space-y-2 text-white">
            <h4 className="font-bold text-2xl">Follow US</h4>
            <p>Join us on social media</p>
            <div className="flex gap-4 text-2xl items-center justify-center">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </nav>
      </div>
      <div className="footer-center bg-[#151515] text-base-content p-4">
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} || All right reserved by
            Bistro Boss
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
