import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginForm from './views/forms/LoginForm'


export default function App(){
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}