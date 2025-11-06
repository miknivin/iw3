import Link from "next/link"
import ContactForm from "../form/ContactForm"

const ContactArea = () => {
   return (
      <section className="contact__area section-py-120">
         <div className="container">
            {/* Title & Description */}
            <div className="row">
               <div className="col-12">
                  <div className="contact__description text-center mb-5">
                     <h2 className="title">Let&apos;s Talk</h2>
                     <p className="contact__description-text">
                        Whether you&apos;re moving a critical shipment, sourcing specialized solutions, or looking for the right people, IW3 is here to help.
                     </p>
                  </div>
               </div>
            </div>

            {/* Office Info */}
            <div className="row mb-80">
               <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office in Dubai</h4>
                     <p className="info-one">
                        IW3 Infralog LLC-FZ
                        <br />
                        Meydan Free Zone, Nad Al Sheba,
                        <br />
                        P.O. Box 35195
                        <br />
                        Dubai, UAE
                     </p>
                     <p className="contact__description-text">
                        <Link href="tel:+97147777222">+971 4 777 7222</Link>
                     </p>
                     <p className="contact__description-text">
                        <Link href="tel:+971559353359">+971 55 935 3359</Link>
                     </p>
                     <p className="info-two">
                        Monday – Friday: 8:00 am - 5:00 pm
                     </p>
                     <Link href="mailto:sales@iw3.in" className="email-link">
                        sales@iw3.in
                     </Link>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="row">
               <div className="col-12">
                  <div className="contact__form-wrap">
                     <h2 className="title">Send Us Message</h2>
                     <ContactForm />
                     <p className="ajax-response mb-0"></p>
                  </div>
               </div>
            </div>

            {/* Google Map - Now at the bottom */}
            <div className="row mt-80">
               <div className="col-12">
                  <div className="contact-map contact-map-two">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.3709836015328!2d55.29741487516211!3d25.156948377736878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69270f5612c3%3A0x2d7e43041843e7d8!2sMeydan%20Free%20Zone%20-%20Business%20Setup%20In%20Dubai%2C%20UAE!5e0!3m2!1sen!2sin!4v1752074457719!5m2!1sen!2sin"
                        style={{ border: 0, width: "100%", height: "450px" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="IW3 Dubai Office Location"
                     ></iframe>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactArea