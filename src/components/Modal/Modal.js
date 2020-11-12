import React from 'react'
import './Modal.css'
import ClassicTee from '../../assets/classic-tee.jpeg'

const Modal = (props) => {
	return (
		<div className='Modal' onClick={props.click} style={{ display: props.display }}>
			<img src={ClassicTee} alt='Classic Tee White' />
			<p>Classic Tee</p>
			<p>
				<strong>1x $75</strong>
			</p>
			<p>Size: S</p>
			<br />
			<br />
			<img src={ClassicTee} alt='Classic Tee White' />
			<p>Classic Tee</p>
			<p>
				<strong>3x $75</strong>
			</p>
			<p>Size: L</p>
		</div>
	)
}

export default Modal
