import React, {useState} from 'react'
import db from '../firebase'

function Newsletter() {
	const [email, setEmail] = useState('')
	const [sentMessage, setSentMessage] = useState(false)
	const [err, setErr] = useState(false)
	const [subscribeText, setSubscribeText] = useState('Subscribe Now')
	const handleSubscribe = async (e) => {
		e.preventDefault();
		if(!email) return null
		setSubscribeText('Subscribing...')
		const data = db.collection('subscribers')
		const item = await data.get()
		const emails = item.docs.map(doc => doc.data())
		const check = emails.filter(item => item.email === email)
		if(check.length > 0) {
			setErr(true)
			setSubscribeText('Subscribe Now')
		}else{
			db.collection('subscribers').add({email})
			setSubscribeText('Subscribed')
			setSentMessage(true)
			setErr(false)
			setEmail('')
		}
	}
    return (
      <>
        <section className="content-inner-3 bg-primary" style={{"backgroundImage":"url(images/background/bg13.png)","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-4 col-md-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-media m-b30">
							<img src="images/about/img9.png" className="move-2" alt=""/>
						</div>
					</div>
					<div className="col-lg-8 col-md-7 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 text-white">
							<h6 className="sub-title bgl-light m-b20">Newsletter</h6>
							<h2 className="title m-b15">Subscribe To Our Newsletter For Latest Update Of Recovery Services </h2>
							{/* <p>Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non.</p> */}
						</div>
						<div className="dlab-subscribe style-2 max-w500">
							<form className="dzSubscribe" autoComplete="on">
								<div className="dzSubscribeMsg"></div>
								<div className="form-group">
									<div className="input-group">
										<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address" value={email} onChange={e => {
											setEmail(e.target.value)
											setErr(false)
											setSentMessage(false)
										}} />
										<div className="input-group-addon">
											<button name="submit" value="Submit" type="submit" className="btn rounded-xl shadow btn-primary" onClick={handleSubscribe} > {subscribeText} </button>
										</div>
									</div>
									{err ? <p className="text-white">You're already subscribed.</p> : sentMessage && <p className="text-white">Subscribed to Newletter Successfully.</p>}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Newsletter;