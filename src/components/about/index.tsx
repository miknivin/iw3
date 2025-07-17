
import Breadcumb from "../common/Breadcumb"
// import Brand from "../homes/home-one/Brand"
// import Testimonial from "../homes/home-one/Testimonial"
// import Team from "../homes/home-three/Team"
import AboutArea from "./AboutArea"
import Counter from "./Counter"
import FeaturesArea from "./FeaturesArea"
// import Pricing from "./Pricing"
// import VideoArea from "./VideoArea"

import ScrollToTop from "../common/ScrollToTop"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const About = () => {
   return (
      <div className="theme-red">
         <HeaderOne />
         <ScrollToTop />
         <main className="fix">
            <Breadcumb sub_title="About Us" title="About Us" />
            <AboutArea />
            <FeaturesArea />
            {/* <VideoArea /> */}
            <Counter />
            {/* <Pricing /> */}
            {/* <Team style={false} /> */}
            {/* <Testimonial style={true} /> */}
            {/* <Brand /> */}
            <FooterOne />
         </main>
      </div>
   )
}

export default About
