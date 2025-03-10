import type { UseFormRegister } from 'react-hook-form'

import type { SchemaType } from '../../utils'

export type FormComponentSelectorProps = {
	labelText: string
	referenceName: keyof SchemaType
	registerProps: UseFormRegister<SchemaType>
	type: 'input' | 'textArea'
	error?: string
}
