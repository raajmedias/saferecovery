

import Footer from '../layout/footer';
import Header from '../layout/header-3';
import { useState } from "react";
import Services from '../element/service';
import Team from '../element/team';
import Testimonial from '../element/testimonial';
import Link from 'next/link';
import Quote from '../element/quote';
import Newsletter from '../element/newsletter';
import Features from '../element/our-features';


function Services1() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>WHAT WE DO</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Services</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services --> */}
		<Services/>
		
		{/* <!-- Newsletter --> */}
		<Newsletter />
		
		{/* <!-- Fetures --> */}
		<Features />
		
		{/* <!-- Team --> */}
		{/* <Team/> */}
		
		{/* <!-- Testimonials --> */}
		{/* <Testimonial/> */}
		
		{/* <!-- Get A Quote --> */}
		<Quote/>
	</div>
    <Footer/>
    </>
  )
}

export default Services1;