import type { ParallaxProps } from './types'

import './Parallax.scss'

export const Parallax = ({ url, section_name = 'not added' }: ParallaxProps) => {
	return (
		<>
			<div className="parallax" style={{ backgroundImage: `url(${url})` }}>
				<div className="helper arrow-top-left"></div>
				<div className="helper arrow-top-right"></div>
				<div className="helper arrow-bottom-left"></div>
				<div className="helper arrow-bottom-right"></div>
				<div id={`#${section_name}`} className="section-name">
					{section_name}
				</div>
			</div>
		</>
	)
}
