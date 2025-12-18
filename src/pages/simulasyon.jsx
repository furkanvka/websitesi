import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function SimulationPage() {
  const items = [
    { title: "RL Araba Simülasyonu", link: "/simulasyon/rl-car" },
    { title: "WASM Demo", link: "/simulasyon/wasm" },
    { title: "Fizik Motoru", link: "/simulasyon/physics" },
  ];

  return (
    <Layout title="Simülasyonlar">
      <div style={{ padding: "2rem" }}>
        <h1>Simülasyonlar</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {items.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              style={{
                padding: "2rem",
                border: "1px solid #ccc",
                borderRadius: 12,
                textAlign: "center",
                textDecoration: "none",
                color: "#000",
                fontSize: 20,
                fontWeight: "bold",
                transition: "0.2s",
              }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
