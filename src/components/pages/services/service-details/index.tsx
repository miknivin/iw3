import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"

import ServiceDetailsArea from "./ServiceDetailsArea"
import CTA from "../../who-we-are/CTA"

import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

interface ServiceDetailsProps {
   serviceName?: string;
}

const ServiceDetails = ({ serviceName }: ServiceDetailsProps) => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title={serviceName || "Our Services"} sub_title="Service Details" />
            <ServiceDetailsArea />
         </main>
         <CTA />
         <FooterOne />
      </div>
   )
}

export default ServiceDetails
