import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../assets/Logo Festival Minimalista Rosa (1).png";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useStateValue } from "../models/StateProvider";
import { auth } from "../models/fireBase";
import { Link as Linkr, useNavigate } from "react-router-dom";
import { actionTypes } from "../models/reducer";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));



const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });

      navigate.push("/");
    }
  };

  return (
    <AppBar position="sticky"
    sx={{
          backgroundColor: "#6D8B74",
          
         
        }}
    
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} alt="logo" height="100" />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 9 }}
          ></Typography>

          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >

              <MenuItem onClick={handleCloseNavMenu}>
              <Typography variant="h6" component="div" sx={{ fontSize:"15px"  }}>
              {user ? user.email : "Guest"}
            </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{}}>
                <Link to="/signIn" className="login">
                  <Typography
                    onClick={handleAuth}
                    color="inherit"
                    variant="outlined"
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    <span> {user ? "Sign out" : "Sign in"}</span>
                  </Typography>
                </Link>
              </MenuItem>
                    {user && (
              <MenuItem onClick={handleCloseNavMenu} sx={{}}>
                <Link to="/crearEvento" className="login">
                  <Typography
                    
                    color="inherit"
                    variant="outlined"
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      
                    }}
                  >
                    <span>Crear evento </span>
                  </Typography>
                </Link>
              </MenuItem>)}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            ></Button>

            <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
              {user ? user.email : "Guest"}
            </Typography>

            <Link to="/signIn" className="login">
              <Button
                onClick={handleAuth}
                color="inherit"
                variant="outlined"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                <span> {user ? "Sign out" : "Sign in"}</span>
              </Button>
            </Link>
                {user && (
            <Link to="/crearEvento" className="login">
              <Button
                
                color="inherit"
                variant="outlined"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginLeft: "1rem",
                }}
              >
                <span>Crear evento </span>
              </Button>
            </Link>)}
          </Box>

          
          <Link to="/checkout">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={basket?.length}>
                <ShoppingCartIcon fontSize="large" sx={{ color: "white" }} />
              </StyledBadge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
