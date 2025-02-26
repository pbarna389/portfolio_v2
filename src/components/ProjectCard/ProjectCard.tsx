import { useProjectContext } from '@context'

import type { ProjectCardProps } from './types'

import './ProjectCard.scss'

export const ProjectCard = ({ name, finished }: ProjectCardProps) => {
	const {
		projects,
		modalStates: [modalState, setModalState],
		projectSelector: [, setSelectedProject]
	} = useProjectContext()

	const handleClick = () => {
		const selectProject = projects.filter((project) => project.name === name)

		setModalState(!modalState)
		setSelectedProject(selectProject[0])
	}

	return (
		<div className="project-card">
			<h4>{name}</h4>
			<button type="button" className="btn" disabled={!finished} onClick={() => handleClick()}>
				Details
			</button>
		</div>
	)
}
