"use client";
import React from 'react';
import Image from "next/image";

// Importing images from public/assets via the @/assets alias
import slide1 from "@/assets/img/images/slide1 1.jpg";
import slide2 from "@/assets/img/images/slide 2.jpg";

const AboutImages = () => {
   return (
      <section className="about-images-area section-pb-120">
         <div className="container">
            <div className="row justify-content-center gy-24 gutter-24">
               <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="about-image-card" style={{ 
                     borderRadius: '20px', 
                     overflow: 'hidden', 
                     boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                     transition: 'transform 0.3s ease',
                     height: '100%'
                  }}>
                     <Image 
                        src={slide1} 
                        alt="Infrastructure" 
                        className="img-fluid w-100 h-100" 
                        style={{ objectFit: 'cover', minHeight: '400px' }}
                        priority
                     />
                  </div>
               </div>
               <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="about-image-card" style={{ 
                     borderRadius: '20px', 
                     overflow: 'hidden', 
                     boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                     transition: 'transform 0.3s ease',
                     height: '100%'
                  }}>
                     <Image 
                        src={slide2} 
                        alt="Investment" 
                        className="img-fluid w-100 h-100" 
                        style={{ objectFit: 'cover', minHeight: '400px' }}
                     />
                  </div>
               </div>
            </div>
         </div>
         <style jsx>{`
            .about-image-card:hover {
               transform: translateY(-10px);
            }
            @media (max-width: 767px) {
               .col-md-6:not(:last-child) {
                  margin-bottom: 24px;
               }
            }
         `}</style>
      </section>
   );
};

export default AboutImages;
