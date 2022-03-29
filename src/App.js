import { Routes, Route } from "react-router-dom";

import Bundesliga from "./comp/bundesliga";
import LaLiga from "./comp/laliga";
import ChampionsGrupos from "./comp/champions-grupos";

function Apps() {
  return (
    <>
      <Routes>
        <Route path="/bundesliga" element={<Bundesliga />} />
        <Route path="/laliga" element={<LaLiga />} />
        <Route path="/champions-grupos" element={<ChampionsGrupos />} />
      </Routes>
    </>
  );
}

export default Apps;
