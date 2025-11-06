import Image from 'next/image'
import about_1 from "@/assets/img/images/inner_about_img03.jpg"
import about_2 from "@/assets/img/images/inner_about_img02.jpg"

const AboutArea = () => {
   return (
      <section className="about__area-two section-py-120">
         <div className="container">
            <div className="row align-items-center justify-content-center gutter-24">
               <div className="col-lg-6 col-md-9">
                  <div className="about__img-two">
                     <Image src={about_1} alt="img" data-aos="fade-right" data-aos-delay="400" />
                     <Image src={about_2} alt="img" data-aos="fade-up" data-aos-delay="600" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about__content-two">
                     <div className="section__title section__title-two mb-20">
                        <span className="sub-title">About us</span>
                        <h2 className="title">WHO WE ARE</h2>
                     </div>
                     <p >IW3 is a specialized logistics and consulting partner operating across industries that demand more than standard solutions. We work at the intersection of transportation, talent, and procurement, connecting businesses with critical resources and expertise.</p>
                     <div className="about__content-inner">
                        <div className="about__list-box about__list-box-two">
                           <ul className="list-wrap">
                              <li><i className="flaticon-check"></i> Reliable </li>
                              <li><i className="flaticon-check"></i>Experienced</li>
                              <li><i className="flaticon-check"></i>Professional </li>
                              <li><i className="flaticon-check"></i>Speed </li>
                           </ul>
                        </div>
                        <div className="about__clients-box">
                           <span>Flexible, Improved & Accelerated Solutions!</span>
                           <div className="counter__item">
                              <div className="counter__icon">
                                 <i className="flaticon-planet-earth"></i>
                              </div>
                              <div className="counter__content">
                                 <h2 className="count"><span className="counter-number">100</span></h2>
                                 <p>Clients Worldwide</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <p>Our team combines deep operational knowledge with global reach. Whether it’s structuring a multimodal transport plan, securing niche products, or finding the right leaders for logistics and product roles—we deliver with trust and discretion.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutArea
