import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { db } from "../models/fireBase";
import { collection, addDoc } from "firebase/firestore";

import Button from "@mui/material/Button";

import { useStateValue } from "../models/StateProvider";

export default function FormEvento() {
  const [{ user }, dispatch] = useStateValue();

  
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
    const data = new FormData(event.currentTarget);
    const json = {
      userId: user.uid,
      name: data.get("titulo"),
      date: data.get("fecha"),
      time: data.get("hora"),
      address: data.get("direccion"),
      city: data.get("ciudad"),
      recinto: data.get("recinto"),
      price: data.get("precio"),
      aforo: data.get("aforo"),
      image: data.get("imagen"),
      description: data.get("descripcion"),
    };
    console.log(user.uid);



    const docRef = await addDoc(collection(db, "eventos"), json);
    console.log(docRef);



    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ flexGrow: 1, marginBottom: 2 }}
    >
      <Grid
        container
        spacing={2}
        sx={{ marginTop: 2, justifyContent: "center" }}
      >
        <Grid
          sx={{
            height: 420,
            margin: 3,
            width: "100%",
            height: "100%",
            backgroundColor: "#F5F5F5",
            padding: 2,
          }}
          item
          xs={8}
          md={12}
        >
          <Typography
            component="h1"
            variant="h2"
            align="start"
            color="text.primary"
            gutterBottom
          >
            Crear Evento
          </Typography>
          <TextField fullWidth label="Titulo" id="titulo" name="titulo" />

          <Typography
            component="h5"
            variant="h5"
            align="start"
            color="text.primary"
            gutterBottom
            sx={{ marginTop: 2 }}
          >
            Fecha
          </Typography>
          <input type="date" id="fecha" className="fecha" name="fecha" />

          <Typography
            component="h5"
            variant="h5"
            align="start"
            color="text.primary"
            gutterBottom
            sx={{ marginTop: 2 }}
          >
            Hora
          </Typography>
          <input type="time" id="hora" className="time" name="hora" />
        </Grid>

        <Grid
          sx={{
            height: 420,
            margin: 3,
            width: "100%",
            backgroundColor: "#F5F5F5",
            padding: 2,
          }}
          item
          xs={8}
          md={12}
        >
          <Typography
            component="h5"
            variant="h5"
            align="start"
            color="text.primary"
            gutterBottom
            sx={{ marginTop: 2 }}
          >
            Dirección
          </Typography>
          <TextField
            fullWidth
            label="direccion"
            id="direccion"
            name="direccion"
          />

          <Typography
            component="h5"
            variant="h5"
            align="start"
            color="text.primary"
            gutterBottom
            sx={{ marginTop: 2 }}
          >
            Ciudad
          </Typography>
          <TextField fullWidth label="ciudad" id="ciudad" name="ciudad" />

          <Typography
            component="h5"
            variant="h5"
            align="start"
            color="text.primary"
            gutterBottom
            sx={{ marginTop: 2 }}
          >
            Recinto
          </Typography>
          <TextField fullWidth label="recinto" id="recinto" name="recinto" />
        </Grid>

        <Grid
          sx={{
            height: 420,
            margin: 3,
            width: "100%",
            height: "100%",
            backgroundColor: "#F5F5F5",
            padding: 2,
          }}
          item
          xs={8}
          md={12}
        >
          <Typography
            component="h5"
            variant="h5"
            align="start"
            color="text.primary"
            gutterBottom
          >
            Precio
          </Typography>
          <TextField
            name="precio"
            id="outlined-number"
            label="Precio"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <Typography
            component="h5"
            variant="h5"
            align="start"
            color="text.primary"
            gutterBottom
            sx={{ marginTop: 2 }}
          >
            Aforo max
          </Typography>
          <TextField
            name="aforo"
            id="outlined-number"
            label="Aforo max"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <Typography
            component="h5"
            variant="h5"
            align="start"
            color="text.primary"
            gutterBottom
            sx={{ marginTop: 2 }}
          >
            Url de la imagen
          </Typography>
          <TextField fullWidth label="Imagen" id="imagen" name="imagen" />

          <Typography
            component="h5"
            variant="h5"
            align="start"
            color="text.primary"
            gutterBottom
            sx={{ marginTop: 2 }}
          >
            Descripción
          </Typography>
          <TextField fullWidth label="Descripción" id="descripcion" name="descripcion"/>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ marginTop: 2 }}
          >
            Crear Evento
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
