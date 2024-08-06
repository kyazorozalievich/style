import React, { useContext } from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Favorite from './components/Favorite'
import Basket from './components/Basket'
import Admin from './components/Admin'
import Sport from './components/Sport'
import Classic from './components/Classic'
import Head from './components/Head'
import Acces from './components/Acces'
import { Route, Routes } from 'react-router-dom'
import DetailsProduct from './components/DetailsProduct'
import Error from './components/Error'
import HomeOuterwear from './components/HomeOuterwear'
import HomeTrouser from './components/HomeTrouser'
import HomeShoes from './components/HomeShoes'
import { KekaStylesContext } from './context'

function App() {
  const {dark} = useContext(KekaStylesContext)
  const routes = [
    {
      id:1,
      path:'/',
      component: <Home/>
    },
    {
      id:2,
      path:'/favorite',
      component: <Favorite/>
    },
    {
      id:3,
      path:'/basket',
      component: <Basket/>
    },
    {
      id:4,
      path:'/admin',
      component: <Admin/>
    },
    {
      id:5,
      path:'/sport',
      component: <Sport/>
    },
    {
      id:6,
      path:'/classic',
      component: <Classic/>
    },
    {
      id:7,
      path:'/head',
      component: <Head/>
    },
    {
      id:8,
      path:'/acces',
      component: <Acces/>
    },
    {
      id:9,
      path:'/detailsProduct/:id',
      component: <DetailsProduct/>
    },
    {
      id: 10,
      path: '/homeOuter',
      component: <HomeOuterwear/>,
    },
    {
      id: 11,
      path: '/homeTrouser',
      component: <HomeTrouser/>,
    },
    {
      id: 12,
      path: '/homeShoes',
      component: <HomeShoes/>,
    },
    {
      id: 13,
      path: '*',
      component: <Error/>,
    }
  ]

  return (
    <div className=''  style={{
      background: dark? 'black': 'white',
      color: dark? 'white': 'black',
      minHeight: '100vh'
    }}>
    <Header/>
    <Routes>
      {routes.map((el) => (
        <Route key={el.id} path={el.path} element={el.component} />
      ))}
    </Routes>
    </div>
  )
}

export default App
