import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"

import ServiceDetailsArea from "./ServiceDetailsArea"
import CTA from "../../who-we-are/CTA"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ServiceDetails = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Our Services" sub_title="Service Details" />
            <ServiceDetailsArea />
         </main>
         <CTA />
         <FooterTwo style={true} />
      </div>
   )
}

export default ServiceDetails
