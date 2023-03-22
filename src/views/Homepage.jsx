import { NavigationBar } from '../components/NavigationBar'
import HomeImage from '../components/HomeImage'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react'
import { ProfileContent } from '../components/profileContent'

export const HomePage = () => {
  return (
    <Grid2
      container
      sx={{ textAlign: 'center', placeItems: 'center', display: 'grid' }}
    >
      <Grid2 xs={12}>
        <NavigationBar></NavigationBar>
      </Grid2>
      <Grid2>
        <AuthenticatedTemplate><ProfileContent/></AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <HomeImage></HomeImage>
        </UnauthenticatedTemplate>
      </Grid2>
    </Grid2>
  )
}
