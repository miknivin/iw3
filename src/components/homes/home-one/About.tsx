import Image from "next/image"
import Link from "next/link"
import InjectableSvg from "@/components/common/InjectableSvg"

import about_img1 from "@/assets/img/images/about_img01.png"
import about_img2 from "@/assets/img/images/about_img02.png"
import about_img3 from "@/assets/img/images/about_img03.png"
import shape_1 from "@/assets/img/images/about_shape.png"

const About = () => {
   return (
     <section className="about__area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="about__img">
                <Image src={about_img1} alt="img" />
                <Image src={about_img2} alt="img" data-aos="fade-right" data-aos-delay="200" />
                <Image src={about_img3} alt="img" data-aos="fade-down" data-aos-delay="400" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__content">
                <div className="section__title mb-15">
                  <span className="sub-title">End-to-End Logistics Solutions</span>
                  <h2 className="title">Optimizing Your Supply Chain Efficiency</h2>
                </div>
                <p>Our comprehensive logistics services ensure seamless transportation and warehousing solutions tailored to your business requirements, delivering reliability and cost-effectiveness across all stages of your supply chain.</p>
                <div className="about__content-bottom">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="about__list-box">
                        <ul className="list-wrap">
                          <li><i className="flaticon-check"></i>Reliable </li>
                          <li><i className="flaticon-check"></i>Experienced</li>
                          <li><i className="flaticon-check"></i>Professional</li>
                          <li><i className="flaticon-check"></i>Speed </li>
                        </ul>
                        <Link href="/services" className="btn">Get in Touch <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" /></Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="logistics__features">
                        <div className="logistics__feature-item">
                          <i className="flaticon-shipping"></i>
                          <h4>100+ Clients Worldwide</h4>
                          <p>Trusted by businesses across multiple industries</p>
                        </div>
                        <div className="logistics__feature-item">
                          <i className="flaticon-warehouse"></i>
                          <h4>Warehousing</h4>
                          <p>2M+ sq ft of secure storage facilities worldwide</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shape">
                  <Image src={shape_1} alt="shape" data-aos="fade-left" data-aos-delay="1000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   )
}

export default About 