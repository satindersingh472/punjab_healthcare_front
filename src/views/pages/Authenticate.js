import Cookies from 'js-cookie'
import {useState,useEffect} from 'react'

export function Authenicated(){
  const [isLoggedIn, setIsLoggedIn] = useState();
  


  useEffect(()=>{
    const token = Cookies.get('clinic_token')
    if(token){  
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
  }
},[])
return isLoggedIn;
}