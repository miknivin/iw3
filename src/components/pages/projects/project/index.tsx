import ScrollToTop from "@/components/common/ScrollToTop"


import ProjectArea from "./ProjectArea"
import Breadcumb from "@/components/common/Breadcumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const Project = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Portfolio" sub_title="Portfolio" />
            <ProjectArea />
         </main>
         <FooterOne />
      </div>
   )
}

export default Project
