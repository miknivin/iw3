
import Hero from "./Hero"
import Feature from "./Feature"
import About from "./About"
import Brand from "../home-one/Brand"
import Service from "./Service"
import VideoArea from "../home-one/VideoArea"
import RequestArea from "../home-one/RequestArea"
import Counter from "./Counter"
import Project from "./Project"
import WorkArea from "../home-two/WorkArea"
import CTA from "../home-two/CTA"
import Blog from "./Blog"
import FooterTwo from "@/layouts/footers/FooterTwo"
import Testimonial from "./Testimonial"
import HeaderOne from "@/layouts/headers/HeaderOne"

const HomeFour = () => {
   return (
      <div className="theme-red">
         <HeaderOne />
         <main className="fix">
            <Hero />
            <Feature />
            <About />
            <Brand />
            <Service />
            <VideoArea style={true} />
            <RequestArea style={true} />
            <Testimonial />
            <Counter />
            <Project />
            <WorkArea />
            <CTA />
            <Blog />
            <FooterTwo />
         </main>
      </div>
   )
}

export default HomeFour
