import React,{ useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@mui/material";
import LoginForm from "../forms/LoginForm";
import PreviosRecords from "./PreviousRecords";

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
        {isLogged !== undefined ? (<><PreviosRecords/>
        
        <Button variant="contained" onClick={logout}>Logout</Button>
        
        
        </>) : <LoginForm/>}
   
    </div>
  );
}
