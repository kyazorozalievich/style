import React, { useContext } from "react";
import { KekaStylesContext } from "../../context";
import ProductCard from "../ProductCard";
//Images
import outerBg from '../../assets/images/outerBg.jpg'
//

const HomeOuterwear = () => {
  //Roots
  const { homeOuter, setHomeOuter } = useContext(KekaStylesContext);
  const {dark} = useContext(KekaStylesContext)
  //

  const productSort = (e) => {
    let res = e.target.value
    const SortProduct = homeOuter.slice().sort((a, b) => {
      if (res === "expensive") {
        return a.price - b.price;
      } else if (res === "cheap") {
        return b.price - a.price;
      } 
    });
    setHomeOuter(SortProduct);
  };

  return (
    <>
    <div
      className=""
      style={{
        backgroundImage: `url(${outerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "400px",
      }}
    >
      <div className="w-[100%] h-[100%] flex items-center justify-center  flex-col gap-[20px] bg-[rgba(0,0,0,0.6)]">
        <h1 className="keka text-[60px] font-[900]  text-white tracking-[30px] ">
          KEKA <span>STYLE</span>
        </h1>
        <h1 className="text-[50px] font-bold tracking-[2px] text-white flex text-center">
          Отдел Верхних Одежд
        </h1>
      </div>
    </div>
    <div className="" style={{
        background: dark ? 'black' : 'white'
      }}>
    <div className="container mt-[50px] w-[90%] p-5 flex items-start flex-col">
      <select
        className="border-2 border-solid w-[140px] h-[30px] border-green-800 rounded-[5px] outline-none text-[15px] text-black pl-[5px] font-[700]"
        id=""
        onChange={productSort}
      >
        <option value="" className="text-green-900 font-[600]">
          Сортировать
        </option>
        <option value="expensive" className="text-green-900 font-[600]">
          Дорогой
        </option>
        <option value="cheap" className="text-green-900 font-[600]">
          Дешевый
        </option>
      </select>
      <div className="flex items-center flex-wrap gap-[30px]">
        {homeOuter.map((el, idx) => (
          <ProductCard el={el} />
        ))}
      </div>
    </div>
    </div>
  </>
  );
};

export default HomeOuterwear;
