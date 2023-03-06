import LoginForm from "../forms/LoginForm";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Authenticate() {
    const navigate = useNavigate()
  const [isCookies, setIsCookies] = useState();

  useEffect(() => {
    if (Cookies.get("clinic_token") === undefined) {
      setIsCookies(false);
        navigate('/')
    } 
  }, [isCookies]);

  const handleLogout = () => {
    Cookies.remove("clinic_token");
    setIsCookies(false)
  };

  return (
    <>
      {isCookies === false ? (
        <LoginForm />
      ) : (
        <div>
          <p>HEllo</p>
          <Button onClick={handleLogout}>delete cookies</Button>
        </div>
      )}
    </>
  );
}
