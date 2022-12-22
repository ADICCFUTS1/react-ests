import { Routes, Route } from "react-router-dom";

import Bundesliga from "./comp/bundesliga";
import LaLiga from "./comp/laliga";
import PremierLeague from "./comp/premier-league";
import SerieA from "./comp/seriea";
import Ligue1 from "./comp/ligue1";
import LigaArgentina from "./comp/liga-argentina";
import LigaArgentinaAnual from "./comp/arg/ArgAnual";
import LigaArgentinaPromedios from "./comp/arg/ArgPromedios";
import ChampionsGrupos from "./comp/champions/grupos";
import ChampionsRound from "./comp/champions/round/one";
import ChampionsRound2 from "./comp/champions/round/two";
import ChampionsRound3 from "./comp/champions/round/three";
import ChampionsRound4 from "./comp/champions/round/four";
import EuropaGrupos from "./comp/europa/grupos";
import EuropaRound from "./comp/europa/round/one";
import EuropaRound2 from "./comp/europa/round/two";
import EuropaRound3 from "./comp/europa/round/three";
import EuropaRound4 from "./comp/europa/round/four";
import EuropaRound5 from "./comp/europa/round/five";
import LibGrupos from "./comp/libertadores/grupos";
import LibOctavos from "./comp/libertadores/octavos";
import LibCuartos from "./comp/libertadores/cuartos";
import LibSemis from "./comp/libertadores/semis";
import LibFinal from "./comp/libertadores/final";
import EuropaCuartos from "./comp/europa-cuartos";
import EliminatoriasConmebol from "./comp/eliminatorias-conmebol";
import MundialGrupos from "./comp/mundial/grupos";
import MundialCalendar from "./comp/mundial/calendario";
import MundialRound from "./comp/mundial/round/one";
import MundialRound2 from "./comp/mundial/round/two";
import MundialRound3 from "./comp/mundial/round/three";
import MundialRound4 from "./comp/mundial/round/four";
import MundialRound5 from "./comp/mundial/round/five";
import Tests from "./comp/test";
function Apps() {
  return (
    <>
      <Routes>
        <Route path="/bundesliga" element={<Bundesliga />} />
        <Route path="/laliga" element={<LaLiga />} />
        <Route path="/serie-a" element={<SerieA />} />
        <Route path="/ligue-1" element={<Ligue1 />} />
        <Route path="/liga-argentina" element={<LigaArgentina />} />
        <Route path="/liga-argentina/anual" element={<LigaArgentinaAnual />} />
        <Route
          path="/liga-argentina/promedios"
          element={<LigaArgentinaPromedios />}
        />
        <Route path="/premier-league" element={<PremierLeague />} />
        <Route path="/champions/grupos" element={<ChampionsGrupos />} />
        <Route path="/champions/round" element={<ChampionsRound />} />
        <Route path="/champions/round2" element={<ChampionsRound2 />} />
        <Route path="/champions/round3" element={<ChampionsRound3 />} />
        <Route path="/champions/round4" element={<ChampionsRound4 />} />
        <Route path="/europa/grupos" element={<EuropaGrupos />} />
        <Route path="/europa/round" element={<EuropaRound />} />
        <Route path="/europa/round2" element={<EuropaRound2 />} />
        <Route path="/europa/round3" element={<EuropaRound3 />} />
        <Route path="/europa/round4" element={<EuropaRound4 />} />
        <Route path="/europa/round5" element={<EuropaRound5 />} />
        <Route path="/libertadores/grupos" element={<LibGrupos />} />
        <Route path="/libertadores/octavos" element={<LibOctavos />} />
        <Route path="/libertadores/cuartos" element={<LibCuartos />} />
        <Route path="/libertadores/semis" element={<LibSemis />} />
        <Route path="/libertadores/final" element={<LibFinal />} />
        <Route path="/europa-cuartos" element={<EuropaCuartos />} />
        <Route
          path="/eliminatorias-conmebol"
          element={<EliminatoriasConmebol />}
        />
        <Route path="/mundial/grupos" element={<MundialGrupos />} />
        <Route path="/mundial/calendario" element={<MundialCalendar />} />
        <Route path="/mundial/round" element={<MundialRound />} />
        <Route path="/mundial/round2" element={<MundialRound2 />} />
        <Route path="/mundial/round3" element={<MundialRound3 />} />
        <Route path="/mundial/round4" element={<MundialRound4 />} />
        <Route path="/mundial/round5" element={<MundialRound5 />} />
        <Route path="/test" element={<Tests />} />
      </Routes>
    </>
  );
}

export default Apps;
