import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"


import ProjectDetailsArea from "./ProjectDetailsArea"
import CTA from "../../who-we-are/CTA"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"

const ProjectDetails = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb sub_title="Portfolio Details" title="Portfolio Details" />
            <ProjectDetailsArea />
            <CTA />
         </main>
         <FooterOne />
      </div>
   )
}

export default ProjectDetails
