import SEO from "../../components/seo";
import { Button, Card, FilledInput, Grid, Typography} from "@mui/material";
import React, {useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import {useForm} from 'react-hook-form';

export function Register() {
  const navigate = useNavigate();
  const {register,handleSubmit,reset} = useForm()
  const [error, setError] = useState();


  const onSubmit = (data,event) => {
    event.preventDefault();

    axios
      .request({
        url: `${process.env.REACT_APP_API_URL}/api/clinic`,
        method: "POST",
        data: {
          city: data["city"],
          email: data["email"],
          name: data["name"],
          password: data["password"],
          registration_number: data["registration_number"],
          state: data["state"],
        },
      })
      .then((response) => {
        Cookies.set('clinic_id',response['data']['clinic_id'])
        Cookies.set('clinic_token',response['data']['clinic_token'])
        reset();
        navigate('/patientsummary')
      })
      .catch((error) => {
        setError(error["response"]["data"]);
        reset();
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <SEO
        title="Register Healthcare"
        description="Register form for an eHealth Care"
        name="satinder singh"
        keywords="clinics, ehealthcare, reliable system for health professionals"
      />
      <Card
        raised
        sx={{
          bgcolor: '#FFF5EB',
          width: "400px",
          margin: "30px auto",
        }}
      >
        <Typography variant="h4" align="center" marginTop="20px">
          eHealth Care
        </Typography>
        <Typography variant="body2" align="center">
          Register your Clinic
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            marginTop={3}
            rowSpacing={1}
            sx={{ textAlign: "center", display: "grid" }}
          >
            <Grid item>
              <FilledInput
                {...register('name')}
                placeholder="Name"              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                placeholder="Registration Number"
                {...register('registration_number')}
              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                placeholder="City"
                {...register('city')}
              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                
                placeholder="State"
                {...register('state')}
              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                type="email"
                placeholder="Email"
                {...register('email')}
              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                type="password"
                {...register('password')}
                placeholder="Password"
            
              ></FilledInput>
            </Grid>
            <Grid>
              <Button type="submit" variant="contained" color="success" sx={{ margin: "10px" }}>
                Submit
              </Button>
            </Grid>
            <Grid item>
                <Typography>
                    Go to {" "}
                    <Link to="/">
                        Login
                    </Link>
                </Typography>
            </Grid>
          </Grid>
        </form>
      </Card>
      {error === "" ? null : <p>{error}</p>}
    </div>
  );
}
