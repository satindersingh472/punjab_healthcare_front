import React,{ useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@mui/material";
import LoginForm from "../forms/LoginForm";

export default function PatientsSummary() {
  const [isLogged, setIsLogged] = useState();

useEffect(()=>{
    const token = Cookies.get('clinic_token')
    setIsLogged(token)
},[isLogged])


const logout = ()=>{
    const token_removed = Cookies.remove('clinic_token')
    setIsLogged(token_removed)
}

  return (
    <div>
        {isLogged !== undefined ? (<><p>Hello....your token is ______ {isLogged} </p>
        
        <Button variant="contained" onClick={logout}>Logout</Button>
        
        
        </>) : <LoginForm/>}
   
    </div>
  );
}
