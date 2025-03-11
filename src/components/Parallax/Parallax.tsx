import type { ParallaxProps } from './types'

import './Parallax.scss'

export const Parallax = ({ url, section_name = 'not added' }: ParallaxProps) => {
	return (
		<div className="flex parallax" style={{ backgroundImage: `url(${url})` }}>
			<div id={`#${section_name}`} className="section-name">
				{section_name}
			</div>
		</div>
	)
}
