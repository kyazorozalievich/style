import React, { useContext } from "react";
import { KekaStylesContext } from "../../context";
import { useNavigate } from "react-router-dom";
import cartImg from "../../assets/images/cart.jpg";
import BasketCard from "../BasketCard";

const Basket = () => {
  const { basket } = useContext(KekaStylesContext);
  const navigate = useNavigate();
  const {counts, setCounts} = useContext(KekaStylesContext)
  return (
    <div>
      <h1>{counts}</h1>
      <button onClick={()=> {
        setCounts(counts + 1)
      }}>+</button>
      <div className="container w-[90%]">
        {basket.length === 0 ? (
          <div
            className=" flex items-center flex-col mt-[100px] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={cartImg} alt="" className="w-[30%]" />
            <h1 className="text-[20px] font-[700]">Корзина пусто! 🤥</h1>
          </div>
        ) : (
          <div className="">
          <div className="basket mt-[50px] w-[1000px] h-[500px]  overflow-y-auto flex items-center flex-wrap gap-[30px]">
            {basket.map((el) => (
              <BasketCard el={el} />
            ))}
          </div>
          <div className="">
            <h1>Отправка Заказов</h1>
            
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
