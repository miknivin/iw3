import ServiceDetails from "@/components/pages/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Project Logistics & Multimodal Transport | iW3",
   description: "iW3 specializes in complex project logistics — heavy lift, OOG cargo, and time-critical multimodal transport across global hubs.",
   keywords: "project logistics, multimodal transport, heavy lift cargo, OOG cargo, time-critical shipping, global logistics, iW3",
   openGraph: {
      title: "Project Logistics & Multimodal Transport | iW3",
      description: "iW3 specializes in complex project logistics — heavy lift, OOG cargo, and time-critical multimodal transport across global hubs.",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Project Logistics & Multimodal Transport | iW3",
      description: "iW3 specializes in complex project logistics — heavy lift, OOG cargo, and time-critical multimodal transport across global hubs.",
   },
};

const LogisticsPage = () => {
   return (
      <Wrapper>
         <ServiceDetails serviceName="Logistics" />
      </Wrapper>
   )
}

export default LogisticsPage