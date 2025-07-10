import Blog from "@/components/blogs/blog";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Blog iw3 - ",
};
const page = () => {
   return (
      <Wrapper>
         <Blog />
      </Wrapper>
   )
}

export default page