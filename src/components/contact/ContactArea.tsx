import Link from "next/link"
import ContactForm from "../form/ContactForm"

const ContactArea = () => {
   return (
      <section className="contact__area section-py-120">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="contact-map contact-map-two">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.3709836015328!2d55.29741487516211!3d25.156948377736878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69270f5612c3%3A0x2d7e43041843e7d8!2sMeydan%20Free%20Zone%20-%20Business%20Setup%20In%20Dubai%2C%20UAE!5e0!3m2!1sen!2sin!4v1752074457719!5m2!1sen!2sin"
                        style={{ border: "0" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                     ></iframe>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="contact__description text-center mb-5">
                     <h2 className="title">Get in Touch</h2>
                     <p className="contact__description-text">
                        Ready to take your business to the next level? Get in touch with us today to explore how our expertise in <strong>infrastructure</strong>, <strong>logistics</strong>, <strong>procurement</strong>, and <strong>consulting</strong> can drive your success. Whether you&#39;re expanding globally, streamlining operations, or seeking transparent pricing and reliable support, our team is available 24/7 to provide tailored solutions. Contact us now to discuss your needs and discover how we can support your growth with seamless, end-to-end services.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office in Dubai</h4>
                     <p className="info-one">IW3 Infralog LLC-FZ
Meydan Free Zone, 
Nad Al Sheba, P.O. Box 35195 
  <br /> Dubai, UAE</p>
                     <p className="contact__description-text"><Link href="tel:+97147777222">+97147777222</Link></p>
                      <p className="contact__description-text"><Link href="tel:+971 56 2212979">+971 56 2212979</Link></p>
                     <p className="info-two">Monday – saturday: 8:00 am-6:00 pm<br />sunday closed</p>
                     <Link href="mailto:info@iw3.in">info@iw3.in</Link>
                  </div>
               </div>
               {/* <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office in Canada</h4>
                     <p className="info-one">16 Rue Auguste Cain, 75014 Paris, <br /> France</p>
                     <h4 className="title"><Link href="tel:0123456789">+(09) 1256 7845</Link></h4>
                     <p className="info-two">Monday – Friday: 9:00-20:00 <br /> Saturday: 11:00 – 15:00</p>
                     <Link href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</Link>
                  </div>
               </div> */}
               {/* <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office in Paris</h4>
                     <p className="info-one">925 4th Ave #2300, Seattle, WA <br /> United States of America</p>
                     <h4 className="title"><Link href="tel:0123456789">+(09) 3446 7892</Link></h4>
                     <p className="info-two">Monday – Friday: 9:00-20:00 <br /> Saturday: 11:00 – 15:00</p>
                     <Link href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</Link>
                  </div>
               </div> */}
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="contact__form-wrap">
                     <h2 className="title">Send Us Message</h2>
                     <ContactForm />
                     <p className="ajax-response mb-0"></p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactArea