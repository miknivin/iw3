import Breadcumb from "@/components/common/Breadcumb"

import HistoryArea from "./HistoryArea"
import MarqueeArea from "@/components/homes/home-one/Marquee"
import Testimonial from "./Testimonial"
// import Brand from "@/components/homes/home-one/Brand"

import ScrollToTop from "@/components/common/ScrollToTop"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const History = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Our Company History" sub_title="History" />
            <HistoryArea />
            <MarqueeArea style={true} />
            <Testimonial />
            {/* <Brand /> */}
         </main>
         <FooterOne />
      </div>
   )
}

export default History
