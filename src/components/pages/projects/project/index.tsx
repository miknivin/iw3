import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"

import ProjectArea from "./ProjectArea"
import Breadcumb from "@/components/common/Breadcumb"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Project = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Portfolio" sub_title="Portfolio" />
            <ProjectArea />
         </main>
         <FooterTwo />
      </div>
   )
}

export default Project
