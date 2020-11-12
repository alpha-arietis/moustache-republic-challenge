import React from 'react'
import './Details.css'
import Sizes from '../Sizes/Sizes'

const Details = (props) => {
	return (
		<div className='Details'>
			<h3>Classic Tee</h3>
			<br />
			<hr />
			<h4>$75</h4>
			<hr />
			<br />
			<p>
				The origins of the t-shirt date back to the late 19th century, when laborers would cut their
				jumpsuits in half to keep cool in warmer months during the year. The first manufactured
				t-shirt was invented between the Mexican-American War in 1898, and 1913 when the U.S. Navy
				began issuing them as standard undershirts.
			</p>
			<br />
			<Sizes sizeSelect={props.sizeSelect} />
			<br />
			<br />
			<br />
			<button onClick={props.addToCart}>ADD TO CART</button>
		</div>
	)
}

export default Details
