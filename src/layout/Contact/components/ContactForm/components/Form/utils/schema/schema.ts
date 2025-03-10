import { z } from 'zod'

export const schema = z.object({
	firstName: z
		.string({ required_error: 'Type in your first name' })
		.min(5, { message: 'Minimum characters required: 5' })
		.max(25, { message: 'Maximum characters allowed: 25' }),
	lastName: z
		.string({ required_error: 'Type in your second name' })
		.min(5, { message: 'Minimum characters required: 5' })
		.max(25, { message: 'Maximum characters allowed: 25' }),
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Invalid email address' }),
	message: z
		.string({ required_error: 'A message to me is required' })
		.min(10, { message: 'Minimum characters required: 10' })
		.max(200, { message: 'Maximum characters allowed: 200' })
})

export type SchemaType = z.infer<typeof schema>
