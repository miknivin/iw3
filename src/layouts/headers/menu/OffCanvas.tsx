import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/img/logo/logo01.png";

interface MobileSidebarProps {
  offCanvas: boolean;
  setOffCanvas: (offCanvas: boolean) => void;
}

const OffCanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {
  return (
    <>
      <div className={`offCanvas__info ${offCanvas ? "active" : ""}`}>
        <div className="offCanvas__close-icon menu-close">
          <button onClick={() => setOffCanvas(false)}>
            <i className="far fa-window-close"></i>
          </button>
        </div>
        <div className="offCanvas__logo mb-30">
          <Link href="/">
            <Image src={logo} alt="Logo" width={140} height={140} />
          </Link>
        </div>
        <div className="offCanvas__side-info mb-30">
          <div className="contact-list mb-30">
            <h4>Office Address</h4>
            <p>
              {" "}
              IW3 Infralog LLC-FZ Meydan Free Zone, Nad Al Sheba, P.O. Box 35195
              <br /> Dubai, UAE
            </p>
          </div>
          <div className="contact-list mb-30">
            <Link href="tel:+97147777222">Tel:+97147777222</Link>

            {/* <p>M : +971 56 2212979</p> */}
          </div>
          <div className="contact-list mb-30">
            <h4>Email Address</h4>
            <Link href="mailto:info@iw3.in">info@iw3.in</Link>
          </div>
        </div>
        {/* <div className="offCanvas__social-icon mt-30">
               <Link href="#"><i className="fab fa-facebook-f"></i></Link>
               <Link href="#"><i className="fab fa-twitter"></i></Link>
               <Link href="#"><i className="fab fa-google-plus-g"></i></Link>
               <Link href="#"><i className="fab fa-instagram"></i></Link>
            </div> */}
      </div>
      <div
        onClick={() => setOffCanvas(false)}
        className={`offCanvas__overly ${offCanvas ? "active" : ""}`}
      ></div>
    </>
  );
};

export default OffCanvas;
