import {NavigationBar} from '../components/NavigationBar'
import HomeImage from "../components/HomeImage"
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'


export const HomePage = () => {
  return (
    <Grid2 container sx={{textAlign:'center',placeItems:'center',display:'grid'}} >
        <Grid2 xs={12} >
        <NavigationBar ></NavigationBar>
      </Grid2>
      <Grid2  >
      <HomeImage></HomeImage>
      </Grid2>
    </Grid2>
  )
}
