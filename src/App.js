import { Routes, Route } from "react-router-dom";

import Bundesliga from "./comp/bundesliga";
import LaLiga from "./comp/laliga";
import ChampionsGrupos from "./comp/champions-grupos";
import EliminatoriasConmebol from "./comp/eliminatorias-conmebol";

function Apps() {
  return (
    <>
      <Routes>
        <Route path="/bundesliga" element={<Bundesliga />} />
        <Route path="/laliga" element={<LaLiga />} />
        <Route path="/champions-grupos" element={<ChampionsGrupos />} />
        <Route
          path="/eliminatorias-conmebol"
          element={<EliminatoriasConmebol />}
        />
      </Routes>
    </>
  );
}

export default Apps;
