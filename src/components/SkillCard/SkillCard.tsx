import { Css3, Html5, Js, ReactLogo, Sass, Ts } from '@assets'

import type { SkillCardProps } from './types'

import '../styles/components/SkillCard.css'

export const SkillCard = ({ skill }: SkillCardProps) => {
	return (
		<div className="skill">
			{skill.toLowerCase() === 'html5' ? (
				<Html5 className="skill" />
			) : skill.toLowerCase() === 'css3' ? (
				<Css3 className="skill" />
			) : skill.toLowerCase() === 'js' ? (
				<Js className="skill" />
			) : skill.toLowerCase() === 'react' ? (
				<ReactLogo className="skill" />
			) : skill.toLowerCase() === 'sass' ? (
				<Sass className="skill" />
			) : (
				<Ts className="skill" />
			)}
		</div>
	)
}
