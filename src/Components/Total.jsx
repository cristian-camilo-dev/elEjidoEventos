import React from 'react'
import Button from '@mui/material/Button';
import accounting from 'accounting'
import {getBasketTotal} from '../models/reducer'
import { useStateValue } from "../models/StateProvider";
import { Link as Linkr } from "react-router-dom";



function Total() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div>
      <h5>Total items: {basket.length} </h5> 
      <h5>Total: {accounting.formatMoney(getBasketTotal(basket), "€", 2, ",", ".")}</h5>
      <Linkr to="/checkout-page">
      <Button variant="contained" sx={{backgroundColor:'#6D8B74', marginTop:3}}>Check out</Button>
      </Linkr>
      
    </div>
  )
}

export default Total