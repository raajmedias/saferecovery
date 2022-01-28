import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/about/img4.png" className="move-1" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">Who We Are</h6>
                              <h2 className="title">How We Can Help You Get Your Lost Data Back.</h2>
                          </div>
                          <p>Safe Recovery has been offering professional data recovery solutions for more than one year. Today, Safe Recovery is definitely the global pioneer in data recovery solutions and offers the easiest, most dependable and efficient data recovery support.</p>
                          <p className="m-b30">Knowing the significance of digital data as well as the impact of data loss on a business operation or an individual's valuable data, our objective would be to enhance the possibilities of an effective data recovery while providing best customer care experience.</p>
                          {/* <img src="images/sign.png" alt=""/> */}
                          {/* <h4 className="m-b30">CEO - Ganesh Raja</h4> */}
                         <Link href="/about"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link> 
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default AboutUs;