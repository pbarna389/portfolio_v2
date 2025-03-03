import type { SkillsValues } from '@types'

import Css3 from '../../../assets/SVG/CSS3.svg'
import Html5 from '../../../assets/SVG/HTML5.svg'
import Js from '../../../assets/SVG/JS.svg'
import ReactLogo from '../../../assets/SVG/React.svg'
import Sass from '../../../assets/SVG/Sass.svg'
import Ts from '../../../assets/SVG/TS.svg'

type TechImageProps = {
	[key in SkillsValues]: string
}

export const techImages: TechImageProps = { Css3, Html5, Js, React: ReactLogo, Sass, Ts }
