import SEO from "../../components/seo";
import React, { useState, useEffect } from "react";
import { Button, Card, FilledInput, Grid, Typography } from "@mui/material";
import axios from "axios";
// import cookies from "react-cookies";

export default function Clinics() {
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");

    const handleSubmit = ({target}) => {
        axios
        .request({
          url: `${process.env.REACT_APP_API_URL}/api/clinic_login`,
          method: 'POST',
          data: {
              email: target.email.value,
              password: target.password.value
          }
        })
        .then((response) => {
          setData(response.data)
        })
        .catch((error) => {
            setMessage(error.message)
        });
    }


  useEffect(() => {
   
  });

  return (
    <div>
      <SEO
        title="Login Healthcare"
        description="Login form an eHealth Care"
        name="satinder singh"
        keywords="clinics, ehealthcare, reliable system for health professionals"
      />
      <Card
        raised
        sx={{
          bgcolor: "#E1EEDD",
          height: "500px",
          minWidth: "400px",
          margin: "30px auto",
        }}
      >
        <Typography variant="h4" align="center" marginTop="20px">
          eHealth Care
        </Typography>
        <form onSubmit={handleSubmit} >
          <Grid
            container
            marginTop={6}
            rowSpacing={5}
            sx={{ textAlign: "center", display: "grid" }}
            xs={12}
          >
            <Grid item>
              <FilledInput type="text" placeholder="Email" name="email" ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput type="password" placeholder="password" name="password" ></FilledInput>
            </Grid>
            <Grid item>
              <Button variant="contained" color="success" type="submit" >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Don't have an Account?{" "}
                <Button variant="contained" size="small">
                  Register
                </Button>
                {!message ? null : <p>{message}</p> }
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
}
