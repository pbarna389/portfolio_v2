import { useEffect, useState } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'

import {
	CAPTCHA_KEY,
	EMAIL_JS_SERVICE_ID,
	EMAIL_JS_TEMPLATE_ID,
	EMAIL_JS_USER_ID
} from '@constants'

import { ContactFormError } from '../ContactFormError'

import './Form.scss'

export const Form = () => {
	const [isCaptchaSucessful, setIsCaptchaSuccessful] = useState<boolean>(false)
	const [sendConditions, setSendConditions] = useState<boolean>(false)
	const [firstName, setFirstName] = useState<string>()
	const [secondName, setSecondName] = useState<string>()
	const [email, setEmail] = useState<string>()
	const [message, setMessage] = useState<string>()

	useEffect(() => {
		if (firstName && secondName && email && message) {
			if (
				(firstName.length > 4 &&
					secondName.length > 3 &&
					message.length > 11 &&
					email.length > 3 &&
					email.length > 3 &&
					email.includes('@') &&
					email.includes('.') &&
					// && email.endsWith(/(com)|(hu)|(pl)|(gb)|(ru)|(swe)|(nl)/g)
					email.endsWith('.com') &&
					email.endsWith('.hu') &&
					email.endsWith('.pl') &&
					email.endsWith('.ru')) ||
				(firstName.length > 4 &&
					secondName.length > 3 &&
					message.length > 11 &&
					email.length > 3 &&
					email.includes('@') &&
					email.includes('.') &&
					email[email.indexOf('@') + 1] !== '.' &&
					// && email.endsWith(/(com)|(hu)|(pl)|(gb)|(ru)|(swe)|(nl)/g)
					email.endsWith('.com') &&
					email.endsWith('.hu') &&
					email.endsWith('.pl') &&
					email.endsWith('.ru'))
			) {
				console.log(message.length)
				setSendConditions(true)
			} else {
				setSendConditions(false)
			}
		}
	}, [firstName, secondName, email, message])

	const handleSubmit = (e: React.FormEvent) => {
		console.log(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_USER_ID)
		e.preventDefault()

		if (
			typeof firstName === 'string' &&
			typeof secondName === 'string' &&
			typeof email === 'string' &&
			typeof message === 'string'
		) {
			const mailTemplateParam = {
				from_name: `${firstName} ${secondName}`,
				from_email: email,
				message
			}

			emailjs
				.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, mailTemplateParam, EMAIL_JS_USER_ID)
				.then(
					(result) => {
						console.log(result.text)
					},
					(error) => {
						console.log(error.text)
					}
				)

			console.log('IT WORKS')
		} else {
			console.log("Something won't work")
		}

		console.log(e.target)
	}

	const captchaOnChange = () => {
		setIsCaptchaSuccessful(true)
	}

	const handleExpiredChange = () => {
		setIsCaptchaSuccessful(false)
	}

	const handleOnChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		setState: React.Dispatch<React.SetStateAction<string | undefined>>
	): void => {
		if (e.target !== null) {
			const { value } = e.target

			if (value[0] !== value[0].toUpperCase()) {
				console.log('low case first letter')
				const firstLetter = value.charAt(0).toUpperCase()
				const restLetters = value.split('')

				restLetters.shift()
				const newValue = firstLetter + restLetters.join('')

				setState(newValue)
				console.log(newValue)
			} else {
				console.log(value)
				setState(value)
			}
		}
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<label>First Name*</label>
			<input
				type="text"
				placeholder="First Name..."
				value={firstName}
				onChange={(e) => handleOnChange(e, setFirstName)}
				required
			/>
			{firstName && firstName.length >= 0 && firstName.length <= 4 && (
				<ContactFormError message="Type in more than 4 letters!" />
			)}
			<label>Last Name*</label>
			<input
				type="text"
				placeholder="Last Name..."
				value={secondName}
				onChange={(e) => handleOnChange(e, setSecondName)}
				required
			/>
			{secondName && secondName.length >= 0 && secondName.length <= 3 && (
				<ContactFormError message="Type in more than 3 letters!" />
			)}
			<label>Email*</label>
			<input
				type="email"
				placeholder="Email..."
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			{email &&
			email.length > 0 &&
			email.length <= 3 &&
			!email.includes('@') &&
			!email.includes('.') ? (
				<ContactFormError message="Invalid e-mail format!" />
			) : email &&
			  email.length > 0 &&
			  email.length <= 3 &&
			  email.includes('@') &&
			  !email.includes('.') ? (
				<ContactFormError message="Invalid e-mail format!" />
			) : email &&
			  email.length > 0 &&
			  email.length <= 3 &&
			  !email.includes('@') &&
			  email.includes('.') ? (
				<ContactFormError message="Invalid e-mail format!" />
			) : email &&
			  email.length > 0 &&
			  email.length <= 3 &&
			  email.includes('@') &&
			  email.includes('.') ? (
				<ContactFormError message="Invalid e-mail format!" />
			) : email && email.length > 3 && !email.includes('@') && !email.includes('.') ? (
				<ContactFormError message="Invalid e-mail format!" />
			) : email && email.length > 3 && email.includes('@') && !email.includes('.') ? (
				<ContactFormError message="Invalid e-mail format!" />
			) : email && email.length > 3 && !email.includes('@') && email.includes('.') ? (
				<ContactFormError message="Invalid e-mail format!" />
			) : (email &&
					email.length > 3 &&
					email.includes('@') &&
					email.includes('.') &&
					!email.endsWith('.com') &&
					!email.endsWith('.hu') &&
					!email.endsWith('.pl') &&
					!email.endsWith('.ru')) ||
			  (email &&
					email.length > 3 &&
					email.includes('@') &&
					email.includes('.') &&
					email[email.indexOf('@') + 1] === '.') ? (
				<ContactFormError message="Invalid e-mail format!" />
			) : null}
			<label>Message*</label>
			<textarea
				placeholder="Message..."
				required
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			></textarea>
			{message && message.length >= 0 && message.length <= 10 && (
				<ContactFormError message="Type in more than 10 letters!" />
			)}
			<ReCAPTCHA
				sitekey={CAPTCHA_KEY}
				onChange={captchaOnChange}
				onExpired={handleExpiredChange}
				theme={'dark'}
				hl="en-GB"
			/>
			<button
				type="submit"
				disabled={(!isCaptchaSucessful && !sendConditions) || !isCaptchaSucessful || !sendConditions}
				className="btn contact-btn"
			>
				Send me a message!
			</button>
		</form>
	)
}
