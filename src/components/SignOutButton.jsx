import { useMsal } from '@azure/msal-react'
import {Button} from '@mui/material'

export const SignOutButton = () => {
  const { instance } = useMsal()

  const handleLogout = () => {
    instance.logoutPopup({
        postLogoutRedirectUri : "/",
        mainWindowRedirectUri: "/"
    })
  }

  return (
    <>
     
        <Button sx={{margin:"10px"}} variant="contained" color='warning'  onClick={handleLogout} >Sign Out</Button>
   
    </>
  )
}
