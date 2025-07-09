import Breadcumb from "@/components/common/Breadcumb"

import ServiceArea from "./ServiceArea"
import FooterTwo from "@/layouts/footers/FooterTwo"
import ScrollToTop from "@/components/common/ScrollToTop"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Service = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Our Services" sub_title="Services" />
            <ServiceArea />
         </main>
         <FooterTwo />
      </div>
   )
}

export default Service
