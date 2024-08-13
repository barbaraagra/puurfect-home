import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import PetDetails from "./pages/Dog1/PetDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/petDetails" element={<PetDetails />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;