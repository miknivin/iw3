// import InjectableSvg from "@/components/common/InjectableSvg"
import Image from "next/image"
import Link from "next/link"

import cta from "@/assets/img/images/cta_img.jpg"

const CTA = () => {
   return (
      <section className="cta__area">
         <div className="container">
            <div className="cta__wrap-two">
               <div className="cta__img">
                  <Image src={cta} alt="img" />
               </div>
               <div className="cta__content-two">
                  <div className="content__left">
                     <h2 className="title">Would you Like to get The Best Transport Services?</h2>
                     <p>Experience top-notch travel with our premier transport services, tailored for your comfort and convenience.</p>
                  </div>
                  <div className="cta__btn-two">
                     <Link href="/about" className="btn">Read More</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CTA
