import { useEffect, useState } from 'react'

import { useProjectContext } from '@context'

import inDev01 from './assets/01.jpg'
import inDev02 from './assets/02.jpg'
import inDev03 from './assets/03.jpg'
import Arrow from './assets/Scroll-Arrow.svg'

import './Modal.scss'

export const Modal = () => {
	const [fadeIn, setFadeIn] = useState<boolean>(false)
	const [fadeInTimeoutID, setFadeInTimeoutID] = useState<number | null>(null)
	const [fadeTimeoutID, setFadeTimeoutID] = useState<number | null>(null)

	const [projectPics, setProjectPics] = useState([inDev01, inDev02, inDev03])
	const [showPicture, setShowPicture] = useState<string>()
	const [arrowClick, setArrowClicked] = useState<'left' | 'right' | null>(null)
	const [galleryFadeIn, setGalleryFadeIn] = useState<boolean | null>(null)
	const [galleryFadeOut, setGalleryFadeOut] = useState<boolean | null>(null)
	const [galleryFadeInTOID, setGalleryFadeInTOID] = useState<number | null>(null)
	const [galleryFadeOutTOID, setGalleryFadeOutTOID] = useState<number | null>(null)

	const {
		modalStates: [modalState, setModalState],
		projectSelector: [selectedProject, setSelectedProject],
		fadeoutState: [fadeout, setFadeout]
	} = useProjectContext()

	useEffect(() => {
		modalFadein()
	}, [])

	useEffect(() => {
		if (selectedProject?.pics === null) {
			setShowPicture(projectPics[0])
		}

		if (selectedProject !== null && selectedProject?.pics) {
			setProjectPics(selectedProject.pics)
		}
	}, [])

	useEffect(() => {
		setShowPicture(projectPics[0])
	}, [projectPics])

	useEffect(() => {
		if (arrowClick === 'left') {
			galleryFadeInSet('left')
		}

		if (arrowClick === 'right') {
			galleryFadeInSet('right')
		}
	}, [arrowClick])

	useEffect(() => {
		clearGalleryAnim()
	}, [galleryFadeIn === true])

	const directGalleryFadeIn = (arrow: 'left' | 'right') => {
		setGalleryFadeOut(true)

		const id = window.setTimeout(() => {
			if (arrow === 'left') {
				console.log('rotation - prev')
				rotatePics(projectPics, -1, setProjectPics)
				setGalleryFadeIn(true)
			} else {
				console.log('rotation - right')
				rotatePics(projectPics, 1, setProjectPics)
				setGalleryFadeIn(true)
			}

			setGalleryFadeInTOID(id)
		}, 100)
	}

	const galleryFadeInSet = (arrow: 'left' | 'right') => {
		if (galleryFadeInTOID) {
			clearTimeout(galleryFadeInTOID)
		}

		directGalleryFadeIn(arrow)
	}

	const setClearGalleryAnim = () => {
		const id = window.setTimeout(() => {
			setGalleryFadeIn(null)
			setGalleryFadeOut(null)
			setArrowClicked(null)
		}, 100)

		setGalleryFadeOutTOID(id)
	}

	const clearGalleryAnim = () => {
		if (galleryFadeOutTOID) {
			clearTimeout(galleryFadeOutTOID)
		}

		setClearGalleryAnim()
	}

	const handleAnimFadein = () => {
		const id = window.setTimeout(() => {
			setFadeIn(true)
		}, 50)

		setFadeInTimeoutID(id)
	}

	const modalFadein = (): void => {
		if (fadeInTimeoutID) {
			clearTimeout(fadeInTimeoutID)
		}

		handleAnimFadein()
	}

	const handleAnimFadeout = () => {
		setFadeout(true)
		const id = window.setTimeout(() => {
			setModalState(!modalState)
			setSelectedProject(undefined)
			setFadeout(false)
		}, 500)

		setFadeTimeoutID(id)
	}

	const modalFadeout = (): void => {
		if (fadeTimeoutID) {
			clearTimeout(fadeTimeoutID)
		}

		handleAnimFadeout()
	}

	const handleClick = () => {
		modalFadeout()
	}

	const rotatePics = (
		arr: any,
		num: number,
		setState: React.Dispatch<React.SetStateAction<any>>
	) => {
		const newArr = [...arr]

		num -= newArr.length * Math.floor(num / newArr.length)

		const selectedElements = newArr.splice(0, num)

		newArr.push([...newArr, selectedElements])

		setState(newArr)
		setShowPicture(newArr[0])
	}

	const nextPic = () => {
		setArrowClicked('right')
	}

	const prevPic = () => {
		setArrowClicked('left')
	}

	return (
		<div className="modal-wrapper">
			<div className={fadeout ? 'modal fade-out' : fadeIn ? 'modal shown' : 'modal'}>
				<div
					className={
						galleryFadeIn && galleryFadeOut
							? 'gallery fad-out fadeIn'
							: galleryFadeOut
								? 'gallery fade-out'
								: 'gallery'
					}
				>
					<img src={showPicture} />
				</div>
				<div className="btn-wrapper">
					<button type="button" className="btn-prev" onClick={() => prevPic()}>
						<img src={Arrow} style={{ height: '2rem', width: '2rem', rotate: '180deg' }} />
					</button>
					<button type="button" className="btn-next" onClick={() => nextPic()}>
						<img src={Arrow} style={{ height: '2rem', width: '2rem' }} />
					</button>
				</div>
				{selectedProject && (
					<>
						<h2>{selectedProject.name}</h2>
						<h3>Description: </h3>
						<p>{selectedProject.desc}</p>
					</>
				)}
				<button type="button" className="close-modal btn" onClick={() => handleClick()}>
					Close
				</button>
			</div>
		</div>
	)
}
