import React from 'react'
import './ComponentsStyle.css'

export const Card = ({ personaje }) => {
	return (
        <div className="ContentProgram">
            <div className="ContainerCards">
                <h2 className="NameCharacter">{personaje.name}</h2>
                <img className="ImageCharacter" src={personaje.image} alt={personaje.name} />
                <p>{personaje.species} <span>-</span> {personaje.gender}</p>
                <h4>{personaje.status}</h4>
		    </div>
        </div>
	)
}

export default Card;