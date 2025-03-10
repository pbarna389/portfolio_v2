import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormComponentSelector, SubmitBtn } from './components'
import { onSubmit, schema } from './utils'
import { formDetails } from './constants'

import './Form.scss'

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(schema)
	})

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{formDetails.map(({ type, labelText, referenceName }) => (
				<FormComponentSelector
					key={referenceName}
					labelText={labelText}
					type={type}
					registerProps={register}
					referenceName={referenceName}
					error={errors[referenceName]?.message}
				/>
			))}
			<SubmitBtn />
		</form>
	)
}
