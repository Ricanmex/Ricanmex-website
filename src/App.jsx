function App() {
  return (
    <div style={container}>
      <div style={card}>
        <h1>Ricanmex Frappes & Grill</h1>

        <p style={info}>
          4350 S 27th St, Milwaukee, WI 53221
        </p>

        <p style={info}>
          📞 <a href="tel:14145533748" style={link}>414-553-3748</a>
        </p>

        <p style={info}>
          ⏰ Monday – Friday • 11:00 AM – 7:00 PM
        </p>

        <h2>Order Online</h2>

        <p style={note}>
          Pickup orders are cheapest when ordered directly.
          <br />
          Delivery prices may vary on third-party platforms.
        </p>

        <div style={buttons}>
          <a
            
  href="https://order.spoton.com/so-ricanmex-frappes-and-grill-23636/milwaukee-wi/680ff8a154f401ec3b2a7f23"
  target="_blank"
  rel="noopener noreferrer"
  style={{ ...button, background: "#000" }}
>
  Order Pickup
</a>

        <a
          href="https://order.online/store/2631297?redirected=true&delivery=true"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...button, background: "#ff3008" }}
        >
          Order on DoorDash
        </a>

        <a
          href="https://www.ubereats.com/store/ricanmex-frappes-&-grill/O6GRJ24OWEaPINFcVX-aJw?diningMode=DELIVERY"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...button, background: "#06c167" }}
        >
          Order on Uber Eats
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

/* ===== STYLES (ALL BELOW) ===== */

const container = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #ce1126 0%, #ffffff 50%, #0038a8 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

const card = {
  background: "white",
  width: "100%",
  maxWidth: "500px",
  padding: "30px 20px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  textAlign: "center",
};

const buttons = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const button = {
  color: "white",
  padding: "18px",
  fontSize: "18px",
  fontWeight: "bold",
  textDecoration: "none",
  borderRadius: "10px",
};

const note = {
  fontSize: "14px",
  color: "#666",
  marginBottom: "25px",
};

const info = {
  margin: "6px 0",
  fontSize: "14px",
  color: "#333",
};

const link = {
  color: "#0038a8",
  textDecoration: "none",
  fontWeight: "bold",
};
