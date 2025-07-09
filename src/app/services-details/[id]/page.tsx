import ServiceDetails from "@/components/pages/services/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "iw3",
};
const page = () => {
   return (
      <Wrapper>
         <ServiceDetails />
      </Wrapper>
   )
}

export default page