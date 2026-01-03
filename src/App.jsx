import "./App.css";

import jibarito from "./assets/jibarito.jpg";
import mofongo from "./assets/mofongo.jpg";
import pastel from "./assets/pastel-dinner.jpg";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ricanmex Frappes & Grill</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <img src={jibarito} alt="Jibarito" width="250" />
        <img src={mofongo} alt="Mofongo" width="250" />
        <img src={pastel} alt="Pastel Dinner" width="250" />
      </div>
    </div>
  );
}

export default App;

