import Team from "@/components/pages/teams/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "iw3",
};
const page = () => {
   return (
      <Wrapper>
         <Team />
      </Wrapper>
   )
}

export default page