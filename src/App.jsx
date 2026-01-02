function App() {
  return (
    <div style={container}>
      <h1>Ricanmex Frappes & Grill</h1>

      <h2>Order Online</h2>

      <p style={note}>
        Pickup orders are cheapest when ordered directly.
        <br />
        Delivery prices may vary on third-party platforms.
      </p>

      <div style={buttons}>
        <a
  href="https://https://order.spoton.com/so-ricanmex-frappes-and-grill-23636/milwaukee-wi/680ff8a154f401ec3b2a7f23"
  target="_blank"
  rel="noopener noreferrer"
  style={{ ...button, background: "#000" }}
>
  Order Pickup
</a>

        <a
          href="https://https://order.online/store/2631297?redirected=true&delivery=true"
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
  );
}

const container = {
  maxWidth: "500px",
  margin: "0 auto",
  padding: "40px 20px",
  textAlign: "center",
};

const note = {
  fontSize: "14px",
  color: "#666",
  marginBottom: "30px",
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

export default App;
