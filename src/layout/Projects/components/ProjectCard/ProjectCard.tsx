import { useState } from 'react'

import { Modal } from './components'
import { handleModalChanges } from './utils'
import type { ProjectCardProps } from './types'

import './ProjectCard.scss'

export const ProjectCard = ({ data, finished }: ProjectCardProps) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const [showModal, setShowModal] = useState<boolean>(false)

	return (
		<div className="project-card">
			<h4>{data.name}</h4>
			<button
				type="button"
				className="btn"
				disabled={!finished}
				onClick={() => handleModalChanges(setModalOpen, setShowModal)}
			>
				Details
			</button>
			{modalOpen && (
				<Modal
					key={'modal'}
					data={data}
					setModalState={setModalOpen}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			)}
		</div>
	)
}
