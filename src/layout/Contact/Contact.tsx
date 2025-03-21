import { useState } from 'react'

import { Parallax } from '@components'
import { useIntersectionObserver } from '@hooks'

import { ContactForm } from './components'
import { options } from './constants'

import './Contact.scss'

export const Contact = () => {
	const [visibility, setVisibility] = useState<boolean>(false)
	const [elementRef] = useIntersectionObserver(setVisibility, options)

	return (
		<section ref={elementRef} id="contact" className={`section contact ${visibility ? 'show' : ''}`}>
			<Parallax
				url="https://img.freepik.com/premium-photo/contact-us_36325-2135.jpg?w=1480"
				section_name="Contact"
			/>
			<ContactForm />
		</section>
	)
}
