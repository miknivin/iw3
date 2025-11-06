"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import achieve_img from "@/assets/img/banner/banner_iCONT.png";
import shape from "@/assets/img/images/achieved_shape.png";

const Achieved: React.FC = () => {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.75,
   });

   return (
      <section className="achieved__area fix">
         <div className="container">
            <div className="row justify-content-center">
               {/* Image - Unchanged */}
               <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                  <div className="achieved__img">
                     <Image
                        src={achieve_img}
                        alt="IW3 Container Logistics"
                        className="wow bounceInDown"
                        data-wow-delay=".3s"
                     />
                  </div>
               </div>

               {/* Content - Enhanced Text Size & Weight */}
               <div className="col-lg-6">
                  <div className="achieved__content">
                     <div className="section__title mb-30">
                        <span 
                           className="sub-title" 
                           style={{ 
                              fontSize: '2rem',     // Larger
                              fontWeight: '800',    // Bolder
                              letterSpacing: '0.5px'
                           }}
                        >
                           Who We Work With
                        </span>
                     </div>

                     <p style={{
                        fontSize: '1.25rem',     // Larger paragraph text
                        fontWeight: '600',       // Semi-bold
                        lineHeight: '1.7',
                        color: '#222',
                        marginBottom: '24px'
                     }}>
                        We serve organizations where timing, scale, and confidentiality define success. Our work spans:
                     </p>

                     {/* Bullet Points - Larger & Bolder */}
                     <div className="progress__wrap" ref={ref}>
                        <ul style={{ 
                           paddingLeft: "28px", 
                           margin: "20px 0", 
                           color: "#222" 
                        }}>
                           {[
                              "Infrastructure and development projects",
                              "Energy and natural resources",
                              "Government and public-sector projects",
                              "Strategic industry partnerships",
                              "International trade and private enterprises"
                           ].map((item, i) => (
                              <li 
                                 key={i} 
                                 style={{ 
                                    marginBottom: "12px", 
                                    fontSize: "1.1rem",           // Larger bullet text
                                    fontWeight: "700",            // Bold
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? "translateY( staggered)" : "translateY(15px)",
                                    transition: `all 0.7s ease ${i * 0.15}s`,
                                    lineHeight: '1.6'
                                 }}
                              >
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Shape - Unchanged */}
         <div className="achieved__shape">
            <Image src={shape} alt="shape" />
         </div>
      </section>
   );
};

export default Achieved;