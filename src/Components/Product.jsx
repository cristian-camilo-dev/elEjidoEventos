import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { accounting } from "accounting";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AddShoppingCart } from "@mui/icons-material";
import { actionTypes } from "../models/reducer";
import { useStateValue } from "../models/StateProvider";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({
  product: { id, name, price, recinto,image, description,date,time,city ,address,aforo }
}) {
  const [expanded, setExpanded] = React.useState(false);

  const [{ basket }, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addtoBasket = () => {
    console.log("add to basket");
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        name: name,
        price: price,
        recinto: recinto,
        address: address,
        date: date,
        time: time,
        image: image,
        description: description,
        city: city,
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader
        action={
          <Typography
            sx={{ marginTop: "1rem" }}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price, "€", 2, ",", ".")}
          </Typography>
        }
        title={name}
        subheader={date + " Hora: " + time}
        
      />
      <CardMedia
        sx={{}}
        component="img"
        height="194"
        image={image}
        alt="EVENTO"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Lugar: {recinto}
         
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Ciudad: {city}
         
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Dirección: {address}
         
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={addtoBasket}>
        <Button variant="contained" color="success">
        Comprar
        </Button>
        </IconButton>

      

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
