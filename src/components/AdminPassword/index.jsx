import React, { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { KekaStylesContext } from "../../context";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AdminPassword = () => {
  //Roots
  const { setAdminOpen } = useContext(KekaStylesContext);
  const {setAdminClose} = useContext(KekaStylesContext)
  //

  //Rest
  const [adminPassword, setAdminPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const navigate = useNavigate()
  //


  const addToPassword = () => {
    if (passwordValue === '123' ) {
        navigate('/admin')
        setAdminOpen(false)
        setAdminClose(true)
        setPasswordValue('')
    } else {
        alert('Неверный пароль')
        setPasswordValue('')
    }
  };

  return (
    <div className="bg-white w-[600px] h-[400px] absolute top-[150px] left-[450px] py-[40px] px-[40px] "
    
    >
      <a
        className="text-[30px] text-green-900 absolute cursor-pointer top-[10px] right-[10px]"
        onClick={() => setAdminOpen(false)}
      >
        <IoCloseSharp />
      </a>
      <div className="flex items-center flex-col mt-[80px] gap-[40px]">
        <input
          type={adminPassword ? 'text' : 'password'}
          placeholder="Password..."
          className="border-2 border-solid text-black rounded-[5px] border-green-900 w-[400px] h-[40px] px-[10px]"
          onChange={(e)=> setPasswordValue(e.target.value)}
          value={passwordValue}
        />
        <button className="w-[200px] rounded-[5px] h-[40px] bg-green-900 text-white" onClick={()=> addToPassword()}>
          Потвердить
        </button>
        <a className=" absolute top-[130px] left-[460px] text-green-900 cursor-pointer" onClick={()=> setAdminPassword(!adminPassword)}>{
            adminPassword? (
              <IoEyeSharp />
            ) : (
              <BsFillEyeSlashFill />
            )
            
            }
        </a>
        {/* <a className="">
          <BsFillEyeSlashFill />
        </a> */}
      </div>
    </div>
  );
};

export default AdminPassword;
