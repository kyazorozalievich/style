import React, { useContext } from 'react';
import { KekaStylesContext } from '../../context';
import ProductCard from '../ProductCard';
import { useNavigate } from 'react-router-dom';
//Images
import heartImg from '../../assets/images/heart.webp'
//

const Favorite = () => {
    const {favorite} = useContext(KekaStylesContext)
    const navigate = useNavigate()
    return (
        <div>
            <div className="container w-[90%] flex items-center flex-wrap gap-[30px]">
                {
                    favorite.length === 0 ? (
                        <div className="ml-[600px] mt-[100px] cursor-pointer"
                        onClick={()=> {
                            navigate('/')
                        }}
                        >
                            <img src={heartImg} alt="" className='w-[50%]'/>
                            <h1 className='text-[20px] font-[700]'>Избранное Пусто! ☹️</h1>
                        </div>
                    ) : (
                        favorite.map((el, idx) => (
                           <ProductCard el={el} />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Favorite;