import SEO from "../../components/seo";
import React, { useState } from "react";
import { Button, Card, FilledInput, Grid, Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// default function
export default function LoginForm() {
  const navigate = useNavigate();
  // use react-hook-form for forms inputs
  const { register, handleSubmit, reset } = useForm();
  // use message hook for showing any error message
  const [message, setMessage] = useState();



  // will handle the api request with handle submit function from useform hook
  const onSubmit = (data, event) => {
    // prevent the default function of a form
    event.preventDefault();
    axios
      .request({
        url: `${process.env.REACT_APP_API_URL}/api/clinic_login`,
        method: "POST",
        data: {
          email: data["email"],
          password: data["password"],
        },
      })
      .then((response) => {
        navigate('/authenticate')
        Cookies.set("clinic_id", response["data"]["clinic_id"]);
        Cookies.set("clinic_token", response["data"]["clinic_token"]);
        reset();
       
      })
      .catch((error) => {
        setMessage(error["response"]["data"]);
        reset();
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  };

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
          bgcolor: "#FFF5EB",
          width: "400px",
          margin: "30px auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" align="center" marginTop="20px">
          eHealth Care
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            marginTop={6}
            rowSpacing={5}
            sx={{ textAlign: "center", display: "grid" }}
          >
            <Grid item>
              <FilledInput
                {...register("email")}
                placeholder="Email"
              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                {...register("password")}
                type="password"
                placeholder="password"
              ></FilledInput>
            </Grid>
            <Grid item>
              <Button variant="contained" color="success" type="submit">
                Login
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Don't have an Account? <Link to="/register">Register</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
        {message === "" ? null : <p>{message}</p>}
      </Card>
    </div>
  );
}
