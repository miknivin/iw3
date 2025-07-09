import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"

import Testimonial from "./Testimonial"
import HeaderOne from "@/layouts/headers/HeaderOne"

const TestimonialMain = () => {
  return (
    <div className="theme-red">
      <ScrollToTop />
      <HeaderOne />
      <main className="fix">
        <Breadcumb title="Pricing plan" sub_title="Pricing" />
        <Testimonial />
      </main>
      <FooterTwo />
    </div>
  )
}

export default TestimonialMain
