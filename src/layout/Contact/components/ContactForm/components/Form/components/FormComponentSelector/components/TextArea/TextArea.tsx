import { ContactFormError } from '@components'

import type { TextAreaProps } from './types'

export const TextArea = ({ registerProps, referenceName, labelText, error }: TextAreaProps) => {
	return (
		<>
			<label>{labelText}:</label>
			<textarea {...{ ...registerProps(referenceName) }}></textarea>
			{error && <ContactFormError message={error} />}
		</>
	)
}
