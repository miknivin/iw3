import Image from "next/image";
import Link from "next/link";
import InjectableSvg from "@/components/common/InjectableSvg";
import service_data from "@/data/ServicesData";

import shape_1 from "@/assets/img/services/services_shape01.png";
import shape_2 from "@/assets/img/services/services_shape02.png";

const Service = () => {
   return (
      <section className="services__area fix">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-8">
                  <div className="section__title mb-40">
                     <span className="sub-title">OUR SERVICES</span>
                     <h2 className="title">We Have You Covered</h2>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="view-all-btn text-end mb-40">
                     <Link href="/services" className="btn btn-two">
                        All Services <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" />
                     </Link>
                  </div>
               </div>
            </div>

            <div className="row gutter-24 justify-content-center">
               {service_data
                  .filter((items) => items.page === "home_1")
                  .map((item) => (
                     <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6 d-flex">
                        <div className="services__item h-100 d-flex flex-column">
                           <div className="services__thumb-wrap">
                              <div className="services__thumb">
                                 <Image
                                    src={item.img ?? "/assets/img/default_service.jpg"}
                                    alt={item.title}
                                    width={370}
                                    height={250}
                                    style={{ objectFit: "cover" }}
                                 />
                                 <Link
                                    href={`/${item.id}`}
                                    className="btn btn-two border-btn"
                                 >
                                    Read More
                                    <InjectableSvg
                                       src="/assets/img/icon/right_arrow.svg"
                                       alt=""
                                       className="injectable"
                                    />
                                 </Link>
                              </div>
                              <div className="services__icon">
                                 <Image
                                    src={item.icon}
                                    alt={`${item.title} icon`}
                                    width={30}
                                    height={30}
                                    style={{ objectFit: "contain" }}
                                 />
                              </div>
                           </div>

                           <div className="services__content flex-grow-1 d-flex flex-column">
                              <h3 className="title">
                                 <Link href={`/${item.id}`}>{item.title}</Link>
                              </h3>

                              {/* Bullet Points List */}
                              <ul className="services__desc-list list-unstyled mb-0 flex-grow-1">
                                 {(Array.isArray(item.desc) ? item.desc : [item.desc]).map((point, index) => (
                                    <li key={index} className="d-flex align-items-start">
                                       <span className="bullet-dot me-2">•</span>
                                       <span>{point}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  ))}
            </div>
         </div>

         <div className="services__shape-wrap">
            <Image src={shape_1} alt="shape" className="rotateme" />
            <Image src={shape_2} alt="shape" data-aos="fade-right" data-aos-delay="400" />
         </div>
      </section>
   );
};

export default Service;