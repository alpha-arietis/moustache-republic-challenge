import React from 'react'
import './Photo.css'
import ClassicTee from '../../assets/classic-tee.jpeg'

const Photo = () => {
	return (
		<div className='Photo'>
			<img src={ClassicTee} alt='Classic Tee White' />
		</div>
	)
}

export default Photo
