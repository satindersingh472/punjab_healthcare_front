import SEO from "../../components/seo";
import { Button, Card, FilledInput, Grid, Typography} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";

export function Register() {
  const formRef = useRef(null);
  const [cred, setCred] = useState({});
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [cookies, setCookies] = useCookies(['clinic_id','clinic_token']);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCred((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .request({
        url: `${process.env.REACT_APP_API_URL}/api/clinic`,
        method: "POST",
        data: {
          city: cred["city"],
          email: cred["email"],
          name: cred["name"],
          password: cred["password"],
          registration_number: cred["registration_number"],
          state: cred["state"],
        },
      })
      .then((response) => {
        setData(response["data"]);
        setCookies('clinic_id',data['clinic_id'])
        setCookies('clinic_token',data['clinic_token'])
        formRef.current.reset();
      })
      .catch((error) => {
        setError(error["response"]["data"]);
        formRef.current.reset();
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
        <form onSubmit={handleSubmit} ref={formRef}>
          <Grid
            container
            marginTop={3}
            rowSpacing={1}
            sx={{ textAlign: "center", display: "grid" }}
          >
            <Grid item>
              <FilledInput
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                type="text"
                name="registration_number"
                placeholder="Registration Number"
                onChange={handleChange}
              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                type="text"
                name="city"
                placeholder="City"
                onChange={handleChange}
              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                type="text"
                name="state"
                placeholder="State"
                onChange={handleChange}
              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
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
