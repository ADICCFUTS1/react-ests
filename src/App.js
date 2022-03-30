import { Routes, Route } from "react-router-dom";

import Bundesliga from "./comp/bundesliga";
import LaLiga from "./comp/laliga";
import ChampionsGrupos from "./comp/champions-grupos";
import ChampionsCuartos from "./comp/champions-cuartos";
import EliminatoriasConmebol from "./comp/eliminatorias-conmebol";
import MundialGrupos from "./comp/mundial-grupos";

function Apps() {
  return (
    <>
      <Routes>
        <Route path="/bundesliga" element={<Bundesliga />} />
        <Route path="/laliga" element={<LaLiga />} />
        <Route path="/champions-grupos" element={<ChampionsGrupos />} />
        <Route path="/champions-cuartos" element={<ChampionsCuartos />} />
        <Route
          path="/eliminatorias-conmebol"
          element={<EliminatoriasConmebol />}
        />
        <Route path="/mundial-grupos" element={<MundialGrupos />} />
      </Routes>
    </>
  );
}

export default Apps;
