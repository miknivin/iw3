"use client";
import VideoPopup from "@/modals/VideoPopup";
import { useState } from "react";
import Image from "next/image";
import ServiceSidebar from "./ServiceSidebar";
import { useInView } from "react-intersection-observer";

import { useParams } from "next/navigation";
import serviceData from "@/data/ServiceData";

const ServiceDetailsArea = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Get the ID from the URL
  const params = useParams();
  const serviceId = params.id;
  console.log("Service ID:", serviceId);
  // Find the service with matching ID
  const service = serviceData.find(item => item.id === serviceId);
  
  // If service not found, return null or a 404 component
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <section className="services__details-area section-py-130">
        <div className="container">
          <div className="services__details-inner">
            <div className="row">
              <div className="col-70 order-0 order-lg-2">
                <div className="services__details-thumb">
                  <Image src={service.mainImage} alt={service.mainTitle} />
                </div>
                <div className="services__details-content">
                  <h2 className="title">{service.mainTitle}</h2>
                  <p>{service.mainDescription}</p>
                  
                  <div className="services__details-content-inner">
                    <div className="row align-items-end">
                      <div className="col-md-6">
                        <h2 className="title-two">{service.subTitle}</h2>
                        <p>{service.subDescription}</p>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="progress__wrap progress__wrap-three"
                          ref={ref}
                        >
                          {service.progressMetrics.map((metric, index) => (
                            <div key={index} className="progress__item progress__item-three">
                              <div className="progress__item-top">
                                <h3 className="progress__title">{metric.title}</h3>
                                <div className="progress-value">
                                  <span className="counter-number">{metric.value}</span>%
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${metric.value}%`,
                                    animation: inView
                                      ? "animate-positive 1.8s"
                                      : "none",
                                    opacity: inView ? "1" : "0",
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p>{service.additionalDescription}</p>
                  
                  <div className="services__details-content-inner-two">
                    <div className="row gutter-24">
                      <div className="col-44">
                        <div className="services__details-inner-img">
                          <Image src={service.secondaryImage} alt={service.mainTitle} />
                          {/* <a
                            onClick={() => setIsVideoOpen(true)}
                            style={{ cursor: "pointer" }}
                            className="play-btn popup-video"
                          >
                            <i className="fas fa-play"></i>
                          </a> */}
                        </div>
                      </div>
                      <div className="col-56">
                        <h2 className="title-two">{service.benefitsTitle}</h2>
                        <p>{service.benefitsDescription}</p>
                        <div className="about__list-box about__list-box-two about__list-box-three">
                          <ul className="list-wrap">
                            {service.benefitsList.map((benefit, index) => (
                              <li key={index}>
                                <i className="flaticon-check"></i>{benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="services__details-benefit">
                    <h2 className="title-two">Service Key Benefits</h2>
                    <div className="faq__wrap">
                      <div className="accordion" id="accordionExample">
                        {service.faqs.map((faq, index) => (
                          <div key={index} className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className={`accordion-button${index === 0 ? '' : ' collapsed'}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse${index}`}
                              >
                                {faq.question}
                              </button>
                            </h2>
                            <div
                              id={`collapse${index}`}
                              className={`accordion-collapse collapse${index === 0 ? ' show' : ''}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
      
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
    </>
  );
};

export default ServiceDetailsArea;