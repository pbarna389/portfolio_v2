import { ContactFormError } from '@components'

import type { InputProps } from './types'

export const Input = ({ registerProps, referenceName, labelText, error }: InputProps) => {
	return (
		<>
			<label>{labelText}:</label>
			<input {...registerProps(referenceName)} />
			{error && <ContactFormError message={error} />}
		</>
	)
}
