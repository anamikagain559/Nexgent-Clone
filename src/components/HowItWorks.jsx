import React, { useState } from "react";

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section style={{ padding: "100px 20px", background: "#f9fafb" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid #e5e7eb",
            padding: "6px 14px",
            borderRadius: "999px",
            fontSize: "14px",
            marginBottom: "16px"
          }}>
            <img src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/6999434a4a9a3fe7ea1ade4f_Frame%20(24).webp" width={16} />
            How Its Work
          </div>

          <h2 style={{ fontSize: "40px", fontWeight: "600" }}>
            How it <span style={{ fontStyle: "italic" }}>Works</span>
          </h2>

          <p style={{ color: "#6b7280", marginTop: "10px" }}>
            Easily request designs, collaborate with our team, and get high-quality work fast.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px"
        }}>

          {/* Card 1 */}
          <div style={cardStyle}>
            <h3>Create Tasks</h3>
            <p style={subText}>
              Add tasks, set deadlines, and manage work in one place.
            </p>

            <img
              src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699d2f94cfa2f58c842bd86a_ae50f951d29f3ce16c2bd7c693e4a7ef_Frame%2012%20%281%29.svg"
              style={{
                width: "100%",
                marginTop: "20px",
                transition: "0.4s",
                transform: hoveredIndex === 0 ? "translateY(-15px)" : "none"
              }}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            />

            <img src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699957f9d6e9321e84f2617a_Rectangle%2068.webp" style={shadow} />
          </div>

          {/* Card 2 */}
          <div style={cardStyle}>
            <h3>Organize & Prioritize</h3>
            <p style={subText}>
              Use boards, lists, and filters to stay focused and work efficiently.
            </p>

            <img
              src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/69ad1020f6c11e652496f76b_Frame%201000005003.webp"
              style={{
                width: "100%",
                marginTop: "20px",
                transition: "0.4s",
                transform: hoveredIndex === 1 ? "translateX(15px)" : "none"
              }}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            />

            <img src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699957f9d6e9321e84f2617a_Rectangle%2068.webp" style={shadow} />
          </div>

          {/* Card 3 */}
          <div style={cardStyle}>
            <h3>Track & Complete</h3>
            <p style={subText}>
              Monitor progress and finish work on time by tracking goals.
            </p>

            <div style={{ position: "relative", marginTop: "20px", height: "160px" }}>

              {/* Research (Top Card) */}
              <img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699aaa2c590786023ef47308_Frame%205.webp"
                style={{
                  width: "85%",
                  position: "absolute",
                  top: "0",
                  left: "10%",
                  zIndex: 2,
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  transition: "0.5s ease",
                  transform: hoveredIndex === 2
                    ? "translateX(20px) translateY(-10px)" // 👉 left ➝ right
                    : "translateX(0)"
                }}
              />

              {/* Web Design (Bottom Card) */}
              <img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699aaa9e398643351f276d33_Frame%204.webp"
                style={{
                  width: "100%",
                  position: "absolute",
                  top: "40px",
                  left: "0",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  transition: "0.5s ease",
                  transform: hoveredIndex === 2
                    ? "translateX(-20px)" // 👉 right ➝ left
                    : "translateX(0)"
                }}
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
              />

            </div>

            <img src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699957f9d6e9321e84f2617a_Rectangle%2068.webp" style={shadow} />
          </div>

        </div>
      </div>
    </section>
  );
};

/* Styles */
const cardStyle = {
  background: "#fff",
  borderRadius: "24px",
  padding: "24px",
  position: "relative",
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  overflow: "hidden",
  height: "390px"
};

const subText = {
  color: "#6b7280",
  marginTop: "10px"
};

const shadow = {
  position: "absolute",
  bottom: "-10px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "70%",
  opacity: 1,
  filter: "blur(2px)"
};

export default HowItWorks;