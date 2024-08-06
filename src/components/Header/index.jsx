import React, { useContext, useState } from "react";
import { KekaStylesContext } from "../../context";
import AdminPassword from "../AdminPassword";
import { useNavigate } from "react-router-dom";
//Icons
import { IoSearchOutline } from "react-icons/io5";
import { BsBagHeartFill } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
//

const Header = () => {
  //Roots
  const { adminClose, setAdminClose } = useContext(KekaStylesContext);
  const { adminOpen, setAdminOpen } = useContext(KekaStylesContext);
  const { favorite } = useContext(KekaStylesContext);
  const { basket } = useContext(KekaStylesContext);
  const { colorSport, setColorSport } = useContext(KekaStylesContext);
  const { colorClassic, setColorClassic } = useContext(KekaStylesContext);
  const { colorHead, setColorHead } = useContext(KekaStylesContext);
  const { colorAcces, setColorAcces } = useContext(KekaStylesContext);
  const { dark, setDark } = useContext(KekaStylesContext);
  //

  //Rest
  const navigate = useNavigate();
  //

  return (
    <>
      <div className="bg-green-900 h-[100px] sticky top-0 z-50 ">
        <div className="container w-[90%] flex items-center justify-between pt-[20px]">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              setAdminClose(false);
              navigate("/");
              setColorSport(false);
              setColorClassic(false);
              setColorHead(false);
              setColorAcces(false);
            }}
          >
            <a
              className="header--dark text-white text-[25px] mr-[10px] cursor-pointer"
              onClick={() => {
                setDark(!dark);
              }}
            >
              {dark ? <IoMoonOutline /> : <FiSun />}
            </a>
            <a className="text-amber-400 text-[35px]">
              <BiLogoMongodb />
            </a>
            <h1 className="keka text-[30px] font-[900] text-white tracking-[5px] ">
              KEKA <span>STYLE</span>
            </h1>
          </div>
          <div className="Category flex items-center gap-[30px]">
            <a
              className="text-[15px] font-[600] text-white cursor-pointer"
              onClick={() => {
                navigate("/sport");
                setAdminClose(false);
                setColorSport(true);
                setColorClassic(false);
                setColorHead(false);
                setColorAcces(false);
              }}
              style={{
                color: colorSport ? "gold" : "white",
                borderBottom: colorSport ? "1px solid gold" : "none",
              }}
            >
              Спортивный
            </a>
            <a
              className="text-[15px] font-[600] text-white cursor-pointer"
              onClick={() => {
                navigate("/classic");
                setAdminClose(false);
                setColorSport(false);
                setColorClassic(true);
                setColorHead(false);
                setColorAcces(false);
              }}
              style={{
                color: colorClassic ? "gold" : "white",
                borderBottom: colorClassic ? "1px solid gold" : "none",
              }}
            >
              Классический
            </a>
            <a
              className="text-[15px] font-[600] text-white cursor-pointer"
              onClick={() => {
                navigate("/head");
                setAdminClose(false);
                setColorSport(false);
                setColorClassic(false);
                setColorHead(true);
                setColorAcces(false);
              }}
              style={{
                color: colorHead ? "gold" : "white",
                borderBottom: colorHead ? "1px solid gold" : "none",
              }}
            >
              Головные уборы
            </a>
            <a
              className="text-[15px] font-[600] text-white cursor-pointer"
              onClick={() => {
                navigate("/acces");
                setAdminClose(false);
                setColorSport(false);
                setColorClassic(false);
                setColorHead(false);
                setColorAcces(true);
              }}
              style={{
                color: colorAcces ? "gold" : "white",
                borderBottom: colorAcces ? "1px solid gold" : "none",
              }}
            >
              Аксессуары
            </a>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Найти одежду..."
                className="w-[300px] h-[40px] px-[20px] outline-none rounded-[5px]"
                onClick={() => {
                  setColorSport(false);
                  setColorClassic(false);
                  setColorHead(false);
                  setColorAcces(false);
                }}
              />
              <a className="absolute top-[10px] right-[20px] text-[20px] text-gray-500">
                <IoSearchOutline />
              </a>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="relative">
                <a
                  className="text-[22px] text-white cursor-pointer"
                  onClick={() => {
                    navigate("/favorite");
                    setColorSport(false);
                    setColorClassic(false);
                    setColorHead(false);
                    setColorAcces(false);
                  }}
                >
                  <BsBagHeartFill />
                </a>
                <h2
                  className="absolute top-[-17px] right-[-15px] w-[20px] h-[20px] rounded-[50px] flex items-center pl-[6px] text-white text-[12px] bg-red-600"
                  style={{ display: favorite.length === 0 ? "none" : "block" }}
                >
                  {favorite.length}
                </h2>
              </div>
              <div className="relative">
                <a
                  className="text-[25px] text-white cursor-pointer"
                  onClick={() => {
                    navigate("/basket");
                    setColorSport(false);
                    setColorClassic(false);
                    setColorHead(false);
                    setColorAcces(false);
                  }}
                >
                  <IoMdCart />
                </a>
                <h2
                  className="absolute top-[-16px] right-[-15px] w-[20px] h-[20px] rounded-[50px] flex items-center pl-[6px] text-white text-[12px] bg-red-600"
                  style={{ display: basket.length === 0 ? "none" : "block" }}
                >
                  {basket.length}
                </h2>
              </div>
              <a
                className="text-[25px] text-white  cursor-pointer"
                style={{
                  display: adminClose ? "none" : "block",
                }}
                onClick={() => {
                  setAdminOpen(true);
                  setColorSport(false);
                  setColorClassic(false);
                  setColorHead(false);
                  setColorAcces(false);
                }}
              >
                <FaUserCircle />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className=""
        style={{
          display: adminOpen ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 1000,
          padding: "20px",
        }}
      >
        <AdminPassword />
      </div>
    </>
  );
};

export default Header;
