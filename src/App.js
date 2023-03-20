import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { HomePage } from "./views/Homepage";


export default function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
}
