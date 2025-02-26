import { useEffect, useRef } from 'react'

export const useIntersectionObserver = (
	setState: React.Dispatch<React.SetStateAction<boolean>>,
	options: IntersectionObserverInit = {}
) => {
	const elementRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const callbackFunction = (entries: IntersectionObserverEntry[]) => {
			const [entry] = entries

			if (entry.isIntersecting) {
				setState(entry.isIntersecting)
				console.log(entry)
			}
		}

		const observer = new IntersectionObserver(callbackFunction, options)

		if (elementRef.current) observer.observe(elementRef.current)
	}, [elementRef, setState, options])

	return [elementRef]
}
