import BlogDetails from "@/components/blogs/blog-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Blog Details iw3",
};
const page = () => {
   return (
      <Wrapper>
         <BlogDetails />
      </Wrapper>
   )
}

export default page