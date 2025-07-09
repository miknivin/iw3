import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"

import PartnerArea from "./PartnerArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Client = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Our Partners" sub_title="Partners" />
            <PartnerArea />
         </main>
         <FooterTwo />
      </div>
   )
}

export default Client
