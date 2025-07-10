import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"


import Testimonial from "./Testimonial"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const TestimonialMain = () => {
  return (
    <div className="theme-red">
      <ScrollToTop />
      <HeaderOne />
      <main className="fix">
        <Breadcumb title="Pricing plan" sub_title="Pricing" />
        <Testimonial />
      </main>
      <FooterOne />
    </div>
  )
}

export default TestimonialMain
