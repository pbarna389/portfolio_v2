import type { SchemaType } from '../utils'

type FormDetailsType = {
	labelText: string
	referenceName: keyof SchemaType
	type: 'input' | 'textArea'
}

export const formDetails: FormDetailsType[] = [
	{ labelText: 'First Name', referenceName: 'firstName', type: 'input' },
	{ labelText: 'Last Name', referenceName: 'lastName', type: 'input' },
	{ labelText: 'Email', referenceName: 'email', type: 'input' },
	{ labelText: 'Message', referenceName: 'message', type: 'textArea' }
]
