import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginForm from './views/forms/LoginForm'
import { Register } from "./views/forms/RegisterForm"
import { ScopedCssBaseline } from "@mui/material"


export default function App(){
  return (
    <BrowserRouter>
    <ScopedCssBaseline>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </ScopedCssBaseline>
    </BrowserRouter>
  )
}