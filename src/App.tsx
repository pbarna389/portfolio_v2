import './assets/Fonts/Revamped-X3q1a.ttf'
import { Footer } from 'layout/Footer/Footer'
import { Navbar } from 'layout/Navbar/Navbar'

import { Home } from '@pages'

import './App.scss'

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Home />
			<Footer />
		</div>
	)
}

export default App
