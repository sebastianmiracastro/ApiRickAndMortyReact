import { useState, useEffect } from 'react'
import { Filtrar } from './Components/Filtrar'
import { Card } from './Components/Card';
import logo from './logo.svg'
import './App.css'

function App() {
	const [personajes, setPersonajes] = useState([])
	const [loading, setLoading] = useState(true)
	const [filter, setFilter] = useState('')

	useEffect(() => {
		const getPersonajes = async () => {
			try {
				const response = await fetch(
					'https://rickandmortyapi.com/api/character'
				)
				const data = await response.json()
				setPersonajes(data.results)
				setLoading(false)
			} catch (error) {
				console.log(error)
			}
		}
		getPersonajes()
	}, [])

	const personjesFiltrados = personajes.filter((personaje) =>
		personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	)

	return (
		<div className='container'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="APILink">Rick and Morty API - REACT</a>
        <Filtrar filter={filter} setFilter={setFilter} />
      </header>
			<section className='ContainerProgram'>
				{loading ? (
					<p>Cargando...</p>
				) : personjesFiltrados.length > 0 ? (
					personjesFiltrados.map((personaje) => (
						<Card key={personaje.id} personaje={personaje} />
					))
				) : (
					<p>
						No Se Encontro El Personaje Puesto{' '}
						<strong>"{filter}"</strong>.
					</p>
				)}
			</section>
		</div>
	)
}

export default App
