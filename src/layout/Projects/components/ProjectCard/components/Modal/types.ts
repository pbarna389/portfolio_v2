import type { Dispatch, SetStateAction } from 'react'

import type { Project } from '@types'

export type ModalProps = {
	data: Project
	setModalState: Dispatch<SetStateAction<boolean>>
}
