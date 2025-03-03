import { techImages } from './constants'
import type { SkillCardProps } from './types'

import './SkillCard.scss'

export const SkillCard = ({ skill }: SkillCardProps) => {
	return (
		<div className="skill">
			<img src={techImages[skill]} className="skill" />
		</div>
	)
}
