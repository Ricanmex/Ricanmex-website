import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(to right, #c1121f, #003049, #fcbf49)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
            Ricanmex Frappes & Grill
          </h1>
          <p style={{ fontSize: "20px" }}>
            Puerto Rican & Mexican Flavors • Fresh Frappes
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "50px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>About Us</h2>
        <p style={{ lineHeight: "1.6" }}>
          Ricanmex Frappes & Grill brings together the bold flavors of Puerto Rico
          and Mexico. From savory plates to refreshing frappes, everything is
          made fresh, family-owned, and crafted with love for our community.
        </p>
      </section>

      {/* INFO */}
      <section style={{ background: "#f4f4f4", padding: "40px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <p><MapPin size={18} /> 4350 S 27th St, Milwaukee, WI 53221</p>
          <p><Phone size={18} /> (414) 553-3748</p>
          <p><Clock size={18} /> Dine-In • Takeout • Delivery</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Visit Us Today</h2>
        <p>Experience Puerto Rican & Mexican flavors in one place.</p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#000",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Ricanmex Frappes & Grill
      </footer>
    </div>
  );
}
