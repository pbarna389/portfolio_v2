import { createPortal } from 'react-dom'

import type { ModalProps } from './types'

import inDev01 from '../../../../../../assets/Images/placeholder/01.jpg'

import Arrow from './assets/Scroll-Arrow.svg'

import './Modal.scss'

export const Modal = ({ setModalState, data }: ModalProps) => {
	return createPortal(
		<div className="modal-wrapper">
			<div className={`modal`}>
				<div className={`gallery`}>
					<img src={inDev01} />
				</div>
				<div className="btn-wrapper">
					<button type="button" className="btn-prev">
						<img src={Arrow} style={{ height: '2rem', width: '2rem', rotate: '180deg' }} />
					</button>
					<button type="button" className="btn-next">
						<img src={Arrow} style={{ height: '2rem', width: '2rem' }} />
					</button>
				</div>

				<h2>{data.name}</h2>
				<h3>Description: </h3>
				<p>{data.desc}</p>

				<button
					type="button"
					className="close-modal btn"
					onClick={() => setModalState((prev) => !prev)}
				>
					Close
				</button>
			</div>
		</div>,
		document.body
	)
}
