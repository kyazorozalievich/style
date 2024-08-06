import React, { useContext } from "react";
import { KekaStylesContext } from "../../context";
import { useNavigate } from "react-router-dom";
//Icons
import { GoArrowRight } from "react-icons/go";
import { ImHeart } from "react-icons/im";
import { VscHeart } from "react-icons/vsc";
//

const ProductCard = ({ el }) => {
  //Roots
  const { favorite, setFavorite } = useContext(KekaStylesContext);
  //
  const navigate = useNavigate()


  function creatFavorite() {
    let finFavorite = favorite.find((item) => item.id === el.id);
    if (finFavorite) {
      let delFavorite = favorite.filter((item) => item.id !== el.id);
      setFavorite(delFavorite);
      localStorage.setItem("favorite", JSON.stringify(finFavorite));
    } else {
      let getFavorite = [...favorite, el];
      setFavorite(getFavorite);
      localStorage.setItem("favorite", JSON.stringify(getFavorite));
    }
  }

  let clickFavorite = favorite.some((item) => item.id === el.id);




  return (
    <div className="mt-[50px] relative">
      <div className="w-[300px] h-[400px] bg-white  rounded-[10px] flex items-start flex-col shadow-xl shadow-green-900 ">
        <img src={el.image} alt="" className="rounded-[20px] w-[100%] h-[300px] " />
        <a
          className="absolute cursor-pointer top-[290px] right-[10px] w-[30px] h-[30px] rounded-[50px] bg-gray-300 flex items-center justify-center"
          onClick={() => {
            creatFavorite();
          }}
        >
          {clickFavorite ? <ImHeart className="text-[18px] text-red-600"/> : <VscHeart className="text-[20px] text-black"/>}
        </a>
        <div className="mt-[10px]">
          <div className="ml-[20px] flex items-start gap-[10px] flex-col ">
            <div className="nameScroll  overflow-x-scroll w-[120px] ">
            <h1 className="text-[15px] text-gray-600">{el.name}</h1>
            </div>
            <h1 className="font-[600] text-black">{el.price}cом</h1>
          </div>
          <div className="">
            <button className="absolute bottom-[20px] right-[30px] w-[120px] text-[14px] h-[30px] text-green-800 font-[500] rounded-[5px] border-2 border-solid border-green-800 flex items-center gap-[5px] p-[10px]"
            onClick={()=> {
                navigate(`/detailsProduct/${el.id}`)
            }}
            >
              Подробнее{<GoArrowRight />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
