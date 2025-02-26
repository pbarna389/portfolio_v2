import Css3 from '../../assets/SVG/CSS3.svg'
import Html5 from '../../assets/SVG/HTML5.svg'
import JS from '../../assets/SVG/JS.svg'
import SASS from '../../assets/SVG/Sass.svg'
import ReactLogo from '../../assets/SVG/React.svg'
import TS from '../../assets/SVG/TS.svg'

import type { SkillCardProps } from './types'

import './SkillCard.scss'

export const SkillCard = ({ skill }: SkillCardProps) => {
	return (
		<div className="skill">
			{skill.toLowerCase() === 'html5' ? (
				<img src={Html5} className="skill" />
			) : skill.toLowerCase() === 'css3' ? (
				<img src={Css3} className="skill" />
			) : skill.toLowerCase() === 'js' ? (
				<img src={JS} className="skill" />
			) : skill.toLowerCase() === 'react' ? (
				<img src={ReactLogo} className="skill" />
			) : skill.toLowerCase() === 'sass' ? (
				<img src={SASS} className="skill" />
			) : (
				<img src={TS} className="skill" />
			)}
		</div>
	)
}
