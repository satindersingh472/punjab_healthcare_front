import { Authenicated } from "./Authenticate";



export default function PatientSummary(){
const isAuthenticated = Authenicated()
console.log(isAuthenticated)
return (
    <>
    {isAuthenticated && <p>Hello World....</p>}
    </>
)
    
}