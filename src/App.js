import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./views/forms/LoginForm";
import { Register } from "./views/forms/RegisterForm";
import { ScopedCssBaseline } from "@mui/material";
import PatientsSummary from "./views/pages/PatientsSummary";

export default function App() {
  return (
    <ScopedCssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/patientsummary" element={<PatientsSummary/>}/>
        </Routes>
      </BrowserRouter>
    </ScopedCssBaseline>
  );
}
