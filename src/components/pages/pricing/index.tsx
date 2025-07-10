import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"


import PricingArea from "./PricingArea"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const Pricing = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Pricing plan" sub_title="Pricing" />
            <PricingArea />
         </main>
         <FooterOne />
      </div>
   )
}

export default Pricing
