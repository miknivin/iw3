import Image from "next/image"
import shape from "@/assets/img/images/features_shape.png"

const FeaturesArea = () => {
   return (
      <section className="features__area section-pb-90">
         <div className="container">
            <div className="row justify-content-center gutter-24">
               <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="features__item">
                     <div className="features__icon">
                        <i className="fas fa-globe"></i>
                     </div>
                     <div className="features__content">
                        <h2 className="title">Global Reach</h2>
                        <p>Contact us today if your company is interested in growing its footprint in new geographies. We can support you with infrastructure, procurement and logistics services all under a single window.</p>
                        <h2 className="number">01</h2>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
                  <div className="features__item">
                     <div className="features__icon">
                        <i className="fas fa-dollar-sign"></i>
                     </div>
                     <div className="features__content">
                        <h2 className="title">Transparent Pricing</h2>
                        <p>We offer best market prices for all our products and services. We maintain utmost transparency and clarity in our business relationships.</p>
                        <h2 className="number">02</h2>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="800">
                  <div className="features__item">
                     <div className="features__icon">
                        <i className="fas fa-headset"></i>
                     </div>
                     <div className="features__content">
                        <h2 className="title">24/7 Online Support</h2>
                        <p>With our back-office team available 24/7, you can be assured that your enquiries are attended to promptly, whichever location of the world you are based in.</p>
                        <h2 className="number">03</h2>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="1000">
                  <div className="features__item">
                     <div className="features__icon">
                        <i className="fas fa-plane"></i>
                     </div>
                     <div className="features__content">
                        <h2 className="title">Logistics Expertise</h2>
                        <p>We offer seamless delivery to any location in the world, including origin pick-up and destination deliveries using our vast global agent network</p>
                        <h2 className="number">04</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="features__shape">
            <Image src={shape} alt="shape" data-aos="fade-left" data-aos-delay="400" />
         </div>
      </section>
   )
}

export default FeaturesArea