import type { IntroTextProps } from './types'

import './IntroText.scss'

export const IntroText = ({ header, text }: IntroTextProps) => {
	const headerText: string[] = [...header]
	const firstLetter: string = headerText.splice(0, 1).join()

	return (
		<div className="text-wrapper">
			<h1>
				<span>{firstLetter}</span>
				{headerText.join('')}
			</h1>
			<p className="sub-text">{text}</p>
		</div>
	)
}
