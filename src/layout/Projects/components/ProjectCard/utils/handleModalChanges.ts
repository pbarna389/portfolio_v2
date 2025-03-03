export const handleModalChanges = (
	setFirstState: React.Dispatch<React.SetStateAction<boolean>>,
	setSecondState: React.Dispatch<React.SetStateAction<boolean>>
) => {
	setFirstState((prev) => !prev)

	setTimeout(() => {
		setSecondState((prev) => !prev)
	}, 250)
}
