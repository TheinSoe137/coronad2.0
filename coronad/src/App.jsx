
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./mycomponents/Loader";

import "./index.css";
import ArtGallery from "./mycomponents/ArtGallery";
import NewRoadmap from "./mycomponents/NewRoadmap";
import Socials from "./mycomponents/Socials";
import Hero from "./mycomponents/Home";
import Relics from "./mycomponents/Relics";
import ComicBusinessFAQ from "./mycomponents/ComicBusinessFAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/character-showcase" element={<ArtGallery />} />
        <Route path="/roadmap" element={<NewRoadmap />} />
        <Route path="/relics" element={<Relics />} />
        <Route path="/Socials" element={<Socials />} />
        <Route path="/comics-faq" element={<ComicBusinessFAQ/>} />
      </Routes>
    </Router>
  );
}

export default App;
