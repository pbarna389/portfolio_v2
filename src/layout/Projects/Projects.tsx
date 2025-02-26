import { useState } from 'react'

import { useProjectContext } from '@context'
import { Modal, Parallax, ProjectCard } from '@components'
import { useIntersectionObserver } from '@hooks'

import './Projects.scss'

export const Projects = () => {
	const options = {
		threshold: 0.2
	}

	const [visibility, setVisibility] = useState<boolean>(false)
	const [elementRef] = useIntersectionObserver(setVisibility, options)

	const {
		projects,
		modalStates: [modalState]
	} = useProjectContext()

	return (
		<section
			ref={elementRef}
			id="projects"
			className={`section projects ${visibility ? 'show' : ''}`}
		>
			<Parallax
				url="https://res.cloudinary.com/practicaldev/image/fetch/s--iNayE4dm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ui5xn1qpp4sgee1mryey.jpeg"
				section_name="Projects"
			/>
			<div className="grid-wrapper">
				{projects.map((project) => (
					<ProjectCard key={project.id} name={project.name} finished={project.finished} />
				))}
			</div>
			{modalState ? <Modal key={'modal'} /> : null}
		</section>
	)
}
