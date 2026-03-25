import React from "react";
import FooterImg from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="h-1/5 bg-linear-to-bl mb-6 from-blue-950 to-purple-800 text-white space-y-4 rounded-md w-11/12 mx-auto flex flex-col items-center p-16 mt-6">
      <img src={FooterImg} />
      <h1 className="text-4xl font-bold">Subscribe to our Newsletter</h1>
      <p>Get the latest updates and news right in your inbox!</p>
      <input
        type="text"
        placeholder="Enter Your Email"
        className="input input-secondary text-amber-500"
      />
      <button className="btn btn-outline">Subscribe</button>
    </div>
  );
};

export default Footer;
