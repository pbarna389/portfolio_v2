import { useState } from 'react'

import { Parallax } from '@components'
import { useIntersectionObserver } from '@hooks'
import { observerThreshold } from '@constants'

import { ProjectCard } from './components'
import { projects } from './constants'

import './Projects.scss'

export const Projects = () => {
	const [visibility, setVisibility] = useState<boolean>(false)
	const [elementRef] = useIntersectionObserver(setVisibility, observerThreshold)

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
					<ProjectCard key={project.id} data={project} finished={project.finished} />
				))}
			</div>
		</section>
	)
}
