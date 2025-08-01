
import InjectableSvg from "@/components/common/InjectableSvg";
import service_data from "@/data/ServicesData";
import Image from "next/image";
import Link from "next/link";

const ServiceArea = () => {
  return (
    <section className="services__area-five grey-bg section-pt-120 section-pb-90">
      <div className="container">
        <div className="row gutter-24 justify-content-center">
          {service_data
            .filter((item) => item.page === "home_1") // Filter for home page services
            .map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6 d-flex"> {/* 4 items per row on large screens */}
                <div className="services__item-three h-100 d-flex flex-column">
                  <div className="services__thumb-three">
                    <Link href={`/services-details/${item.id}`}>
                      <Image 
                        src={item.img ?? "/assets/img/default_service.jpg"} 
                        alt={item.title} 
                        width={370}  // Set appropriate dimensions
                        height={250}
                      />
                    </Link>
                    <Link 
                      href={`/services-details/${item.id}`} 
                      className="btn border-btn"
                    >
                      Read More 
                      <InjectableSvg 
                        src="/assets/img/icon/right_arrow.svg" 
                        alt="arrow" 
                        className="injectable" 
                      />
                    </Link>
                  </div>
                  <div className="services__content-three flex-grow-1 d-flex flex-column">
                    <div className="services__icon-three">
                      <Image
                        src={item.icon}
                        alt={`${item.title} icon`}
                        width={50} // Adjust size as needed
                        height={50} // Adjust size as needed
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <h4 className="title">
                      <Link href={`/services-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <p className="flex-grow-1">{item.desc}</p> {/* Description from data */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
