import FooterOne from "@/layouts/footers/FooterOne"
import Hero from "./Hero"
import About from "./About"
// import Brand from "./Brand"
import Service from "./Service"
import Choose from "./Choose"
import Achieved from "./Achieved"
// import Marquee from "./Marquee"
import Project from "./Project"
// import VideoArea from "./VideoArea"
// import RequestArea from "./RequestArea"
//  import Testimonial from "./Testimonial"
// import WorkArea from "./WorkArea"
// import Blog from "./Blog"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ContactMap from "./ContactMap"
import ScrollToTop from "@/components/common/ScrollToTop"
import StatsSection from "./StatsSection"
import Advantages from "./Advantages"


const HomeOne = () => {
   return (
      <div className="theme-blue">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Hero />
            <About />
            {/* <Brand style={false} /> */}
            <Service />
            <Advantages />
            <Choose />
            <Achieved />
            {/* <Marquee style={false} /> */}
            <Project />
            {/* <VideoArea style={false} /> */}
            {/* <RequestArea style={false} /> */}
             {/* <Testimonial style={false} />  */}
{/*           
            <WorkArea /> */}
            {/* <Blog /> */}
            <StatsSection />
            <ContactMap />
         </main>
         <FooterOne />
      </div>
   )
}

export default HomeOne
