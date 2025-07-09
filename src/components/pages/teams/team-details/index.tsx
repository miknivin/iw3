import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"

import TeamDetailsArea from "./TeamDetailsArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const TeamDetails = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Team Details" sub_title="Team Details" />
            <TeamDetailsArea />
         </main>
         <FooterTwo />
      </div>
   )
}

export default TeamDetails
