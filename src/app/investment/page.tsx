import ServiceDetails from "@/components/pages/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Strategic Investment & Capital Advisory | iW3",
   description: "iW3 provides strategic investment solutions and capital advisory for infrastructure and industrial projects across global markets.",
   keywords: "investment, capital advisory, project financing, infrastructure investment, strategic growth, iW3",
   openGraph: {
      title: "Strategic Investment & Capital Advisory | iW3",
      description: "iW3 provides strategic investment solutions and capital advisory for infrastructure and industrial projects across global markets.",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Strategic Investment & Capital Advisory | iW3",
      description: "iW3 provides strategic investment solutions and capital advisory for infrastructure and industrial projects across global markets.",
   },
};

const InvestmentPage = () => {
   return (
      <Wrapper>
         <ServiceDetails serviceName="Investment" />
      </Wrapper>
   )
}

export default InvestmentPage