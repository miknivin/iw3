import Breadcumb from "@/components/common/Breadcumb";
import ScrollToTop from "@/components/common/ScrollToTop";

import ContactArea from "./ContactArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const Contact = () => {
  return (
    <div className="theme-red">
      <ScrollToTop />
      <HeaderOne />
      <main className="fix">
        <Breadcumb title="Contact Us" sub_title="Contact" />
        <ContactArea />
      </main>
      <FooterOne />
    </div>
  );
};

export default Contact;
