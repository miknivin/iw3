'use client'; // Keep as client only if using hover, otherwise move button to separate client component

import Image from "next/image";
import choose_thumb1 from "@/assets/img/images/choose_img01.jpg";
import InjectableSvg from "@/components/common/InjectableSvg";
import Link from "next/link";
import { useState } from "react";

// Optional: Move to separate file if you want server component
const ChooseButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href="/about"
      className="btn d-inline-flex align-items-center"
      style={{
        backgroundColor: hover ? "#2aa232" : "#001b90",
        color: "#fff",
        padding: "12px 28px",
        borderRadius: "8px",
        fontWeight: 600,
        gap: "8px",
        textDecoration: "none",
        transition: "background-color 0.3s ease",
        marginTop: "20px",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      To know more About Us
      <span style={{ width: "16px", height: "16px", display: "inline-flex" }}>
        <InjectableSvg
          src="/assets/img/icon/right_arrow.svg"
          alt=""
          className="injectable"
        />
      </span>
    </Link>
  );
};

export default function Choose() {
  return (
    <section
      className="choose__area"
      style={{
        padding: "100px 0",           // Equal top & bottom padding
        background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row align-items-center justify-content-center g-5">
          {/* Left: Image */}
          <div className="col-lg-5 col-md-10">
            <div
              className="choose__img"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Image
                src={choose_thumb1}
                alt="IW3 Logistics Solutions"
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  width: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-7">
            <div className="choose__content">
              <div className="section__title mb-4">
                <span
                  className="sub-title d-block mb-2"
                  style={{ color: "#001b90", fontWeight: 600, fontSize: "15px" }}
                >
                  Why Choose IW3
                </span>
                <h2
                  className="title"
                  style={{
                    color: "#1a1a1a",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  Seamless Solutions Worldwide
                </h2>
              </div>

              <p
                className="choose__intro-text mb-4"
                style={{
                  color: "#444",
                  fontSize: "16px",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                We aren’t just another logistics or procurement firm. Clients trust us because:
              </p>

              {/* Bullet Points */}
              <ul
                className="choose__bullet-list list-unstyled"
                style={{
                  padding: 0,
                  margin: "0 0 24px 0",
                  color: "#333",
                }}
              >
                {[
                  "Precision: We handle complex requirements with absolute accuracy",
                  "Networks: Our reach includes trusted operators, suppliers, and talent pools worldwide",
                  "Discretion: Sensitive projects require confidentiality at every step",
                  "Flexibility: Non-scheduled air cargo, niche procurement, or urgent consulting—we adapt quickly",
                ].map((item, i) => {
                  const [label, ...rest] = item.split(": ");
                  return (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "12px",
                        fontSize: "15px",
                      }}
                    >
                      <span
                        style={{
                          color: "#0066cc",
                          fontWeight: "bold",
                          marginRight: "10px",
                          fontSize: "18px",
                          lineHeight: 1,
                        }}
                      >
                        •
                      </span>
                      <span>
                        <strong style={{ color: "#1a1a1a" }}>{label}:</strong>{" "}
                        {rest.join(": ")}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Button with spacing */}
              <div style={{ marginTop: "10px" }}>
                <ChooseButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}