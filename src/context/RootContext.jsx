import React, { useEffect, useState } from "react";
import { KekaStylesContext } from ".";

const RootContext = ({ children }) => {
  //Favorite / Basket / Admin
  const [adminOpen, setAdminOpen] = useState(false);
  const [adminClose, setAdminClose] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [basket, setBasket] = useState([]);
  const [dark, setDark] = useState(false);
  const getBasket = () => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  };

  const getFavorite = () => {
    let res = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorite(res);
  };
  //Favorite / Basket / Admin

  //Header Components
  const [sport, setSport] = useState([]);
  const [classic, setClassic] = useState([]);
  const [head, setHead] = useState([]);
  const [acces, setAcces] = useState([]);
  const getSport = () => {
    let res = JSON.parse(localStorage.getItem("sport")) || [];
    setSport(res);
  };
  const getClassic = () => {
    let res = JSON.parse(localStorage.getItem("classic")) || [];
    setClassic(res);
  };
  const getHead = () => {
    let res = JSON.parse(localStorage.getItem("head")) || [];
    setHead(res);
  };
  const getAcces = () => {
    let res = JSON.parse(localStorage.getItem("acces")) || [];
    setAcces(res);
  };
  //Header Components

  //Home Components
  const [homeOuter, setHomeOuter] = useState([]);
  const [homeTrouser, setHomeTrouser] = useState([]);
  const [homeShoes, setHomeShoes] = useState([]);
  const [homeProduct, setHomeProduct] = useState([]);
  const getHomeOuter = () => {
    let res = JSON.parse(localStorage.getItem("homeOuter")) || [];
    setHomeOuter(res);
  };
  const getHomeTrouser = () => {
    let res = JSON.parse(localStorage.getItem("homeTrouser")) || [];
    setHomeTrouser(res);
  };
  const getHomeShoes = () => {
    let res = JSON.parse(localStorage.getItem("homeShoes")) || [];
    setHomeShoes(res);
  };
  const getHomeProduct = () => {
    let res = JSON.parse(localStorage.getItem("homeProduct")) || [];
    setHomeProduct(res);
  };
  //Home Components

  //Rest
  const [count, setCount] = useState(1);
  const [colorSport, setColorSport] = useState(false);
  const [colorClassic, setColorClassic] = useState(false);
  const [colorHead, setColorHead] = useState(false);
  const [colorAcces, setColorAcces] = useState(false);
  //Rest
 const [counts, setCounts] = useState(0)


  useEffect(() => {
    getSport();
    getClassic();
    getHead();
    getAcces();
    getBasket();
    getFavorite();
    getHomeOuter();
    getHomeTrouser();
    getHomeShoes();
    getHomeProduct();
  }, []);

  return (
    <KekaStylesContext.Provider
      value={{
        //Header
        sport,
        setSport,
        classic,
        setClassic,
        head,
        setHead,
        acces,
        setAcces,
        //

        //Favorite / Basket / Admin
        adminOpen,
        setAdminOpen,
        adminClose,
        setAdminClose,
        basket,
        setBasket,
        favorite,
        setFavorite,
        dark,
        setDark,
        //

        //Rest
        count,
        setCount,
        colorSport,
        setColorSport,
        colorClassic,
        setColorClassic,
        colorHead,
        setColorHead,
        colorAcces,
        setColorAcces,
        //

        //Home Components
        homeOuter,
        setHomeOuter,
        homeTrouser,
        setHomeTrouser,
        homeShoes,
        setHomeShoes,
        homeProduct,
        setHomeProduct,
        //
        counts,
        setCounts
      }}
    >
      {children}
    </KekaStylesContext.Provider>
  );
};

export default RootContext;
