import React, { useContext, useState } from "react";
import { KekaStylesContext } from "../../context";
import { useNavigate } from "react-router-dom";
//Icons
import { IoCaretUpSharp } from "react-icons/io5";
import { IoCaretDownSharp } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { ImHeart } from "react-icons/im";
import { VscHeart } from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { PiCoatHangerBold } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";
import { PiEyeSlashFill } from "react-icons/pi";
import { IoCloseCircleSharp } from "react-icons/io5";
//
//Images 
import instagramm from "../../assets/images/insta.webp";
import mbank from "../../assets/images/mbank.webp";
import elkard from "../../assets/images/elkard.png";
import visa from "../../assets/images/visa.png";
//

const DetailsCard = ({ el }) => {
  //Header Components
  const { sport, setSport } = useContext(KekaStylesContext);
  const { classic, setClassic } = useContext(KekaStylesContext);
  const { head, setHead } = useContext(KekaStylesContext);
  const { acces, setAcces } = useContext(KekaStylesContext);
  //

  //Home Components
  const {homeOuter, setHomeOuter} = useContext(KekaStylesContext);;
  const {homeTrouser, setHomeTrouser} = useContext(KekaStylesContext);;
  const {homeShoes, setHomeShoes} = useContext(KekaStylesContext);;
  const {homeProduct, setHomeProduct} = useContext(KekaStylesContext);;
  //

  //Favorite / Basket / Admin
  const { count, setCount } = useContext(KekaStylesContext);
  const { basket, setBasket } = useContext(KekaStylesContext);
  const { favorite, setFavorite } = useContext(KekaStylesContext);
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [eyes, setEyes] = useState(false);
  const {dark} = useContext(KekaStylesContext)
  //

  //Roots 
  const {  setColorSport } = useContext(KekaStylesContext);
  const {  setColorClassic } = useContext(KekaStylesContext);
  const {  setColorHead } = useContext(KekaStylesContext);
  const {  setColorAcces } = useContext(KekaStylesContext);
  //
  const navigate = useNavigate();

  function addToBasket() {
    let findBasket = basket.find((item) => item.id === el.id);
    if (findBasket) {
      let delBasket = basket.filter((item) => item.id !== el.id);
      setBasket(delBasket);
      localStorage.setItem("basket", JSON.stringify(delBasket));
    } else {
      let getBasket = [...basket, el];
      setBasket(getBasket);
      localStorage.setItem("basket", JSON.stringify(getBasket));
    }
  }
  function addFavorite() {
    let findFavorite = favorite.find((item) => item.id === el.id);
    if (findFavorite) {
      let delFavorite = favorite.filter((item) => item.id !== el.id);
      setFavorite(delFavorite);
      localStorage.setItem("favorite", JSON.stringify(delFavorite));
    } else {
      let getFavorite = [...favorite, el];
      setFavorite(getFavorite);
      localStorage.setItem("favorite", JSON.stringify(getFavorite));
    }
  }
  let clickBasket = basket.some((item) => item.id === el.id);
  let clickFavorite = favorite.some((item) => item.id === el.id);
  const twitter = () => {
    window.open(`https://twitter.com`);
  };
  const facebook = () => {
    window.open(`https://www.facebook.com/?locale=ru_RU`);
  };
  const instagram = () => {
    window.open(`https://www.instagram.com`);
  };
  function delBasket() {
    let delBasket = basket.filter((item) => item.id!== el.id);
    setBasket(delBasket);
    localStorage.setItem("basket", JSON.stringify(delBasket));
  }
  function delFavorite() {
    let delFavorite = favorite.filter((item) => item.id!== el.id);
    setFavorite(delFavorite);
    localStorage.setItem("favorite", JSON.stringify(delFavorite));
  }

  const deleteProduct = () => {
    //Start
    let delClassic = classic.filter((item) => item.id !== el.id);
    let delSport = sport.filter((item) => item.id !== el.id);
    let delHead = head.filter((item) => item.id !== el.id);
    let delAcces = acces.filter((item) => item.id !== el.id);
    let delHomeProduct = homeProduct.filter((item) => item.id !== el.id)
    let delHomeOuter = homeOuter.filter((item) => item.id!== el.id)
    let delHomeTrouser = homeTrouser.filter((item) => item.id!== el.id)
    let delHomeShoes = homeShoes.filter((item) => item.id!== el.id)
    //

    //END
    //Home Components
    if (delHomeProduct) {
      setHomeProduct(delHomeProduct);
      localStorage.setItem("homeProduct", JSON.stringify(delHomeProduct));
      navigate('/home')
    }
    if (delHomeOuter) {
      setHomeOuter(delHomeOuter);
      localStorage.setItem("homeOuter", JSON.stringify(delHomeOuter));
      navigate('/home')
    }
    if (delHomeTrouser) {
      setHomeTrouser(delHomeTrouser);
      localStorage.setItem("homeTrouser", JSON.stringify(delHomeTrouser));
      navigate('/home')
    }
    if (delHomeShoes) {
      setHomeShoes(delHomeShoes);
      localStorage.setItem("homeShoes", JSON.stringify(delHomeShoes));
      navigate('/home')
    }
    //

    //Header components 
    if (delClassic) {
      setClassic(delClassic);
      localStorage.setItem("classic", JSON.stringify(delClassic));
      navigate('/classic')
    } 
   if (delSport) {
      setSport(delSport);
      localStorage.setItem("sport", JSON.stringify(delSport));
      navigate('/sport')
    } 
  if (delHead) {
      setHead(delHead);
      localStorage.setItem("head", JSON.stringify(delHead));
      navigate('/head')
    } 
  if (delAcces) {
      setAcces(delAcces);
      localStorage.setItem("acces", JSON.stringify(delAcces));
      navigate('/acces')
    } 
    //
    //
  };
  
  
  function delPassword() {
    if (inputValue === "192837") {
      deleteProduct();
      navigate('/')
      delBasket();
      delFavorite();
      setOpenModal(false);
      setColorSport(false);
      setColorClassic(false);
      setColorHead(false);
      setColorAcces(false);
     
    } else {
      alert("Неверный пароль");
    }
  }

  return (
    <div className="mt-[20px]" style={{
      background: dark? 'black' : 'white',
    }}>
      <h1 className="ml-[40px] text-[40px] font-[600]">{el?.name}</h1>
      <div className="w-[100%] mt-[30px] flex items-center gap-[200px]">
        <div className="border-2 border-solid rounded-[30px] shadow-2xl bg-white shadow-green-700 w-[400px] pt-[50px] h-[500px]">
          <img src={el?.image} alt="" className="w-[100%] rounded-[30px]" />
        </div>
        <div className="flex items-start flex-col gap-[30px]">
          <h1 className="text-[20px] font-[800]">{el?.price * count} Сом</h1>
          <h1 className="flex items-center text-[20px] font-[600]">
            Размеры: {el?.size} /{<PiCoatHangerBold />}
          </h1>
          <h1 className="w-[400px]">
            {el?.description}Спасибо что выбираете нас 🤗
          </h1>
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center justify-between w-[80px] rounded-[5px] p-[10px]  h-[40px] border-2 border-solid border-gray-400">
              <h1 className="text-[18px] font-[600]">{count}</h1>
              <div className="">
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <IoCaretUpSharp />
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    setCount(count > 1 ? count - 1 : count);
                  }}
                >
                  <IoCaretDownSharp />
                </a>
              </div>
            </div>
            <button
              className="w-[200px] p-[10px] rounded-[5px] h-[40px] bg-green-800  text-white"
              onClick={() => {
                addToBasket();
              }}
            >
              {clickBasket ? (
                <h1 className="flex items-center gap-[10px] text-[15px]">
                  <BsFillCartCheckFill />В корзине
                </h1>
              ) : (
                <h1 className="flex items-center gap-[10px] text-[15px]">
                  <BsCart />
                  Добавить в корзину
                </h1>
              )}
            </button>
            <button
              className="w-[160px] flex items-center gap-[5px] p-[10px] rounded-[5px] font-[600] h-[40px] border-2 border-solid border-green-900"
              onClick={() => {
                addFavorite();
              }}
            >
              {clickFavorite ? (
                <ImHeart className="text-[18px] text-red-600" />
              ) : (
                <VscHeart className="text-[20px]" />
              )}{" "}
              Избранное
            </button>
          </div>
          <div className="flex items-center gap-[50px] mt-[10px]">
            <div className="flex items-center gap-[10px]">
              <h1 className="font-[600]">Поделться:</h1>
              <a
                className="text-[20px] text-blue-500 cursor-pointer"
                onClick={() => {
                  twitter();
                }}
              >
                <FaTwitter />
              </a>
              <a
                className="text-[20px] text-blue-700 cursor-pointer"
                onClick={() => {
                  facebook();
                }}
              >
                <FaFacebook />
              </a>
              <img
                src={instagramm}
                alt=""
                className="w-[20px] cursor-pointer"
                onClick={() => {
                  instagram();
                }}
              />
              <a className=""></a>
              <a className=""></a>
            </div>
            <button
              className="flex items-center w-[100px] h-[30px] border-2 border-solid border-green-800 rounded-[5px] p-[5px] gap-[5px]"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Удалить{<AiFillDelete />}
            </button>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="w-[100px]  flex items-center justify-center rounded-[5px] bg-gray-200 h-[60px] border-2 bordder-solid border-gray-300">
              <img src={mbank} alt="" className="w-[70%] " />
            </div>
            <div className="w-[100px]  flex items-center justify-center rounded-[5px] bg-gray-200 h-[60px] border-2 bordder-solid border-gray-300">
              <img src={elkard} alt="" className="w-[70%] " />
            </div>
            <div className="w-[100px]  flex items-center justify-center rounded-[5px] bg-gray-200 h-[60px] border-2 bordder-solid border-gray-300">
              <img src={visa} alt="" className="w-[70%]  " />
            </div>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          display: openModal ? "block" : "none",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "100",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",

        }}
      >
        <div className="absolute top-[300px] flex items-center flex-col pt-[20px] right-[500px] w-[500px] h-[200px] bg-white gap-[20px]">
          <a
            className="absolute top-[10px] text-[20px] cursor-pointer right-[10px]"
            onClick={() => {
              setOpenModal(false);
            }}
            style={{
              color: dark ? 'red' : 'red'
            }}
          >
            <IoCloseCircleSharp />
          </a>
          <h1 className="text-red-600">Введите пароль !</h1>
          <div className="relative">
            <input
              type={eyes ? "text" : "password"}
              placeholder="Введите пароль..."
              className="w-[250px] px-[10px] h-[40px] text-black rounded-[5px] border-2 border-solid border-green-800"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
             
            />
            <a
              className="absolute top-[10px] right-[20px] cursor-pointer"
              onClick={() => {
                setEyes(!eyes);
              }}
            >
              {eyes ? <PiEyeSlashFill className="text-black"/> : <IoEyeSharp className="text-black"/>}
            </a>
          </div>
          <button
            className="w-[150px] hover:bg-red-600 hover:text-white hover:border-none text-black rounded-[5px] h-[40px] border-2 border-solid border-green-800"
            onClick={() => {
              delPassword();
            }}
          >
            Потвердить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
