import react, {useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import db from '../firebase'

function Quote() {
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [email, setEmail] = useState('')
	const [mobile, setMobile] = useState('')
	const [message, setMessage] = useState('')
	const [submitText, setSubmitText] = useState('Submit Now')
	const [val, setVal] = useState(false)
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e)
		setSubmitText('Submitting...')
		db.collection('enquiries').add({fname, lname, email, mobile, message})
		setFname('')
		setLname('')
		setEmail('')
		setMobile('')
		setMessage('')
		setSubmitText('Submitted.')
		setVal(true)
	}
	return (
		<>
			<section className="content-inner" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
							<div className="section-head style-1">
								<h6 className="sub-title bgl-primary m-b20 text-primary">Contact Us</h6>
								<h2 className="title">We Love To Help Great Companies To Prevent Data Loss.</h2>
							</div>
							<form className="dlab-form dzForm" autoComplete="on">
								<div className="dzFormMsg"></div>
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
								<div className="row">
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzName" type="text" required className="form-control" placeholder="First Name" value={fname} onChange={e => {setFname(e.target.value), setVal(false), setSubmitText('Submit Now')}} />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzOther[last_name]" type="text" className="form-control" required placeholder="Last Name" value={lname} onChange={e => {setLname(e.target.value), setVal(false), setSubmitText('Submit Now')}} />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-envelope"></i></span>
											</div>
											<input name="dzEmail" type="text" required className="form-control" placeholder="Email Address" value={email} onChange={e => {setEmail(e.target.value), setVal(false), setSubmitText('Submit Now')}} />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-phone"></i></span>
											</div>
											<input name="dzOther[phone]" type="text" required className="form-control" placeholder="Phone No." value={mobile} onChange={e=> {setMobile(e.target.value), setVal(false), setSubmitText('Submit Now')}} />
										</div>
									</div>
									<div className="col-sm-12">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-sms"></i></span>
											</div>
											<textarea name="dzMessage" required className="form-control" placeholder="Message" value={message} onChange={e=> {setMessage(e.target.value), setVal(false), setSubmitText('Submit Now')}}></textarea>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="input-group">
											<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											<input className="form-control d-none" style={{ "display": "none" }} data-recaptcha="true" required data-error="Please complete the Captcha" />
										</div>
									</div>
									<ReCAPTCHA
										sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
									/>
									<div className="col-sm-12 mt-2">
										<button onClick={handleSubmit} name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i> {submitText} </button>
									</div>
									{val && <p style={{color : "#896eff"}} className="mt-3">Thank you for contacting us. We'll respond to you soon.</p>}
								</div>
							</form>
						</div>
						<div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
							<div className="dlab-media cf-r-img">
								<img src="images/about/img2.png" className="move-1" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Quote;