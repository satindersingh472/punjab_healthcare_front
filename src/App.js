import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ScopedCssBaseline } from "@mui/material";
import { PageLayout } from "./components/PageLayout";


export default function App() {
  return (
    <ScopedCssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout/>}/>
        </Routes>
      </BrowserRouter>
    </ScopedCssBaseline>
  );
}
