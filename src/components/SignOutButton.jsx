import { useMsal } from '@azure/msal-react'
import { AppBar } from '@mui/material'
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
      <AppBar>
        <Button variant="contained" onClick={handleLogout} >Sign Out</Button>
      </AppBar>
    </>
  )
}
