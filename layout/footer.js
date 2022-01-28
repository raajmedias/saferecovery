import Link from 'next/link';


function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" style={{"backgroundImage":"url(images/background/bg10.png)"}}>
		<div className="footer-top">
            <div className="container">
				<div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="row align-items-center">
						<div className="col-xl-5 col-md-3">
							<div className="footer-logo">
								{/* <a href="/"><img src="images/logo-white.png" alt=""/></a>  */}
								<Link href="/"><a className="h3 text-white">Safe Recovery</a></Link>
							</div>
						</div>
						<div className="col-xl-4 col-md-5 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-email"></i>
									</a> 
								</div>
								<div className="icon-content">
									<p>+91 720 720 1717<br/>support@saferecovery.in</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-location"></i>
									</a> 
								</div>
								<div className="icon-content">
									<p>4-17-12/1, A.C. Gardens, Rajahmundry.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<h5 className="footer-title">About Us</h5>
							<p>We're offering professional data recovery solutions for more than one year. Today, Safe Recovery is definitely the global pioneer in data recovery solutions and offers the easiest, most dependable and efficient data recovery support.</p>
							{/* <div className="dlab-social-icon">
								<ul>
									<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
									<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
									<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
								</ul>
							</div> */}
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li><Link href="/">Home</Link></li>
								<li><Link href="/about">About Us</Link></li>
								<li><Link href="/services">Services</Link></li>
								<li><Link href="/blog">Blog</Link></li>
								<li><Link href="/contact">Contact</Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><a href="javascript:void(0);">Hard Disk Recovery</a></li>
								<li><a href="javascript:void(0);">Ransomware Recovery</a></li>
								<li><a href="javascript:void(0);">Memory Card Recovery</a></li>
								<li><a href="javascript:void(0);">Pendrive Recovery</a></li>
								<li><a href="javascript:void(0);">Bitlocker Recovery</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Other links</h5>
						   <ul>
								<li><a href="javascript:void(0);">FAQ</a></li>
								<li><a href="javascript:void(0);">Portfolio</a></li>
								<li><a href="javascript:void(0);">Privacy Policy</a></li>
								<li><a href="javascript:void(0);">Terms & Conditions</a></li>
								<li><a href="javascript:void(0);">Support </a></li>
							</ul>
						</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center"> 
						<span className="copyright-text">Copyright © 2022 <a href="http://www.saferecovery.in" target="_blank">Safe Recovery</a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;