import Breadcumb from "@/components/common/Breadcumb"

import ServiceArea from "./ServiceArea"

import ScrollToTop from "@/components/common/ScrollToTop"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const Service = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Our Services" sub_title="Services" />
            <ServiceArea />
         </main>
         <FooterOne />
      </div>
   )
}

export default Service
