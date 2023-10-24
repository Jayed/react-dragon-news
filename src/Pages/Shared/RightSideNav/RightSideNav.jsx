// import React from 'react';
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-2xl">Find Us On</h2>
        <button className="btn btn-outline w-full">
          <FaFacebook className="text-xl"></FaFacebook>
          Facebook
        </button>
        <button className="btn btn-outline w-full">
          <FaTwitter className="text-xl"></FaTwitter>
          Facebook
        </button>

        <button className="btn btn-outline w-full">
          <FaInstagram className="text-xl"></FaInstagram>
          Instagram
        </button>
      </div>
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-2xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
