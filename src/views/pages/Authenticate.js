import LoginForm from "../forms/LoginForm";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function Authenticate() {
  const [isCookies, setIsCookies] = useState();

  useEffect(() => {
    if (Cookies.get("clinic_token") === undefined) {
      setIsCookies(false);
    } else {
      setIsCookies(true);
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
