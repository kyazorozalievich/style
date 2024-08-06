import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { KekaStylesContext } from "../../context";
//Images
import logoRb from "../../assets/images/classicOs.jpg";
import logoBr from "../../assets/images/brukiOs.jpg";
import logoBt from "../../assets/images/sneakOs.jpg";
import logoAs from "../../assets/images/acces.jpg";
//

const HomeDetails = () => {
  //Roots
  const {dark} = useContext(KekaStylesContext)
  //

  //Rest
  const navigate = useNavigate()
  //

  
  return (
    <div className="py-[100px] bg-blue-50" style={{
      color: dark? 'white' : 'black',
      background: dark? 'black' : 'rgba(128, 128, 128, 0.182)',
      transition: 'background 0.3s ease',
      boxShadow: dark? '0px 0px 10px rgba(0, 0, 0, 0.2)' : '0px 0px 10px rgba(255, 255, 255, 0.2)',
      // padding: '50px 20px'
    }}>
      <div className="container w-[90%]">
        <div className="flex items-center gap-[40px]">
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center flex-col gap-[10px]">
              <div className="w-[150px] h-[150px] flex items-center justify-center bg-white rounded-[200px] cursor-pointer"
              onClick={()=> {
                navigate('/homeOuter')
              }}
              >
                <img src={logoRb} alt="" className="w-[60%]" />
              </div>
              <h1 className="text-[16px] font-[600]">Верхняя одежда</h1>
            </div>
            <div className="flex items-start flex-col gap-[5px]">
              <h1 className="text-[14px] font-[600]">-Классические</h1>
              <h1 className="text-[14px] font-[600]">-Спортивные</h1>
              <h1 className="text-[14px] font-[600]">-Куртки</h1>
              <h1 className="text-[14px] font-[600]">-Пальто</h1>
              <h1 className="text-[14px] font-[600]">-Наборы</h1>
            </div>
          </div>
          <div className="w-[3px] text-gray-400 h-[150px] bg-gray-400">.</div>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center flex-col gap-[10px]">
              <div className="w-[150px] h-[150px] flex items-center justify-center bg-white rounded-[200px] cursor-pointer"
              onClick={()=> {
                navigate('/homeTrouser')
              }}
              >
                <img src={logoBr} alt="" className="w-[60%]" />
              </div>
              <h1 className="text-[16px] font-[600]">Брюки</h1>
            </div>
            <div className="flex items-start flex-col gap-[5px]">
              <h1 className="text-[14px] font-[600]">-Классические</h1>
              <h1 className="text-[14px] font-[600]">-Спортивные</h1>
              <h1 className="text-[14px] font-[600]">-Полуклассика</h1>
              <h1 className="text-[14px] font-[600]">-Джинсы</h1>
              <h1 className="text-[14px] font-[600]">-Шорты</h1>
            </div>
          </div>
          <div className="w-[3px] text-gray-400 h-[150px] bg-gray-400">.</div>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center flex-col gap-[10px]">
              <div className="w-[150px] h-[150px] flex items-center justify-center bg-white rounded-[200px] cursor-pointer"
              onClick={()=> {
                navigate('/homeShoes')
              }}
              >
                <img src={logoBt} alt="" className="w-[60%]" />
              </div>
              <h1 className="text-[16px] font-[600]">Ботинки</h1>
            </div>
            <div className="flex items-start flex-col gap-[5px]">
              <h1 className="text-[14px] font-[600]">-Кроссовки</h1>
              <h1 className="text-[14px] font-[600]">-Туфли</h1>
              <h1 className="text-[14px] font-[600]">-Тапочки</h1>
              <h1 className="text-[14px] font-[600]">-Спортивные</h1>
              <h1 className="text-[14px] font-[600]">-Повседневные</h1>
            </div>
          </div>
          <div className="w-[3px] text-gray-400 h-[150px] bg-gray-400">.</div>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center flex-col gap-[10px]">
              <div className="w-[150px] h-[150px] flex items-center justify-center bg-white rounded-[200px] cursor-pointer"
              onClick={()=> {
                navigate('/acces')
              }}
              >
                <img src={logoAs} alt="" className="w-[60%]" />
              </div>
              <h1 className="text-[16px] font-[600]">Аксессуары</h1>
            </div>
            <div className="flex items-start flex-col gap-[5px]">
              <h1 className="text-[14px] font-[600]">-Барсетки</h1>
              <h1 className="text-[14px] font-[600]">-Очки</h1>
              <h1 className="text-[14px] font-[600]">-Часы(Браслеты)</h1>
              <h1 className="text-[14px] font-[600]">-Наушники</h1>
              <h1 className="text-[14px] font-[600]">-Чехлы</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
