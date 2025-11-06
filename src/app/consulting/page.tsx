import ServiceDetails from "@/components/pages/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Business Consulting for Logistics & Infrastructure | iW3",
   description: "iW3 delivers strategic consulting for logistics, procurement, and infrastructure projects — blending insight with implementation to drive measurable growth.",
   keywords: "business consulting, logistics consulting, infrastructure consulting, strategic consulting, operational transformation, iW3",
   openGraph: {
      title: "Business Consulting for Logistics & Infrastructure | iW3",
      description: "iW3 delivers strategic consulting for logistics, procurement, and infrastructure projects — blending insight with implementation to drive measurable growth.",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Business Consulting for Logistics & Infrastructure | iW3",
      description: "iW3 delivers strategic consulting for logistics, procurement, and infrastructure projects — blending insight with implementation to drive measurable growth.",
   },
};

const ConsultingPage = () => {
   return (
      <Wrapper>
         <ServiceDetails serviceName="Consulting" />
      </Wrapper>
   )
}

export default ConsultingPage