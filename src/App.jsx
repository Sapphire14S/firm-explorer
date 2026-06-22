import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import { useEffect } from "react";

function App() {

  useEffect(() => {

  console.log(
    "%cHello Developer!",
    "font-size:20px;color:#4CAF50;font-weight:bold;"
  );

  console.log(
    "%cThanks for checking out Firm Explorer.\nFeel free to explore the code on GitHub!",
    "font-size:14px;color:#999;"
  );

}, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:name" element={<CompanyPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;