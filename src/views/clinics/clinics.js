import SEO from "../../components/seo";
import Card from "@mui/material/Card";
import { TextField, Typography } from "@mui/material";
// import { Link } from "react-router-dom"
// import { Button } from "@mui/material"

export default function Clinics() {
  return (
    <div>
      {
        <SEO
          title="all clinics"
          description="basic description"
          name="satinder singh"
          keywords="clinics, healthcare"
        />
      }
      <Card sx={{minWidth:275}} variant="outlined" padding="20px">
      <Typography variant="h4" color="blue" padding="20px">
        eHealth Records
      </Typography>
      <form>
        <TextField id="outlined-basic" label="email" variant="outlined">

        </TextField>
      </form>
      </Card>
    </div>
  );
}
