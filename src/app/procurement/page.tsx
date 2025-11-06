import ServiceDetails from "@/components/pages/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Strategic Global Procurement Services | iW3",
   description: "From diagnostic kits to advanced systems, iW3 provides strategic procurement solutions backed by technical expertise and trusted international networks.",
   keywords: "procurement services, global procurement, strategic sourcing, supply chain management, technical procurement, iW3",
   openGraph: {
      title: "Strategic Global Procurement Services | iW3",
      description: "From diagnostic kits to advanced systems, iW3 provides strategic procurement solutions backed by technical expertise and trusted international networks.",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Strategic Global Procurement Services | iW3",
      description: "From diagnostic kits to advanced systems, iW3 provides strategic procurement solutions backed by technical expertise and trusted international networks.",
   },
};

const ProcurementPage = () => {
   return (
      <Wrapper>
         <ServiceDetails serviceName="Procurement" />
      </Wrapper>
   )
}

export default ProcurementPage