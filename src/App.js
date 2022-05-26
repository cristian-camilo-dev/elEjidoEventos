import "./App.css";
import React from "react";
//import Product from "./Components/Product";

import Products from "./Components/Products";
import CheckoutPage from "./Components/CheckoutPage";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/Signin";
import SignUp from "./Components/Signup";
import { useEffect } from "react";
import { auth } from "./models/fireBase";
import { actionTypes } from "./models/reducer";
import { useStateValue } from "./models/StateProvider";
import Checkout from "./Components/CheckoutForm/Checkout";
import Footer from "./Components/Fotter";
import FormEvento from "./Components/CrearEvento";
import ResponsiveAppBar from "./Components/NavbarV1";

import Carrusel from "./Components/carrusel/Carrusel.jsx";




function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    });
  }, []);

  return (

    
    <div className="App-header">
      
      <ResponsiveAppBar />
      
      <Routes>
        <Route path="/" element={<>
          <Carrusel />
          <Products />
        </>} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout-page" element={<Checkout/>} />
        <Route path= "/crearEvento" element={<FormEvento />} />
      </Routes>

      <Footer />

      
    </div>
    
  );
}

export default App;
