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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"
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
                        Ready to take your business to the next level? Get in touch with us today to explore how our expertise in <strong>infrastructure</strong>, <strong>logistics</strong>, <strong>procurement</strong>, and <strong>consulting</strong> can drive your success. Whether you're expanding globally, streamlining operations, or seeking transparent pricing and reliable support, our team is available 24/7 to provide tailored solutions. Contact us now to discuss your needs and discover how we can support your growth with seamless, end-to-end services.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office in New York</h4>
                     <p className="info-one">#504, Riddhi Tower, Film City Road Goregaon East
Mumbai - 400097,  <br /> India</p>
                     <h4 className="title"><Link href="tel:0123456789">+(09) 3456 7890</Link></h4>
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