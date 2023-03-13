import Cookies from "js-cookie";
import { useEffect, useState } from "react";


export function Authenticate(){
    const [isLogged, setIsLogged] = useState();
  
    useEffect(()=>{
        const token = Cookies.get('clinic_token');
        if(token) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    },[]);

    return isLogged;
}