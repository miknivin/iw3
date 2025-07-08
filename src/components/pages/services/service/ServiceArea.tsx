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
              <div key={item.id} className="col-lg-3 col-md-6"> {/* 4 items per row on large screens */}
                <div className="services__item-three">
                  <div className="services__thumb-three">
                    <Link href={`/services-details/${item.id}`}>
                      <Image 
                        src={item.img} 
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
                  <div className="services__content-three">
                    <div className="services__icon-three">
                      <i className={item.icon}></i> {/* Dynamic icon from data */}
                    </div>
                    <h4 className="title">
                      <Link href={`/services-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <p>{item.desc}</p> {/* Description from data */}
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