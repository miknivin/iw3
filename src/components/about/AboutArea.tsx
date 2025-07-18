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
                        <h2 className="title">TRUSTED
PARTNER</h2>
                     </div>
                     <p >iW3 began its journey with a goal to democratize industrial warehousing and logistics infrastructure. Having worked for several decades in the logistics, aviation and infrastructure domains, our team is of the firm belief that robust logistics infrastructure is a dire necessity for developing countries to scale up their economic outputs</p>
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
                     <p>While designing and hustling to launch our digital infrastructure platform, we realized that we would be better positioned to tap interesting opportunities that presented itself in closely related areas of multi-modal logistics, procurement and advisory. Since then, we have been active in several logistics projects including providing dedicated cargo aircrafts for international transportation to consulting for potential mergers and acquisitions in the logistics domain across geographies.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutArea
