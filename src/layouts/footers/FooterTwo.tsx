import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/img/logo/logo footer.png";
import shape_1 from "@/assets/img/images/inner_footer_shape01.svg";
import shape_2 from "@/assets/img/images/inner_footer_shape02.svg";
interface propsType {
  style?: boolean;
}
const FooterTwo = ({ style }: propsType) => {
  return (
    <footer
      className={`footer__area-two fix ${style ? "footer__area-three" : ""}`}
    >
      <div className="container">
        <div className="footer__top">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="footer__widget">
                <div className="footer__logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" width={140} height={140} />
                  </Link>
                </div>
                <div className="footer__content footer__content-two">
                  <p>
                    iW3 provides Infrastructure, Procurement, Logistics and
                    Consulting Services in the most secure and expedited manner
                  </p>
                </div>
                <div className="footer__social footer__social-two">
                  <ul className="list-wrap">
                    <li>
                      <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.whatsapp.com/" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text copyright-text-two">
                  <p>
                    Copyright <Link href="/">©iw3</Link> | All Right Reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title footer__widget-title-two">
                  Our Services
                </h4>
                <div className="footer__link footer__link-two">
                  <ul className="list-wrap">
                    <li>
                      <Link href="/services-details/svc-infra-001">Infrastructure </Link>
                    </li>
                    <li>
                      <Link href="/services-details/svc-infra-002">Procurement</Link>
                    </li>
                    <li>
                      <Link href="/services-details/svc-youth-001">Logistics</Link>
                    </li>
                    <li>
                      <Link href="/services-details/svc-infra-003">Consulting</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title footer__widget-title-two">
                  Useful Links
                </h4>
                <div className="footer__link footer__link-two">
                  <ul className="list-wrap">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title footer__widget-title-two">
                  Information
                </h4>
                <div className="footer__info-wrap footer__info-wrap-two">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location-1"></i>
                      <p>
                       IW3 Infralog LLC-FZ
Meydan Free Zone, 
Nad Al Sheba, P.O. Box 35195 
                        <br /> Dubai, UAE 
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-telephone"></i>
                      <Link href="tel:+97147777222">+97147777222</Link>
                    </li>

                    <li className="flex items-start gap-3">
                      <i className="fas fa-envelope mt-2"></i>
                      <Link href="mailto:info@iw3.in">info@iw3.in</Link>
                    </li>
                    <li>
                      <i className="flaticon-time"></i>
                      <p>
                        Mon – Sat: 8 am – 6 pm, <br /> Sunday:{" "}
                        <span>CLOSED</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__shape footer__shape-two">
        <Image
          src={shape_1}
          alt="shape"
          data-aos="fade-down"
          data-aos-delay="400"
        />
        <Image
          src={shape_2}
          alt="shape"
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </div>
    </footer>
  );
};

export default FooterTwo;
