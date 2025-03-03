import { useState } from 'react'

import { timeoutTime } from './constants'
import type { GalleryProps } from './types'

import Arrow from './assets/Scroll-Arrow.svg'

import './Gallery.scss'

export const Gallery = ({ pics }: GalleryProps) => {
	const [idx, setIdx] = useState<number>(0)
	const [pictureRotate, setPictureRotate] = useState<boolean>(false)

	const handlePicRotation = (direction: 'left' | 'right') => {
		if ((idx === 0 && direction === 'left') || (idx === pics.length - 1 && direction === 'right')) {
			return
		}

		setPictureRotate(true)

		const handleSetting = () => {
			setIdx((prev) => (direction === 'left' ? prev - 1 : prev + 1))
			setPictureRotate((prev) => !prev)
		}

		return setTimeout(() => handleSetting(), timeoutTime)
	}

	return (
		<div className={`gallery`}>
			<img className={`${pictureRotate ? 'fade-in' : ''}`} src={pics[idx]} />
			<div className="btn-wrapper">
				<button type="button" className="btn-prev" disabled={idx === 0}>
					<img className="arrow reverse" src={Arrow} onClick={() => handlePicRotation('left')} />
				</button>
				<button
					type="button"
					className="btn-next"
					disabled={idx === pics.length - 1}
					onClick={() => handlePicRotation('right')}
				>
					<img className="arrow" src={Arrow} />
				</button>
			</div>
		</div>
	)
}
