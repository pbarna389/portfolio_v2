import { createPortal } from 'react-dom'

import { Gallery } from './components'
import type { ModalProps } from './types'

import { handleModalChanges } from '../../utils'

import './Modal.scss'

export const Modal = ({ data, showModal, setModalState, setShowModal }: ModalProps) => {
	return createPortal(
		<div className="modal-wrapper">
			<div className={`modal ${showModal ? 'fade-in' : ''}`}>
				<Gallery pics={data.pics} />

				<h2>{data.name}</h2>
				<h3>Description: </h3>
				<p>{data.desc}</p>

				<button
					type="button"
					className="close-modal btn"
					onClick={() => handleModalChanges(setShowModal, setModalState)}
				>
					Close
				</button>
			</div>
		</div>,
		document.body
	)
}
