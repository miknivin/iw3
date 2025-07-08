"use client"
import Link from "next/link"
import NavMenu from "./menu/NavMenu"
import Image from "next/image"
import UseSticky from "@/hooks/UseSticky"
import { useState } from "react"
import MobileSidebar from "./menu/MobileSidebar"

import logo_1 from "@/assets/img/logo/logo01.png"

const HeaderThree = () => {

   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <header className="transparent-header">
         <div id="sticky-header" className={`tg-header__area tg-header__area-four ${sticky ? "tg-sticky-menu sticky-menu sticky-menu__show" : ""}`}>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="tgmenu__wrap">
                        <div className="logo">
                           <Link href="/"><Image src={logo_1} alt="Logo" width={140} height={140} /></Link>
                        </div>
                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                           <NavMenu />
                        </div>
                        <div className="tgmenu__action tgmenu__action-four d-none d-md-flex">
                           <ul className="list-wrap">
                              <li className="header-contact header-contact-two">
                                 <div className="icon">
                                    <i className="flaticon-telephone"></i>
                                 </div>
                                 <div className="content">
                                    <span>Emergency Call:</span>
                                    <Link href="tel:+97147777222">+97147777222</Link>
                                 </div>
                              </li>
                              <li className="header-btn">
                                 <Link href="/contact" className="btn btn-three"><i className="flaticon-uptrend"></i>Track Order</Link>
                              </li>
                           </ul>
                        </div>
                        <div onClick={() => setIsActive(true)} className="mobile-nav-toggler mobile-nav-toggler-two">
                           <i className="tg-flaticon-menu-1"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <MobileSidebar isActive={isActive} setIsActive={setIsActive} />
      </header>
   )
}

export default HeaderThree
