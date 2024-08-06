import React, { useContext } from "react";
import { KekaStylesContext } from "../../context";
import ProductCard from "../ProductCard";
//Icons
import { BsEmojiSmile } from "react-icons/bs";
//

const HomeProduct = () => {
  //Roots
  const {homeProduct, setHomeProduct} = useContext(KekaStylesContext)
  //

    const productSort = (e) => {
        let res = e.target.value
        const SortProduct = homeProduct.slice().sort((a, b) => {
          if (res === "expensive") {
            return a.price - b.price;
          } else if (res === "cheap") {
            return b.price - a.price;
          } 
        });
        setHomeProduct(SortProduct);
      };

  return (
    <div className="p-[30px]">
      <div className="container mt-[50px] w-[90%] flex items-start flex-col gap-[30px]">
        <h1 className="flex items-center gap-[10px] text-[30px] font-[700]">Возможно вам Понравится {<BsEmojiSmile className=""/>} </h1>
        <select
          className="border-2 border-solid w-[140px] h-[30px] border-green-800 rounded-[5px] outline-none text-[15px] text-black pl-[5px] font-[700]"
          id=""
          onChange={productSort}
        >
          <option value="" className="text-green-900 font-[600]">Сортировать</option>
          <option value="expensive" className="text-green-900 font-[600]">Дорогой</option>
          <option value="cheap" className="text-green-900 font-[600]">Дешевый</option>
        </select>
        <div className="flex items-center flex-wrap gap-[30px]">
            {
                homeProduct.map((el, idx) => (
                    <ProductCard  el={el} />
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
