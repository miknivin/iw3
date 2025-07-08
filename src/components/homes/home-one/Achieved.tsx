"use client"
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import achieve_img from "@/assets/img/banner/banner_iCONT.png/";
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
               <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                  <div className="achieved__img">
                     <Image
                        src={achieve_img}
                        alt="img"
                        className="wow bounceInDown"
                        data-wow-delay=".3s"
                     />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="achieved__content">
                     <div className="section__title mb-30">
                      <span className="sub-title" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
  On Time Delivery
</span>
                        {/* <h2 className="title">
                          team will ensure that your delivery timelines are always met seamlessly, whether it is installation or transportation
                        </h2> */}
                     </div>
                     <p>
                      Our experienced team will ensure that your delivery timelines are always met seamlessly, whether it is installation or transportation
                     </p>
                     
                     <div className="progress__wrap" ref={ref}>
                        <div className="progress__item">
                           <div className="progress__item-top">
                              <h3 className="progress__title">Successful Delivery</h3>
                              <div className="progress-value">
                                 <span className="counter-number">82</span>%
                              </div>
                           </div>
                           <div className="progress">
                              <div
                                 className="progress-bar"
                                 style={{
                                    width: "82%",
                                    animation: inView ? "animate-positive 1.8s" : "none",
                                    opacity: inView ? "1" : "0",
                                 }}
                              ></div>
                           </div>
                        </div>
                        <div className="progress__item">
                           <div className="progress__item-top">
                              <h3 className="progress__title">Happy Customers</h3>
                              <div className="progress-value">
                                 <span className="counter-number">90</span>%
                              </div>
                           </div>
                           <div className="progress">
                              <div
                                 className="progress-bar"
                                 style={{
                                    width: "90%",
                                    animation: inView ? "animate-positive 1.8s" : "none",
                                    opacity: inView ? "1" : "0",
                                 }}
                              ></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="achieved__shape">
            <Image src={shape} alt="shape" />
         </div>
      </section>
   );
};

export default Achieved;
