import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { scan } from 'react-scan'

import { DEVELOPMENT_MODE } from '@constants'

import App from './App.tsx'

import './index.css'

scan({
	enabled: DEVELOPMENT_MODE && true
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
