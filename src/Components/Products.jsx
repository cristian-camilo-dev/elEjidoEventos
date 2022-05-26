import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import { collection, getDocs } from "firebase/firestore";
import { db } from "../models/fireBase";
import Product from '../Components/Product';





/*const eventsDataBase = get(child(dataBase,"/eventos")).then(snapshot => {
   console.log(snapshot.val());
});*/



export default function Products() {

  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const getProducts = async () => {
      const products = await getDocs(collection(db, "eventos"));
      let productsArray = [];
    
      products.forEach(product => {
        productsArray.push({id: product.id,...product.data()});
        
      })
      setProducts(productsArray);
      console.log(products);
    }
    if(products.length === 0){
      getProducts();
    } 
  }, [products]);
    


  return (
    <Box sx={{ flexGrow: 1, padding:3}}>
      <Grid container spacing={4}>

        {
          products.map(product =>(
            <Grid item xs={12} sm={6} md={4} lg={3} >
          <Product key={products.id} product={product} />
        </Grid>
          ))
        }



        
        
      </Grid>
    </Box>
  );
}
