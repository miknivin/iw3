
import Hero from "./Hero"
import Features from "./Features"
import About from "./About"
// import Brand from "../home-one/Brand"
import Services from "./Services"
import Counter from "./Counter"
import VideoArea from "./VideoArea"
import Project from "./Project"
import MarqueeArea from "../home-one/Marquee"
import Team from "./Team"
// import Testimonial from "../home-one/Testimonial"
import Faq from "./Faq"
import Blog from "../home-two/Blog"

import ScrollToTop from "@/components/common/ScrollToTop"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const HomeThree = () => {
   return (
      <div className="theme-orange">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Hero />
            <Features />
            <About />
            {/* <Brand style={true} /> */}
            <Services />
            <Counter />
            <VideoArea />
            <Project />
            <MarqueeArea style={false} />
            <Team style={true} />
            {/* <Testimonial style={true} /> */}
            <Faq />
            <Blog />
         </main>
         <FooterOne />
      </div>
   )
}

export default HomeThree
