import { useState } from 'react'

import './Header.scss'

export const Navbar = () => {
	const [show, setShow] = useState(true)

	return (
		<header>
			<div className={show ? 'header-main show' : 'header-main'}>
				<div className="icon-wrapper">
					<span>
						<a target="#intro">Icon</a>
					</span>
				</div>
				<div className="options-wrapper">
					<span>
						<a target="#skills">Skills</a>
					</span>
					<span>
						<a target="#projects">Projects</a>
					</span>
					<span>
						<a target="#contact">Contact</a>
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
