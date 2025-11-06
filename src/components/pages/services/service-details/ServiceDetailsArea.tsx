"use client";
import VideoPopup from "@/modals/VideoPopup";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import serviceData from "@/data/ServiceData";

const ServiceDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Get the service ID from the pathname
  const pathname = usePathname();
  let serviceId: string;
  
  // Handle both old and new route formats
  if (pathname.includes('/services-details/')) {
    // Old format: /services-details/[id]
    serviceId = pathname.split('/services-details/')[1];
  } else {
    // New format: /[serviceName]
    serviceId = pathname.replace('/', '');
  }
  
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
              <div className="col-12">
                <div className="services__details-thumb">
                  <Image src={service.mainImage} alt={service.mainTitle} />
                </div>
                <div className="services__details-content">
                  <h2 className="title">{service.mainTitle}</h2>
                  <p>{service.mainDescription}</p>
                  
                  <div className="services__details-content-inner">
                    <div className="row">
                      <div className="col-12">
                        <h2 className="title-two">{service.subTitle}</h2>
                        <p>{service.subDescription}</p>
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
                  
                  {/* CTA Section */}
                  {service.cta && (
                    <div className="services__details-cta">
                      <div className="cta__wrapper" style={{
                        background: '#001b90',
                        padding: '40px 20px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        marginTop: '40px'
                      }}>
                        <h3 style={{
                          color: 'white',
                          fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                          marginBottom: '20px',
                          fontWeight: '600',
                          lineHeight: '1.3'
                        }}>
                          Ready to Get Started?
                        </h3>
                        <a 
                          href="/contact" 
                          className="btn btn-white"
                          style={{
                            background: 'white',
                            color: '#0066cc',
                            padding: 'clamp(10px, 3vw, 12px) clamp(20px, 6vw, 30px)',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            maxWidth: '100%',
                            wordBreak: 'break-word',
                            textAlign: 'center'
                          }}
                        >
                          {service.cta}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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