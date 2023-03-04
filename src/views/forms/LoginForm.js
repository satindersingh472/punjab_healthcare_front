import SEO from "../../components/seo";
import {Button, Card, FilledInput, Grid, Typography} from "@mui/material";


export default function Clinics() {
  return (
    <div>
      
        <SEO
          title="Login Healthcare"
          description="Login form an eHealth Care"
          name="satinder singh"
          keywords="clinics, ehealthcare, reliable system for health professionals"
        />
      <Card raised sx={{bgcolor:'#E1EEDD',height:'500px',minWidth:'400px',margin:"30px auto"}}>
    <Typography variant="h4" align="center" marginTop="20px" >
        eHealth Care
    </Typography>
    <form>
    <Grid container marginTop={6} rowSpacing={5}  sx={{textAlign:"center",display:'grid'}}  xs={12}>
        <Grid item >
            <FilledInput type="text" placeholder="Email" ></FilledInput>
            </Grid>
            <Grid item >
            <FilledInput type="password" placeholder="password" ></FilledInput>
            </Grid>
            <Grid item >
                <Button variant="contained" color="success" >Login</Button>
            </Grid>
            <Grid item>
                <Typography variant="body2" >
                    Don't have an Account? <Button variant="contained" size="small">Register</Button>
                </Typography>
            </Grid>
    </Grid>
    </form>
      </Card>
    </div>
  );
}
