import { use } from 'react'

import { ProjectContext } from '..'

export const useProjectContext = () => {
	const context = use(ProjectContext)

	if (!context) {
		throw new Error('ProjectContextProcider is missing')
	}

	return context
}
