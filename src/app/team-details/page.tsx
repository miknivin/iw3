import TeamDetails from "@/components/pages/teams/team-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "iw3 ",
};
const page = () => {
   return (
      <Wrapper>
         <TeamDetails />
      </Wrapper>
   )
}

export default page