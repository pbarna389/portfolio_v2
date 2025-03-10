import emailjs from '@emailjs/browser'

import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_USER_ID } from '@constants'

import type { SchemaType } from './schema'

export const onSubmit = (data: SchemaType) => {
	const mailTemplateParam = {
		from_name: `${data.firstName} ${data.lastName}`,
		from_email: data.email,
		message: data.message
	}

	emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, mailTemplateParam, EMAIL_JS_USER_ID)
}
