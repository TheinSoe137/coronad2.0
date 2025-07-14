
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./mycomponents/Loader";

import "./index.css";
import ArtGallery from "./mycomponents/ArtGallery";
import Roadmap from "./mycomponents/Roadmap";
import Socials from "./mycomponents/Socials";
import Hero from "./mycomponents/Home";
import Relics from "./mycomponents/Relics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/character-showcase" element={<ArtGallery />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/relics" element={<Relics />} />
        <Route path="/Socials" element={<Socials />} />
      </Routes>
    </Router>
  );
}

export default App;
