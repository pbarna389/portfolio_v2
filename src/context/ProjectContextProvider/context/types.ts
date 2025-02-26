import type { Project } from '@types'

export type IProjectContext = {
	fadeoutState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
	modalStates: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
	projects: Project[]
	projectSelector: [Project | undefined, React.Dispatch<React.SetStateAction<Project | undefined>>]
}
