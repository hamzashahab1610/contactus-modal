import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import ReCAPTCHA from "react-google-recaptcha";

function ContactUs({ closeModal }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [captcha, setCaptcha] = useState();
	const [isEmailValid, setisEmailValid] = useState(false);
	const [isphoneValid, setisphoneValid] = useState(false);
	const [isSubmitEnabled, setisSubmitEnabled] = useState(false);

	function onChange(value) {
		console.log("Captcha value:", value);
		setCaptcha(value);
	}

	useEffect(() => {
		if (
			name !== "" &&
			email !== "" &&
			phone !== "" &&
			message !== "" &&
			captcha
		) {
			setisSubmitEnabled(true);
		}
	});

	const validateEmail = (email) => {
		var pattern = new RegExp(
			/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
		);

		if (!pattern.test(email)) {
			setisEmailValid(false);
		} else {
			setisEmailValid(true);
		}
	};

	const validatePhone = (phone) => {
		var pattern = new RegExp(
			/^\(?([0-9]{3})\)?[-.\s]([0-9]{3})[-.\s]([0=9]{4})?/,
		);

		if (!pattern.test(phone)) {
			setisphoneValid(false);
		} else {
			setisphoneValid(true);
		}
	};

	const submitHandler = () => {
		// validateEmail(email);
		// validatePhone(phone);
	};

	console.log(isphoneValid);

	return (
		<form onSubmit={submitHandler} className="form-container">
			<div className="close-btn" onClick={closeModal}>
				<i class="fas fa-times"></i>
			</div>
			<header className="header">Email Us</header>
			<div className="sub-wrapper">
				<div className="input-container">
					{name !== "" && (
						<label className="label" htmlFor="">
							Name
						</label>
					)}

					<input
						className="input"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="input-container">
					{phone !== "" && (
						<label className="label" htmlFor="">
							Phone Number
						</label>
					)}
					<input
						type="tel"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						className="input"
						placeholder="Enter Phone Number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className="input-container">
					{email !== "" && (
						<label className="label" htmlFor="">
							Email
						</label>
					)}
					<input
						className="input"
						placeholder="Enter Email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="input-container">
					{message !== "" && (
						<label className="label" htmlFor="">
							Message
						</label>
					)}
					<textarea
						className="input"
						placeholder="Enter your Message"
						maxlength="240"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<div id="the-count">
					<span id="current">{message.length}</span>
					<span id="maximum">/ 240</span>
				</div>
				<div className="recaptcha">
					<ReCAPTCHA
						sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
						onChange={onChange}
					/>
				</div>
				,
			</div>
			<div className="buttons">
				<button type="reset" className="cancel-btn">
					CANCEL
				</button>
				<button
					type="submit"
					className={
						isSubmitEnabled ? "submit-btn" : "submit-btn-disabled"
					}
					disabled={!isSubmitEnabled}
				>
					SUBMIT
				</button>
			</div>
		</form>
	);
}

export default ContactUs;
