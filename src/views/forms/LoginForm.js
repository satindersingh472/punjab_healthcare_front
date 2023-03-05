import SEO from "../../components/seo";
import React, { useState, useEffect,useRef } from "react";
import { Button, Card, FilledInput, Grid, Typography } from "@mui/material";
import axios from "axios";
import {useCookies} from "react-cookie";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form'

export default function Clinics() {
    const {formRef} = useRef(null);
    const [message,setMessage] = useState();
    const [data,setData] = useState();
    const [cred, setCred] = useState({
        email: "",
        password: ""
    }); 
    const [cookies, setCookies] = useCookies(['clinic_id','clinic_token']);
    
    const handleChange = (event) => {
        const {name,value} = event.target;
        setCred((prev) => {
          return {...prev,[name]:value}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .request({
          url: `${process.env.REACT_APP_API_URL}/api/clinic_login`,
          method: 'POST',
          data: {
              email: cred['email'],
              password: cred['password']
          }
        })
        .then((response) => {
          setData(response['data'])
          setCookies('clinic_id' , data['clinic_id'])
          setCookies('clinic_token' , data['clinic_token'])
          formRef.current.reset();
        })
        .catch((error) => {
            setMessage(error['response']['data'])
            formRef.current.reset();
            setTimeout(() => {
                setMessage('')
            }, 3000);
        });
    }


  useEffect(() => {
   
  },[]);

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
          bgcolor:'#FFF5EB',
          width: "400px",
          margin: "30px auto",
          textAlign:'center'
        }}
      >
        <Typography variant="h4" align="center" marginTop="20px">
          eHealth Care
        </Typography>
        <form onSubmit={handleSubmit} ref={formRef} >
          <Grid
            container
            marginTop={6}
            rowSpacing={5}
            sx={{ textAlign: "center", display: "grid" }}
          >
            <Grid item>
              <FilledInput type="text" placeholder="Email" name="email" onChange={handleChange} value={cred.email || ''} ></FilledInput>
            </Grid>
            <Grid item>
              <FilledInput type="password" placeholder="password" name="password" onChange={handleChange} value={cred['password'] || ""} ></FilledInput>
            </Grid>
            <Grid item>
              <Button variant="contained" color="success" type="submit" >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Don't have an Account?{" "}
                <Link to="/register">
                    Register
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
        {message === '' ? null : <p>{message}</p>}
      </Card>
    </div>
  );
}
