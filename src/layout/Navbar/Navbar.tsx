import { useEffect, useRef, useState } from 'react'

import './Navbar.scss'

export const Navbar = () => {
	const [show, setShow] = useState(true)

	const prevValue = useRef(0)

	useEffect(() => {
		const checkForThreshold = () => {
			setShow(window.scrollY <= prevValue.current)

			prevValue.current = window.scrollY
		}

		window.addEventListener('scroll', checkForThreshold)

		return () => window.removeEventListener('scroll', checkForThreshold)
	}, [])

	return (
		<header>
			<div className={show ? 'header-main show' : 'header-main'}>
				<div className="icon-wrapper">
					<span>
						<a href="#intro">Icon</a>
					</span>
				</div>
				<div className="options-wrapper">
					<span>
						<a href="#skills">Skills</a>
					</span>
					<span>
						<a href="#projects">Projects</a>
					</span>
					<span>
						<a href="#contact">Contact</a>
					</span>
				</div>
			</div>
		</header>
	)
}
