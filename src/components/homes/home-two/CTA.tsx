import Image from "next/image"
import cta_img from "@/assets/img/images/cta_img.jpg"
// import InjectableSvg from "@/components/common/InjectableSvg"
import Link from "next/link"

const CTA = () => {
   return (
      <section className="cta__area-two">
         <div className="container">
            <div className="cta__wrap-two cta__wrap-three">
               <div className="cta__img">
                  <Image src={cta_img} alt="img" />
               </div>
               <div className="cta__content-two cta__content-three">
                  <div className="content__left">
                     <h2 className="title">Would you Like to get The Best Transport Services?</h2>
                     <p>Experience top-notch travel with our premier transport services, tailored for your comfort and convenience.</p>
                  </div>
                  <div className="cta__btn-two cta__btn-three">
                     <Link href="/about" className="btn">Read More </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CTA
