import React from 'react'
import './Sizes.css'

const Sizes = (props) => {
	return (
		<div>
			<input name='sizes' id='small' type='radio' onClick={props.sizeSelect} />

			<label className='option' htmlFor='small'>
				<p>S</p>
			</label>

			<input name='sizes' id='medium' type='radio' onClick={props.sizeSelect} />

			<label className='option' htmlFor='medium'>
				<p>M</p>
			</label>

			<input name='sizes' id='large' type='radio' onClick={props.sizeSelect} />

			<label className='option' htmlFor='large'>
				<p>L</p>
			</label>
		</div>
	)
}

export default Sizes
