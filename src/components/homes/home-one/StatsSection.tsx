"use client";
import React from "react";
import Count from "@/components/common/Count";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: "flaticon-planet-earth",
    number: 100,
    suffix: "+",
    label: "Clients Worldwide",
  },
  {
    icon: "flaticon-warehouse",
    number: 2,
    suffix: "M+",
    label: "sq ft of Warehousing",
  },
  {
    icon: "flaticon-package",
    number: 500,
    suffix: "M+",
    label: "Trade Value",
  },
];

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section 
      className="stats__area" 
      style={{ 
        padding: "120px 0",           // Critical: Top & Bottom Padding
        background: "#f8f9fa",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <div className="row justify-content-center g-4" ref={ref}>
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="stats__item text-center p-5 rounded-lg shadow-sm bg-white"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.8s ease ${index * 0.2}s`,
                  border: "1px solid #eee",
                  minHeight: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* Icon */}
                <div className="stats__icon mb-3">
                  <i
                    className={stat.icon}
                    style={{
                      fontSize: "2.5rem",
                      color: "#0066cc",
                    }}
                  ></i>
                </div>

                {/* Counter */}
                <h3 
                  className="stats__number mb-1" 
                  style={{ 
                    fontSize: "2.8rem", 
                    fontWeight: 700, 
                    color: "#1a1a1a",
                    lineHeight: 1
                  }}
                >
                  {inView && <Count number={stat.number} />}
                  <span style={{ fontSize: "1.8rem", color: "#1a1a1a" }}>{stat.suffix}</span>
                </h3>

                {/* Label */}
                <p 
                  className="stats__label mb-0" 
                  style={{ 
                    color: "#1a1a1a", 
                    fontWeight: 500,
                    fontSize: "1rem"
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;