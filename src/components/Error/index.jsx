import React from "react";
import { useNavigate } from "react-router-dom";
//Images
import error from "../../assets/images/error.jpg";
//
//Icons
import { RiErrorWarningFill } from "react-icons/ri";
//

const Error = () => {
    const navigate = useNavigate()
  return (
    <div className="mt-[100px]">
      <div className="container w-[90%]">
        <center>
          <div className="cursor-pointer" onClick={()=> {
            navigate('/')
          }}>
            <img src={error} alt="" />
            <h1 className="text-[30px]  flex items-center font-[600] gap-[10px] ml-[500px] mt-[40px]">Ошибка при странице{<RiErrorWarningFill />}</h1>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Error;
