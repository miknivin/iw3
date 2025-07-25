/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';
import InjectableSvg from "@/components/common/InjectableSvg";

import author_1 from "@/assets/img/images/review1.jpeg"
import author_2 from "@/assets/img/images/review2.jpeg"
// import author_3 from "@/assets/img/images/author03.png"
// import author_4 from "@/assets/img/images/author04.png"
import shape from "@/assets/img/images/testimonial_shape.png"

const author_data: StaticImageData[] = [author_1, author_2,];

interface DataType {
   id: number;
   title: string;
   designation: string;
   desc: JSX.Element;
}

const testi_data: DataType[] = [
   {
      id: 1,
      title: "Daniel",
      designation: "",
      desc: (<>“ Your team  emergency air logistics solution saved our automotive production line from a 3-day shutdown - the precision in coordinating those charter flights with zero margin for error was remarkable.”</>),
   },
   {
      id: 2,
      title: "Jennifer",
      designation: "",
      desc: (<>“ Your heavy-lift AN-124 operations delivered our 80-ton power plant components to mountainous regions no other carrier could access - completing the energy project 3 months ahead of schedule.”</>),
   },
   // {
   //    id: 3,
   //    title: "Eleanor Pena",
   //    designation: "CEO, logistex Agency",
   //    desc: (<>“ Morem ipsum dolor sit amet, consectetur adipisc Service awing elita florai sum dolor sit amet, consectetur area recall edBorem ipsum dolor sit amet, consectetur.”</>),
   // },
   // {
   //    id: 4,
   //    title: "Floyd Miles",
   //    designation: "CEO, logistex Agency",
   //    desc: (<>“ Morem ipsum dolor sit amet, consectetur adipisc Service awing elita florai sum dolor sit amet, consectetur area recall edBorem ipsum dolor sit amet, consectetur.”</>),
   // },
];

interface PropsType {
   style?: boolean;
}

const Testimonial = ({ style }: PropsType) => {

   const [isLoop, setIsLoop] = useState(false);
   useEffect(() => {
      setIsLoop(true);
   }, []);

   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

   return (
      <section className={`${style ? "testimonial__area-two section-pt-130 section-pb-130" : "testimonial__area"}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                  <div className="testimonial__wrap fix">
                     <div className={`testimonial__icon ${style ? "testimonial__icon-two" : ""}`}>
                        <InjectableSvg src="/assets/img/icon/quote.svg" alt="" className="injectable" />
                     </div>
                     <div className="testimonial-slider-dot">
                        <Swiper
                           onSwiper={setThumbsSwiper}
                           spaceBetween={0}
                           slidesPerView={4}
                           loop={true}
                           modules={[Thumbs, Navigation, Autoplay]}
                           className="testimonial__nav"
                        >
                           {author_data.map((img, i) => (
                              <SwiperSlide key={i}>
                                 <button><Image src={img} alt="img" /></button>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                     <Swiper
                        modules={[Thumbs, Navigation, Autoplay]}
                        thumbs={{ swiper: thumbsSwiper }}
                        spaceBetween={0}
                        loop={true}
                        navigation={{
                           nextEl: ".testimonial-button-next",
                           prevEl: ".testimonial-button-prev",
                        }}
                        className="testimonial-active"
                     >
                        {testi_data.map((item) => (
                           <SwiperSlide key={item.id} className="swiper-slide">
                              <div className="testimonial__item">
                                 <div className="testimonial__info">
                                    <h2 className="name">{item.title}</h2>
                                    <span>{item.designation}</span>
                                 </div>
                                 <div className="testimonial__rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </div>
                                 <div className={`testimonial__content ${style ? "testimonial__content-two" : ""}`}>
                                    <p>{item.desc}</p>
                                 </div>
                              </div>
                           </SwiperSlide>
                        ))}
                        <div className="testimonial__nav-wrap">
                           <button className="testimonial-button-prev">
                              <i className="flaticon-left-arrow"></i>
                           </button>
                           <button className="testimonial-button-next">
                              <i className="flaticon-right-arrow"></i>
                           </button>
                        </div>
                     </Swiper>
                  </div>
               </div>
            </div>
            {!style && <div className="testimonial__shape">
               <Image src={shape} alt="img" />
            </div>}
         </div>
      </section>
   )
}

export default Testimonial
