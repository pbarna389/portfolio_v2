import { Contact, Introduction, Projects, Skills } from '@layout'

export const Home = () => {
	return (
		<main className="home">
			<Introduction />
			<Skills />
			<Projects />
			<Contact />
		</main>
	)
}
