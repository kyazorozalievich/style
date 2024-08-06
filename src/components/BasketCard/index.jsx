import React, { useContext } from "react";
import { KekaStylesContext } from "../../context";
//Icons
import { ImHeart } from "react-icons/im";
import { VscHeart } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
//

const BasketCard = ({ el }) => {
  //Roots
  const {favorite, setFavorite} = useContext(KekaStylesContext)
  const {basket, setBasket} = useContext(KekaStylesContext)
  //


    let clickBasket = basket.some((item)=> item.id === el.id)
    let clickFavorite = favorite.some((item)=> item.id === el.id)

    const addToFavorite = () => {
        let findFavorite = favorite.find((item)=> item.id === el.id)
        if(findFavorite){
            let delFavorite = favorite.filter((item)=> item.id!== el.id)
            setFavorite(delFavorite)
            localStorage.setItem("favorite", JSON.stringify(delFavorite))
        }else{
            let getFavorite = [...favorite, el]
            setFavorite(getFavorite)
            localStorage.setItem("favorite", JSON.stringify(getFavorite))
        }
    }
    const addToBasket = () => {
        let findBasket = basket.find((item)=> item.id === el.id)
        if(findBasket){
            let delBasket = basket.filter((item)=> item.id!== el.id)
            setBasket(delBasket)
            localStorage.setItem("basket", JSON.stringify(delBasket))
        }else{
            let getBasket = [...basket, el]
            setBasket(getBasket)
            localStorage.setItem("basket", JSON.stringify(getBasket))
        }
    }
    const {counts} = useContext(KekaStylesContext)

  return (
      <div className="">
        <h1>{counts}</h1>
        <div className="flex items-center flex-col w-[300px] h-[400px] rounded-[10px] border-2 border-solid border-green-800">
          <img src={el.image} alt="" className="rounded-[20px] w-[100%] h-[300px]" />
          <div className="flex items-center justify-between mt-[10px] relative gap-[60px]">
          <div className="flex items-start flex-col gap-[10px]">
            <div className="nameScroll  overflow-x-scroll w-[120px] ">
            <h1 className="text-[14px] font-[500] text-gray-600">{el.name}</h1>
            </div>
            <h1 className="text-[18px] font-[700]">{el.price}Сом</h1>
          </div>
          <div className="flex items-end flex-col gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <a className="cursor-pointer" onClick={()=> {
                addToFavorite()
              }}>
                {clickFavorite ? (
                  <ImHeart className="text-[18px] text-red-600" />
                ) : (
                  <VscHeart className="text-[20px]" />
                )}
              </a>
              <a className="cursor-pointer" onClick={()=> {
                addToBasket()
              }}>
                {clickBasket ? (
                    <BsFillCartCheckFill className="text-[20px] text-green-700"/>
                ) : (
                    <BsCart className="text-[20px] "/>
                )}
              </a>
            </div>
            <div className="">
                <button className="w-[100px] rounded-[5px] h-[30px] bg-green-800 text-white">
                  Купить
                </button>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default BasketCard;
