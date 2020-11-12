import React, { Fragment, useState } from 'react'
import './Container.css'
import Details from '../../components/Details/Details'
import Header from '../../components/Header/Header'
import Photo from '../../components/Photo/Photo'
import Modal from '../../components/Modal/Modal'

const Container = () => {
	const [size, setSize] = useState()
	const [cart, setCart] = useState({
		item: {
			name: '',
			qty: 0,
			price: '',
			size: '',
		},
	})
	const [modal, setModal] = useState(false)

	const sizeSelectHandler = (e) => {
		setSize(e.target.id)
	}

	const addToCartHandler = () => {
		setCart({
			...cart,
			item: {
				name: 'Classic Tee',
				qty: 1,
				price: '$75',
				size: size,
			},
		})
		console.log(cart)
	}

	const toggleModal = () => {
		setModal(!modal)
	}

	return (
		<Fragment>
			<Header click={toggleModal} />
			<Modal display={modal ? 'block' : 'none'} click={toggleModal} />
			<div className='Container'>
				<Photo />
				<Details sizeSelect={sizeSelectHandler} addToCart={addToCartHandler} />
			</div>
		</Fragment>
	)
}

export default Container
