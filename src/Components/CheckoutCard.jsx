import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import { accounting } from "accounting";
import { useStateValue } from "../models/StateProvider";
import { actionTypes } from "../models/reducer";



export default function CheckoutCard({ product : {id, name, price,productType ,rating,image,description} }) {
  
  const [{basket}, dispatch] = useStateValue();


  const removeItem = () => {
    console.log("remove item");
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id:id,

    });
  }

 

  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader
        action={
          <Typography
            sx={{marginTop:"1rem"}}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price, "€", 2, ",", ".")}
          </Typography>
        }
        title={name}
        subheader="13/05/2022 - 8:00pm"
      />
      <CardMedia
        sx={{  }}
        component="img"
        height="194"
        image={image}
        alt="EVENTO"
      />
      
      <CardActions disableSpacing sx={{display:'flex', justifyContent:'space-between'}}>

      <div>
      {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
      </div>
        
       <IconButton onClick={removeItem}  >
       <DeleteIcon fontSize="large" />
       </IconButton> 
      
      </CardActions>
      
    </Card>
  );
}