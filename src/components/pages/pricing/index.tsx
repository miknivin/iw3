import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"

import PricingArea from "./PricingArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Pricing = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Pricing plan" sub_title="Pricing" />
            <PricingArea />
         </main>
         <FooterTwo />
      </div>
   )
}

export default Pricing
