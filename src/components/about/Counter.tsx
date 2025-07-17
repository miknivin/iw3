import React from 'react'

const Counter = () => {
   return (
      <section className="counter__area counter__bg section-pt-120 section-pb-90" data-background="assets/img/bg/vector_bg05.svg">
         <div className="container d-flex justify-content-center">
            <div style={{gap: '80px'}} className="row justify-content-center align-items-center">
               <div className="col-lg-3 col-sm-6">
                  <div className="counter__item-two">
                     <div className="counter__icon-two">
                        <i className="flaticon-air-plane"></i>
                     </div>
                     <div className="counter__content-two">
                        <h2 className="count"><span className="counter-number">500</span>+</h2>
                        <p>Transactions</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div className="counter__item-two">
                     <div className="counter__icon-two">
                        <i className="flaticon-parcels"></i>
                     </div>
                     <div className="counter__content-two">
                        <h2 className="count"><span className="counter-number">20</span>+</h2>
                        <p>Winning Awards</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div className="counter__item-two">
                     <div className="counter__icon-two">
                        <i className="flaticon-parcel"></i>
                     </div>
                     <div className="counter__content-two">
                        <h2 className="count"><span className="counter-number">50</span>+</h2>
                        <p>Heavy Lifts</p>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </section>
   )
}

export default Counter
