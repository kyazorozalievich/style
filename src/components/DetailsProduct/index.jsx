import React, { useContext, useEffect, useState } from 'react';
import { KekaStylesContext } from '../../context';
import { useParams } from 'react-router-dom';
import DetailsCard from '../DetailsCard';

const DetailsProduct = () => {
    //Roots
    const {sport} = useContext(KekaStylesContext)
    const {classic} = useContext(KekaStylesContext)
    const {head} = useContext(KekaStylesContext)
    const {acces} = useContext(KekaStylesContext)
    const {homeProduct} = useContext(KekaStylesContext)
    const {homeOuter} = useContext(KekaStylesContext)
    const {homeTrouser} = useContext(KekaStylesContext)
    const {homeShoes} = useContext(KekaStylesContext)
    //

    //Rest
    const [param, setParam] = useState('')
    const {id} = useParams()
    //


     function getProduct() {
        //START
        let resSport = sport.find((el)=> el.id == id)  
        let resClassic = classic.find((el)=> el.id == id) 
        let resHead = head.find((el)=> el.id == id)
        let resAcces = acces.find((el)=> el.id == id)  
        let resHomeProduct = homeProduct.find((el)=> el.id == id)
        let resHomeOuter = homeOuter.find((el)=> el.id == id)
        let resHomeTrouser = homeTrouser.find((el)=> el.id == id)
        let resHomeShoes = homeShoes.find((el)=> el.id == id)
        //


        //END
        if (resSport) {
            setParam(resSport)
        } else if (resClassic) {
            setParam(resClassic)
        } else if (resHead) {
            setParam(resHead)
        } else if (resAcces) {
            setParam(resAcces)
        } else if (resHomeProduct) {
            setParam(resHomeProduct)
        } else if (resHomeOuter) {
            setParam(resHomeOuter)
        } else if (resHomeTrouser) {
            setParam(resHomeTrouser)
        } else if (resHomeShoes) {
            setParam(resHomeShoes)
        }
        //
    }
    useEffect(()=> {
        getProduct()
    })

    return (
        <div>
            <div className="container w-[90%]">
                {
                    <DetailsCard el={param}/>
                }
            </div>
        </div>
    );
};

export default DetailsProduct;