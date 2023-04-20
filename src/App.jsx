import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Basket from './components/basket/Basket';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import "./App.css";


export const AppContext = React.createContext({});

function App() {
  //хранение данных (туров)
  const [tyrs, setTyrs] = useState([])
  //для корзины
  const [overlayItems, setOverlayItems] = useState([])

useEffect(() =>
{
  async function axiosData(){
    const tyrsData = await axios.get('https://642964a05a40b82da4d1eea3.mockapi.io/tyrs');
    const cartData = await axios.get('https://642964a05a40b82da4d1eea3.mockapi.io/cart');

  
    setTyrs(tyrsData.data);
    setOverlayItems(cartData.data);
  }
  axiosData();
},[])

  const deleteItems=(id)=>{
    axios.delete(`https://642964a05a40b82da4d1eea3.mockapi.io/cart/${id}`);

    setOverlayItems((objDelete)=>objDelete.filter(item=>item.id !== id));
  }

  const isAdded=(myId)=>{
    return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
  }


  return (
    <AppContext.Provider
    value={
      {
        tyrs,
        setTyrs,
        overlayItems,
        setOverlayItems,
        isAdded
      }
    }
    >
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/'
                element={
                  <Home
                  item={tyrs}
                  overlayItems={overlayItems}
                  setOverlayItems={setOverlayItems}
                  />
                }
          />
          <Route path='/cart'
                element={<Basket
                totalPrice={
                  overlayItems.reduce((element = overlayItems.length, obj)=>
                  element+obj.price, 0 
                  )
                }
                overlayProp={overlayItems}
                deleteItems={deleteItems}
                />}
          />
        </Routes>
      </Router>
      <Footer/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
