import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Captcha, ContactFormError } from './components'
import { onSubmit, schema } from './utils'

import './Form.scss'

export const Form = () => {
	const [_, setCaptchaSuccessFull] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(schema)
	})

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>First Name:</label>
			<input {...register('firstName')} />
			{errors.firstName?.message && <ContactFormError message={errors.firstName.message} />}
			<label>Last Name:</label>
			<input {...register('lastName')} />
			{errors.lastName?.message && <ContactFormError message={errors.lastName.message} />}
			<label>Email:</label>
			<input {...register('email')} />
			{errors.email?.message && <ContactFormError message={errors.email.message} />}
			<label>Message:</label>
			<textarea {...register('message')}></textarea>
			{errors.message?.message && <ContactFormError message={errors.message.message} />}
			<Captcha onChange={setCaptchaSuccessFull} />
			<button type="submit" className="btn contact-btn">
				Send me a message!
			</button>
		</form>
	)
}
