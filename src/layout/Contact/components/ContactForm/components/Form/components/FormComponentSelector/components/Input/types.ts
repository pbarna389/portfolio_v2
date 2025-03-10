import type { UseFormRegister } from 'react-hook-form'

import type { SchemaType } from '../../../../utils'

export type InputProps = {
	labelText: string
	referenceName: keyof SchemaType
	registerProps: UseFormRegister<SchemaType>
	error?: string
}
