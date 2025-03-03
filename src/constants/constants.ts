import type { SkillsValues } from '@types'

export const CAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY
export const EMAIL_JS_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID
export const EMAIL_JS_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID
export const EMAIL_JS_USER_ID = import.meta.env.VITE_EMAIL_PUBLIC_KEY
export const DEVELOPMENT_MODE = import.meta.env.VITE_DEVELOPMENT_MODE

export const observerThreshold = {
	threshold: 0.2
}

export const skills: SkillsValues[] = ['Html5', 'Css3', 'Js', 'React', 'Sass', 'Ts']
