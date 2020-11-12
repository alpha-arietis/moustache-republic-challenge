import React from 'react'
import './Header.css'

const Header = (props) => {
	return (
		<div className='Header'>
			<p onClick={props.click}>My Cart (4)</p>
		</div>
	)
}

export default Header
