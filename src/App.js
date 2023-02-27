import { BrowserRouter,Routes,Route } from "react-router-dom"
import Clinics from "./views/clinics/clinics"
import Homepage from "./views/clinics/Homepage"


export default function App(){
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/clinics' element={<Clinics/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}