import { useState } from 'react'

import './Navbar.scss'

export const Navbar = () => {
	const [show, setShow] = useState(true)

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
			<span
				className={show ? 'hamburger-menu menu-show' : 'hamburger-menu'}
				onClick={() => setShow(!show)!}
			></span>
		</header>
	)
}
