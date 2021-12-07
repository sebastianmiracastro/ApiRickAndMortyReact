import React from 'react';
import './ComponentsStyle.css'

export const Filtrar = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

	return (
		<section className='filtrar'>
			<input
				className="Filtro"
				type='text'
				placeholder='Nombre del personaje'
				name='buscar'
				onChange={handleInput}
				value={filter}
			/>
		</section>
	)
}

export default Filtrar;