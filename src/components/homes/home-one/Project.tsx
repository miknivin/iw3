"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import InjectableSvg from "@/components/common/InjectableSvg";
import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
import { Pagination } from 'swiper/modules';

import project_1 from "@/assets/img/project/project_img01.jpg"
import project_2 from "@/assets/img/project/project_img02.jpg"
import project_3 from "@/assets/img/project/project_img03.jpg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   tag: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      img: project_1,
      title: "Field Camp Supplies by Air",

      tag: "Our team has past experience in providing dedicated aircraft to transport foodstuff and general camp supplies to multiple  relief camps across several countries. Goods were transported using multiple aircraft types like IL76, AN12, B747 and AN124 aircraft. Several hundred flights were operated over the years to support several relief missions in several geographies including Middle East, Asia and Africa"
   },
   {
      id: 2,
      img: project_2,
      title: "Procurement of Relief Goods",

      tag: "We have previous experience in procuring goods and commodities at short notice to support relief agencies in Asia and Africa. Our capabilities are mainly in commodities such as rice, wheat, spices, milk, fruits, vegetables, hygiene products, tents and garments. Very soon, we would be officially registered with several UN and similar global agencies to support them with their procurement needs"
   },
   {
      id: 3,
      img: project_3,
      title: "Emergency Logistics",
      tag: "Our team has handled emergency logistics in the past. When a large automotive manufacturer in India required to import over 200 metric tons of spare parts for their factory in India and the goods were required within 3 days, the only option was to operate 2 full charter aircrafts to enable the goods to reach the factory on time to ensure no stoppage of the production line"
   },
   {
      id: 4,
      img: project_2,
      title: "Humanitarian Air Bridge",
      tag: "During the COVID-19 pandemic, we established an air bridge operation to transport critical medical supplies including vaccines, PPE kits, and oxygen concentrators to remote areas across South Asia. Our team coordinated with 12 different governments and NGOs to deliver over 500 tons of medical cargo using a fleet of cargo aircraft and helicopters, ensuring timely delivery to regions with limited infrastructure access."
   },
];

// slider setting
const setting = {
   slidesPerView: 4,
   loop: true,
   spaceBetween: 24,
   observer: true,
   observeParents: true,
   autoplay: false,
   centeredSlides: true,
   breakpoints: {
      '1500': {
         slidesPerView: 3,
      },
      '1200': {
         slidesPerView: 3,
      },
      '992': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 3,
      },
      '576': {
         slidesPerView: 1.3,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   pagination: {
      el: '.project__nav',
      clickable: true,
   },
};

const Project = () => {
   return (
      <section className="project__area project__bg" style={{ backgroundImage: `url(/assets/img/bg/vector_bg02.svg)` }}>
         {/* ... (keep your existing header markup) ... */}

         <div className="container-fluid p-0 fix">
            <div className="project__item-wrap">
               <Swiper {...setting} modules={[Pagination]} className="project-active">
                  {project_data.map((item) => (
                     <SwiperSlide key={item.id} className="swiper-slide">
                        <div className="project__item">
                           <div className="project__thumb" style={{ marginBottom: '15px' }}>

                              <Image
                                 src={item.img}
                                 alt="img"
                                 width={400}
                                 height={300}
                                 style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '8px 8px 0 0'
                                 }}
                              />

                           </div>
                           <div className="project__content" style={{
                              background: '#0a1a3a', // Dark blue color
                              padding: '20px',
                              borderRadius: '0 0 8px 8px',
                              marginTop: '10px', // Added space between image and content
                              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                           }}>
                              <div className="content">
                                 <h2 className="title" style={{ color: '#fff' }}>
                                    <span style={{ color: 'inherit' }}>{item.title}</span>
                                 </h2>
                                 <p style={{
                                    color: 'rgba(255,255,255,0.8)',
                                    margin: '10px 0 0 0',
                                    lineHeight: '1.5',
                                    fontSize: '14px'
                                 }}>{item.tag}</p>
                              </div>
                              <div className="right-arrow" style={{ marginTop: '15px' }}>

                                 <span style={{ filter: 'brightness(0) invert(1)' }}>
                                    <InjectableSvg
                                       src="/assets/img/icon/right_arrow.svg"
                                       alt=""
                                    />
                                 </span>

                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
                  <div className="project__nav"></div>
               </Swiper>
            </div>
         </div>

         <style jsx global>{`
            .project__item {
               border-radius: 8px;
               overflow: hidden;
               box-shadow: 0 4px 15px rgba(0,0,0,0.1);
               background: #fff;
            }
            
            @media (max-width: 767.98px) {
    .project__thumb img {
               height: 300px; 
               min-height: 62vh;
            }
            .project__thumb {
               position: relative;
               overflow: hidden;
            }
            
            .right-arrow svg {
               width: 24px;
               height: 24px;
            }
            
            @media (max-width: 768px) {
               .project__content {
                  padding: 15px !important;
                  min-height: 60vh;
               }
            }
         `}</style>

      </section>
   )
}
export default Project
