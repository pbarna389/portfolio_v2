import { Home } from '@pages'
import { Footer } from 'layout/Footer/Footer'
import { Navbar } from 'layout/Navbar/Navbar'

import './assets/Fonts/Revamped-X3q1a.ttf'

import './App.scss'

export const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Footer />
		</div>
	)
}
