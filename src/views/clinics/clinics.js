import SEO from "../../components/seo"
import { Link } from "react-router-dom"

export default function Clinics(){
    return (
        <div>
          {
            <SEO 
          title="all clinics"
          description="basic description"
          name="satinder singh"
          keywords="clinics, healthcare" />
 }

          <h1>hello</h1>
          <p>My name satinder singh</p>
          <Link to ='/'><button>Go to Home page</button></Link>
        </div>



    )
}