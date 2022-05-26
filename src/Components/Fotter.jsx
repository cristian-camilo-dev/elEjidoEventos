import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/Logo Festival Minimalista Rosa (1).png";
import { Link as LinkR } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';



function Fotter() {
  return (
    <Box sx={{ bgcolor: "#6D8B74", marginTop: 6 }}>
      <Container maxWidth="md" sx={{ py: 1 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={6} md={3}>
            <LinkR to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img src={logo} alt="logo" height="200" />
              </IconButton>
            </LinkR>
          </Grid>

          <Grid item xs={6} md={3}>
            <Stack direction="column" spacing={0} sx={{ marginTop: 5 }}>
              <LinkR to="/signin" className="login">
              <Button   size= "large"  sx={{color:"white",}} >Sign in</Button>
              </LinkR>
              <LinkR to="/signup" className="login">
              <Button  size= "large"  sx={{color:"white",}} >Sign up</Button>
              </LinkR>

              <LinkR to="/checkout" className="login">
              <Button  size= "large"  sx={{color:"white",}} >checkout</Button>
              </LinkR>
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Stack direction="row" spacing={0} sx={{ marginTop: 5 }}>
            
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                
              >
                <FacebookIcon fontSize="large" sx={{ color: "white" }} />
                <InstagramIcon fontSize="large" sx={{ color: "white" }} />
                <PhoneAndroidIcon fontSize="large" sx={{ color: "white" }} />
                
              </IconButton>
           

            </Stack>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Fotter;
