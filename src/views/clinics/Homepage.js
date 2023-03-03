import SEO from "../../components/seo";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function Homepage() {

  return (
    <>
      <SEO
        name="satinder sandhu"
        description="this is the homepage for clinics"
        title="Hompage"
        keywords="home,healthcare"
      />
      <h3>This is the Homepage</h3>
      <Link to='/clinics'><Button variant="text" >Homepage</Button></Link>
    </>
  );
}
