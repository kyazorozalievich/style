import React, { useContext } from "react";
import home from "../../assets/images/homeImage.jpg";
import { FaShopify } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import HomeDetails from "../HomeDetails";
import HomeProduct from "../HomeProduct";


const Home = () => {
  return (
    <>
      <div style={{
        backgroundImage: `url(${home})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
      }}>
        <div className="">
          <div className="flex items-center pt-40 flex-col gap-[20px]">
            <div className="flex items-center">
            <a className="text-amber-400 text-[70px] z-40"><BiLogoMongodb /></a>
            <h1 className="text-white   z-40  font-[italic] text-[80px] font-bold tracking-[5px]">
            KEKA / <span>STYLE</span> 
            </h1>
            </div>
            <div className="flex items-center gap-[10px]">
            <h2 className="text-white   z-40 text-[40px] mt-[10px] tracking-[3px] font-bold font-[italic] ">
              Online Shopping
            </h2>
            <a className="text-white  z-40 text-[30px] mt-[10px]">
              <FaShopify />
            </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[100%] h-[585px] absolute top-[100px]"
        style={{
          background: "rgba(0, 0, 0, 0.658)",
        }}
      ></div>
      <HomeDetails/>
      <HomeProduct/>
    </>
  );
};

export default Home;
