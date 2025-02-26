import { useState } from 'react'

import { Parallax, SkillCard } from '@components'
import { useIntersectionObserver } from '@hooks'

import { options, skills } from './constants'

import './Skills.scss'

export const Skills = () => {
	const [visibility, setVisibility] = useState<boolean>(false)
	const [elementRef] = useIntersectionObserver(setVisibility, options)

	return (
		<section ref={elementRef} id="skills" className={`section skills ${visibility ? 'show' : ''}`}>
			<Parallax
				url="https://wallpapertag.com/wallpaper/full/7/3/2/154689-cool-coding-background-1920x1280-for-tablet.jpg"
				section_name="Skills"
			/>
			<div className="grid-wrapper">
				{skills?.map((skill) => <SkillCard key={skill} skill={skill} />)}
			</div>
		</section>
	)
}
