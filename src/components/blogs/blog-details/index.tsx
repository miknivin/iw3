import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"

import HeaderFour from "@/layouts/headers/HeaderFour"
import BlogDetailsArea from "./BlogDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"

const BlogDetails = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderFour />
         <main className="fix">
            <Breadcumb title="Blog Details" sub_title="Blog Details" />
            <BlogDetailsArea />
         </main>
         <FooterOne />
      </div>
   )
}

export default BlogDetails
