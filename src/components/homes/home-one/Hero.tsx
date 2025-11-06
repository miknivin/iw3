import InjectableSvg from "@/components/common/InjectableSvg"
import Image from "next/image"
import Link from "next/link"

import banner_img from "@/assets/img/banner/iw3.6.png"
import shape_1 from "@/assets/img/banner/banner_shape.png"
import shape_2 from "@/assets/img/banner/banner_iCONT green.png"

const Hero = () => {
   return (
      <section
         className="banner__area banner__bg"
         style={{ backgroundImage: `url(/assets/img/banner/banner_bg.jpg)` }}
      >
         <div className="container">
            <div className="row align-items-end">
               <div className="col-lg-6">
                  <div className="banner__content">
                     <span
                        className="sub-title"
                        data-aos="fade-up"
                        data-aos-delay="200"
                     >
                        Endless Opportunities
                     </span>
                     <h5
                        className="title"
                        style={{ fontSize: '2.2rem' }}
                        data-aos="fade-up"
                        data-aos-delay="400"
                     >
                        <span>Engineering Reliability.</span> <span>Delivering Scale.</span> <span>Building the Future of Logistics and Infrastructure.</span>
                     </h5>

                     <div className="logistics__features">
                        <div className="logistics__feature-item" style={{ textAlign: 'justify', wordSpacing: 'normal' }}>
                           <h6 style={{ 
                              lineHeight: '1.5', 
                              marginBottom: '1rem',
                              wordSpacing: 'normal',
                              letterSpacing: 'normal'
                           }}>
                              <strong>iW3 operates at the intersection of logistics, procurement, and strategic consulting</strong> — enabling projects that demand precision, scale, and trust. We work with businesses, investors, and government organizations to build infrastructure, move goods, and deliver solutions where reliability matters most.
                           </h6>
                        </div>
                     </div>

                     <p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        style={{ 
                           lineHeight: '1.6',
                           textAlign: 'justify',
                           wordSpacing: 'normal',
                           letterSpacing: 'normal'
                        }}
                     >
                        Our global network spans partners, carriers, and agents across key trade routes, backed by deep domain expertise and a commitment to execution excellence. Every service we provide — from air cargo deployment to complex procurement — is designed to <strong>simplify what&apos;s complicated</strong> and make it work efficiently.
                     </p>

                     
                     <div
                        className="d-flex gap-3 flex-wrap"
                        data-aos="fade-up"
                        data-aos-delay="800"
                     >
                        <Link href="/services" className="btn">
                           Explore Our Services{' '}
                           <InjectableSvg
                              src="/assets/img/icon/right_arrow.svg"
                              alt=""
                              className="injectable"
                           />
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="col-lg-6">
                  <div className="banner__img">
                     <Image
                        src={banner_img}
                        alt="img"
                        data-aos="fade-left"
                        data-aos-delay="800"
                     />
                  </div>
               </div>
            </div>
         </div>

         <div className="banner__shape-wrap">
            <Image src={shape_1} alt="shape" className="rotateme" />
            <Image
               src={shape_2}
               alt="img"
               className="wow bounceInDown"
               data-wow-delay=".3s"
            />
         </div>
      </section>
   );
};

export default Hero
