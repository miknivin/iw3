"use client";
import Image from "next/image";
import Link from "next/link";

// import shape_1 from "@/assets/img/images/cta_shape.png";
import shape_2 from "@/assets/img/images/footer_shape01.png";
import shape_3 from "@/assets/img/images/footer_shape02.png";
import logo from "@/assets/img/logo/logo footer.png";

const FooterOne = () => {
  return (
    <footer className="footer__area fix">
      {/* <div className="container">
        <div className="cta__wrap fix">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta__content">
                <h3 className="title">
                  Fastest & secure way to transport <br /> anything anytime
                </h3>
              </div>
            </div>
            <div className="col-lg-5">
            </div>
          </div>
          <div className="cta__shape">
            <Image
              src={shape_1}
              alt="img"
              data-aos="fade-up-right"
              data-aos-delay="400"
            />
          </div>
        </div> */}
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
                <div className="footer__content">
                  <p>
                    iW3 provides Infrastructure, Procurement, Logistics and
                    Consulting Services in the most secure and expedited manner
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title">Our Services</h4>
                <div className="footer__link">
                  <ul className="list-wrap">
                    <li>
                      <Link href="/services-details/svc-infra-001">Infrastructure</Link>
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
                <h4 className="footer__widget-title">Useful Links</h4>
                <div className="footer__link">
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
                <h4 className="footer__widget-title">Information</h4>
                <div className="footer__info-wrap">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location-1"></i>
                      <p>
                        IW3 Infralog LLC-FZ
                        <br />
                        Meydan Free Zone, 
                        Nad Al Sheba,
                        <br />
                        P.O. Box 35195
                        <br />
                        Dubai, UAE
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
                        Mon – Fri: 8 am – 5 pm
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="copyright-text">
                <p>
                  Copyright <Link href="/">©IW3</Link> | All Right Reserved
                </p>
              </div>
            </div>
            <div className="col-md-5">
            </div>
          </div>
        </div>
      </div>
      <div className="footer__shape">
        <Image
          src={shape_2}
          alt="shape"
          data-aos="fade-down"
          data-aos-delay="400"
        />
        <Image
          src={shape_3}
          alt="shape"
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </div>
    </footer>
  );
};

export default FooterOne;