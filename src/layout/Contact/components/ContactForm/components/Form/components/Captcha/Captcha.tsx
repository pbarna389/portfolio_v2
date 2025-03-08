import ReCAPTCHA from 'react-google-recaptcha'

import { CAPTCHA_KEY } from '@constants'

import type { CaptchaProps } from './types'

export const Captcha = ({ onChange }: CaptchaProps) => {
	const handleChange = () => {
		onChange((prev) => !prev)
	}

	return <ReCAPTCHA sitekey={CAPTCHA_KEY} theme="dark" onChange={handleChange} />
}
