
import Hero from "./Hero"
import Feature from "./Feature"
import About from "./About"
// import Brand from "../home-one/Brand"
import Service from "./Service"
import VideoArea from "../home-one/VideoArea"
import RequestArea from "../home-one/RequestArea"
import Counter from "./Counter"
import Project from "./Project"
import WorkArea from "../home-two/WorkArea"
import CTA from "../home-two/CTA"
import Blog from "./Blog"

import Testimonial from "./Testimonial"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const HomeFour = () => {
   return (
      <div className="theme-red">
         <HeaderOne />
         <main className="fix">
            <Hero />
            <Feature />
            <About />
            {/* <Brand /> */}
            <Service />
            <VideoArea style={true} />
            <RequestArea style={true} />
            {/* <Testimonial /> */}
            <Counter />
            <Project />
            <WorkArea />
            <CTA />
            <Blog />
            <FooterOne />
         </main>
      </div>
   )
}

export default HomeFour
