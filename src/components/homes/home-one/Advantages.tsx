"use client";
import { useInView } from "react-intersection-observer";

const Advantages: React.FC = () => {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
   });

   const advantages = [
      {
         title: "Scalability and Flexibility",
         desc: "Whether you’re a small business, multinational corporation, or government body, our services are designed to scale and adapt. We accommodate fluctuations in demand, seasonal cycles, and market dynamics.",
      },
      {
         title: "Customer Support",
         desc: "Our dedicated team is always available to resolve queries, provide updates, and ensure smooth execution. We value trust, communication, and superior service.",
      },
      {
         title: "Cost Savings",
         desc: "We identify opportunities to optimize transportation, consolidate shipments, and manage inventory efficiently to reduce expenses and improve cost control.",
      },
      {
         title: "Global Network",
         desc: "With a worldwide network of partners, carriers, and agents, we ensure reliable procurement and logistics execution at competitive rates with consistent delivery performance.",
      },
   ];

   return (
      <section className="advantages__area pt-100 pb-80">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10 col-xl-8">
                  <div className="section__title text-center mb-50">
                     <span
                        className="sub-title"
                        style={{
                           fontSize: "2rem",
                           fontWeight: "800",
                           letterSpacing: "0.5px",
                           color: "#001b90",
                        }}
                     >
                        Our Advantages
                     </span>
                  </div>
               </div>
            </div>

            <div className="row" ref={ref}>
               {advantages.map((item, i) => (
                  <div key={i} className="col-lg-6 col-md-6">
                     <div
                        className="advantage__item"
                        style={{
                           marginBottom: "30px",
                           padding: "24px",
                           backgroundColor: "#f8f9fa",
                           borderRadius: "12px",
                           boxShadow: inView ? "0 10px 30px rgba(0,0,0,0.05)" : "none",
                           opacity: inView ? 1 : 0,
                           transform: inView ? "translateY(0)" : "translateY(20px)",
                           transition: `all 0.7s ease ${i * 0.15}s`,
                           border: "1px solid #eee",
                        }}
                     >
                        <h4
                           style={{
                              fontSize: "1.35rem",
                              fontWeight: "700",
                              color: "#1a1a1a",
                              marginBottom: "12px",
                           }}
                        >
                           {item.title}
                        </h4>
                        <p
                           style={{
                              fontSize: "1.05rem",
                              fontWeight: "500",
                              color: "#444",
                              lineHeight: "1.7",
                              margin: 0,
                           }}
                        >
                           {item.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Advantages;