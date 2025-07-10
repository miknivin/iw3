import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"

import Mission from "./Mission"
import Vision from "./Vision"

import CTA from "./CTA"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const WhoWeAre = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Who We Are" sub_title="Who We Are" />
            <Mission />
            <Vision />
            <CTA />
            <FooterOne />
         </main>
      </div>
   )
}

export default WhoWeAre
