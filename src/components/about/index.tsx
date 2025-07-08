import FooterTwo from "@/layouts/footers/FooterTwo"
import Breadcumb from "../common/Breadcumb"
import Brand from "../homes/home-one/Brand"
import Testimonial from "../homes/home-one/Testimonial"
// import Team from "../homes/home-three/Team"
import AboutArea from "./AboutArea"
import Counter from "./Counter"
import FeaturesArea from "./FeaturesArea"
// import Pricing from "./Pricing"
// import VideoArea from "./VideoArea"
import HeaderFour from "@/layouts/headers/HeaderFour"
import ScrollToTop from "../common/ScrollToTop"

const About = () => {
   return (
      <div className="theme-red">
         <HeaderFour />
         <ScrollToTop />
         <main className="fix">
            <Breadcumb sub_title="About Us" title="About Us" />
            <AboutArea />
            <FeaturesArea />
            {/* <VideoArea /> */}
            <Counter />
            {/* <Pricing /> */}
            {/* <Team style={false} /> */}
            <Testimonial style={true} />
            <Brand />
            <FooterTwo />
         </main>
      </div>
   )
}

export default About
