import React from "react";
import BannerImg from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="h-1/5 bg-linear-to-bl from-blue-950 to-purple-800 text-white space-y-4 rounded-md w-11/12 mx-auto flex flex-col items-center p-16 mt-6">
      <img src={BannerImg} />
      <h1 className="text-4xl font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p>Beyond Boundaries Beyond Limits</p>
      <button className="btn btn-soft btn-warning">Claim Free Credit Coming soon...</button>
    </div>
  );
};

export default Banner;
