import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from "../models/StateProvider";


const CheckoutPage = () => {
  const [{basket},/* dispatch*/] = useStateValue();
  function FormRow() {
    return (
      <React.Fragment>
        {basket?.map((item) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <CheckoutCard key={item.id} product={item} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
              COMPRAR EVENTO
          </Typography>
        </Grid>
        <Grid item xs={12} sm ={9} md={10} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
        <Typography align="center" gutterBottom variant="h4">
          <Total/>
        </Typography>
        </Grid>

      </Grid>
    </Box>
  );
};


export default CheckoutPage;