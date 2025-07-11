"use client";
import React, { useState } from "react";

export function Suggestions() {
  const [showLearn, setShowLearn] = useState(false);

  return (
    <div style={{ display: "flex", gap: "1rem", margin: "1.5rem 0" }}>
      {!showLearn && (<><button style={{ display: "flex", alignItems: "center", gap: ".5rem", border: "1px solid #ddd", borderRadius: "8px", padding: "0.5rem 1.2rem", background: "#fff", fontSize: "1rem" }}>
        <span>✏️</span> Write
      </button>
      <button
        style={{ display: "flex", alignItems: "center", gap: ".5rem", border: "1px solid #ddd", borderRadius: "8px", padding: "0.5rem 1.2rem", background: "#fff", fontSize: "1rem" }}
        onClick={() => setShowLearn(true)}
      >
        <span>🎓</span> Learn
      </button>
      <button style={{ display: "flex", alignItems: "center", gap: ".5rem", border: "1px solid #ddd", borderRadius: "8px", padding: "0.5rem 1.2rem", background: "#fff", fontSize: "1rem" }}>
        <span>💻</span> Code
      </button>
      <button style={{ display: "flex", alignItems: "center", gap: ".5rem", border: "1px solid #ddd", borderRadius: "8px", padding: "0.5rem 1.2rem", background: "#fff", fontSize: "1rem" }}>
        <span>☕</span> Life stuff
      </button>
      <button style={{ display: "flex", alignItems: "center", gap: ".5rem", border: "1px solid #ddd", borderRadius: "8px", padding: "0.5rem 1.2rem", background: "#fff", fontSize: "1rem" }}>
        <span>💡</span> Claude’s choice
      </button></>)}

      {showLearn && (
        <div
          style={{
            minWidth: "370px",
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            padding: "1.2rem 1.2rem 0.5rem 1.2rem",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "0.7rem" }}>
            <span style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}>🎓</span>
            <span style={{ fontWeight: 500, fontSize: "1.05rem", flex: 1 }}>Learn</span>
            <button
              onClick={() => setShowLearn(false)}
              style={{ background: "none", border: "none", fontSize: "1.1rem", cursor: "pointer", color: "#888" }}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div style={{ borderTop: "1px solid #eee" }} />
          <div style={{ marginTop: "0.2rem" }}>
            <div style={{ padding: "0.8rem 0", borderBottom: "1px solid #eee", fontSize: "1rem" }}>
              Transform these notes into a structured summary
            </div>
            <div style={{ padding: "0.8rem 0", borderBottom: "1px solid #eee", fontSize: "1rem" }}>
              Develop learning frameworks
            </div>
            <div style={{ padding: "0.8rem 0", borderBottom: "1px solid #eee", fontSize: "1rem" }}>
              Create annotated bibliographies
            </div>
            <div style={{ padding: "0.8rem 0", borderBottom: "1px solid #eee", fontSize: "1rem" }}>
              Develop discussion prompts
            </div>
            <div style={{ padding: "0.8rem 0", fontSize: "1rem" }}>
              Design a learning challenge that pushes my creative boundaries
            </div>
          </div>
        </div>
      )}
    </div>
  );
}