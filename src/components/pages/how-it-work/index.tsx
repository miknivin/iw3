import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"

import HowItWorkArea from "./HowItWorkArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const HowItWork = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="How it’s Work" sub_title="How it’s Work" />
            <HowItWorkArea />
         </main>
         <FooterTwo />
      </div>
   )
}

export default HowItWork
