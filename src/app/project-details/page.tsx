import ProjectDetails from "@/components/pages/projects/project-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "iw3",
};
const page = () => {
   return (
      <Wrapper>
         <ProjectDetails />
      </Wrapper>
   )
}

export default page