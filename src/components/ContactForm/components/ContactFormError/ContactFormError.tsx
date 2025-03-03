import type { ContactFormErrorParams } from './types'

export const ContactFormError = ({ message }: ContactFormErrorParams) => {
	return <div>{message}</div>
}
