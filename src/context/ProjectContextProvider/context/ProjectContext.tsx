import { createContext } from 'react'

import type { IProjectContext } from './types'

export const ProjectContext = createContext<IProjectContext | null>(null)
