import { Input, TextArea } from './components'
import type { FormComponentSelectorProps } from './types'

export const FormComponentSelector = ({
	registerProps,
	referenceName,
	labelText,
	error,
	type
}: FormComponentSelectorProps) => {
	return {
		input: (
			<Input
				labelText={labelText}
				referenceName={referenceName}
				registerProps={registerProps}
				error={error}
			/>
		),
		textArea: (
			<TextArea
				labelText={labelText}
				referenceName={referenceName}
				registerProps={registerProps}
				error={error}
			/>
		)
	}[type]
}
