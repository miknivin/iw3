
"use client";
import Image from "next/image";
import Link from "next/link";
import sevice_details1 from "@/assets/img/logo/logo01.png";
import InjectableSvg from "@/components/common/InjectableSvg";

const ServiceSidebar = () => {
  return (
    <div className="col-30">
      <aside className="services__sidebar">
        <div className="services__widget">
          <div className="services__cat-list">
            <ul className="list-wrap">
              <li>
                <Link href="/services-details/svc-infra-001">
                  <span>
                    <i className="flaticon-warehouse"></i>Infrastructure
                  </span>{" "}
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </li>
              <li>
                <Link href="/services-details/svc-infra-002">
                  <span>
                    <i className="flaticon-air-freight"></i>Procurement
                  </span>{" "}
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </li>
              <li>
                <Link href="/services-details/svc-youth-001">
                  <span>
                    <i className="flaticon-train"></i>Logistics
                  </span>{" "}
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </li>
              <li>
                <Link href="/services-details/svc-infra-003">
                  <span>
                    <i className="flaticon-truck"></i>Consulting
                  </span>{" "}
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="services__widget services__widget-two">
          <div className="sidebar__logo">
            <Link href="/">
              <Image src={sevice_details1} alt="logo" width={100} />
            </Link>
          </div>
          <div className="sidebar__contact">
            <h2 className="title">
              <br /> for Business
            </h2>
            <Link href="tel:+97147777222" className="sidebar__phone">
              <i className="flaticon-telephone"></i>+97147777222
            </Link>
            <Link href="/contact" className="btn">
              Contact With us{" "}
              <InjectableSvg
                src="/assets/img/icon/right_arrow.svg"
                alt=""
                className="injectable"
              />
            </Link>
          </div>
          <div
            className="sidebar__shape"
            style={{
              backgroundImage: `url(/assets/img/services/services_sidebar_shape.png)`,
            }}
          ></div>
        </div>
        <div className="services__widget services__widget-three">
          <h4 className="sidebar__widget-title">Logistics Expertise</h4>
          <div className="sidebar__logistics">
            <p style={{ color: "white" }}>
              Streamlined supply chain solutions tailored for Kochi and Dubai,
              ensuring efficient logistics and regional market success.
            </p>
            
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ServiceSidebar;
