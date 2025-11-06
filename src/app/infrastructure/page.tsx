import ServiceDetails from "@/components/pages/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Logistics Infrastructure Solutions | iW3 Global",
   description: "iW3 builds scalable logistics infrastructure across emerging markets — warehousing, ports, and transport systems designed to power industrial growth and investment opportunities.",
   keywords: "logistics infrastructure, warehousing solutions, transport infrastructure, emerging markets, industrial growth, iW3",
   openGraph: {
      title: "Logistics Infrastructure Solutions | iW3 Global",
      description: "iW3 builds scalable logistics infrastructure across emerging markets — warehousing, ports, and transport systems designed to power industrial growth and investment opportunities.",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Logistics Infrastructure Solutions | iW3 Global", 
      description: "iW3 builds scalable logistics infrastructure across emerging markets — warehousing, ports, and transport systems designed to power industrial growth and investment opportunities.",
   },
};

const InfrastructurePage = () => {
   return (
      <Wrapper>
         <ServiceDetails serviceName="Infrastructure" />
      </Wrapper>
   )
}

export default InfrastructurePage