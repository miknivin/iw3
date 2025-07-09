import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"

import BlogArea from "./BlogArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Blog = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
            <Breadcumb title="Our Blog" sub_title="Blogs" />
            <BlogArea />
         </main>
         <FooterTwo />
      </div>
   )
}
export default Blog
