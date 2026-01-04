import "./App.css";

import jibarito from "./assets/jibarito.jpg";
import mofongo from "./assets/mofongo.jpg";
import pastel from "./assets/pastel-dinner.jpg";

const buttonStyle = {
  padding: '12px 18px',
  backgroundColor: '#E63946',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ricanmex Frappes & Grill</h1>
<div style={{ marginTop: '10px', textAlign: 'center' }}>
  <p>
    📍{' '}
    <a
      href="https://maps.google.com/?q=4350+S+27th+St+Milwaukee+WI+53221"
      target="_blank"
      rel="noopener noreferrer"
    >
      4350 S 27th St, Milwaukee, WI 53221
    </a>
  </p>
  <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
  <a
    href="https://order.spoton.com/so-ricanmex-frappes-and-grill-23636/milwaukee-wi/680ff8a154f401ec3b2a7f23"
    target="_blank"
    rel="noopener noreferrer"
    style={buttonStyle}
  >
    🛍 Order Pickup
  </a>

  <a
    href="https://order.online/store/2631297?redirected=true&delivery=true"
    target="_blank"
    rel="noopener noreferrer"
    style={buttonStyle}
  >
    🚗 DoorDash
  </a>

  <a
    href="https://www.ubereats.com/store/ricanmex-frappes-&-grill/O6GRJ24OWEaPINFcVX-aJw?diningMode=DELIVERY"
    target="_blank"
    rel="noopener noreferrer"
    style={buttonStyle}
  >
    🚗 Uber Eats
  </a>
</div>
<p
  style={{
    marginTop: "16px",
    fontSize: "14px",
    color: "#cccccc",
    textAlign: "center",
    maxWidth: "600px",
    marginInline: "auto"
  }}
>
  ℹ️ Prices for delivery may be higher than in-store pickup due to third-party service fees.
</p>



  <p>
    📞{' '}
    <a href="tel:14145533748">
      414-553-3748
    </a>
  </p>
</div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <img src={jibarito} alt="Jibarito" width="250" />
        <img src={mofongo} alt="Mofongo" width="250" />
        <img src={pastel} alt="Pastel Dinner" width="250" />
      </div>
    </div>
  );
}

export default App;

