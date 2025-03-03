import { ProjectProvider } from '@context'
import { Contact, Introduction, Projects, Skills } from '@layout'

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
