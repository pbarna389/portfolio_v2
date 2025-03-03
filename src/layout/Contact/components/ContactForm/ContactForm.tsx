import { ContactText, Form } from './components'

import './ContactForm.scss'

export const ContactForm = () => {
	return (
		<div className="contact-wrapper">
			<Form />
			<ContactText />
		</div>
	)
}
