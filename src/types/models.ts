export type Project = {
	desc: string
	finished: boolean
	readonly id: number
	name: string
	pics: string[] | null
}

export type SkillsValues = Capitalize<'html5' | 'css3' | 'js' | 'react' | 'sass' | 'ts'>
