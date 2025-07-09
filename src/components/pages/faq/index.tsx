import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"

import FaqArea from "./FaqArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Faq = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Faq’s" sub_title="Faq’s" />
            <FaqArea />
         </main>
         <FooterTwo />
      </div>
   )
}

export default Faq
