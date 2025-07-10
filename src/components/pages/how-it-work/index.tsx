import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"


import HowItWorkArea from "./HowItWorkArea"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const HowItWork = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="How it’s Work" sub_title="How it’s Work" />
            <HowItWorkArea />
         </main>
         <FooterOne />
      </div>
   )
}

export default HowItWork
