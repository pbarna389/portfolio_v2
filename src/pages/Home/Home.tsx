import { ProjectProvider } from '@context'

import { Contact, Introduction, Projects, Skills } from '@layout'

import './Home.scss'

export const Home = () => {
	return (
		<main className="home">
			<Introduction />
			<Skills />
			<ProjectProvider>
				<Projects />
			</ProjectProvider>
			<Contact />
		</main>
	)
}
