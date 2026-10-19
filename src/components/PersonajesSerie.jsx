import React, { Component } from 'react'
import ServicePersonaje from '../services/ServicePersonajes'
import { NavLink } from 'react-router-dom';
import ServiceSeries from '../services/ServiceSeries';

export default class PersonajesSerie extends Component {
    
    service = new ServiceSeries();

    state = {
        personajes: []
    }

    loadPersonajes = () => {
        let idserie = this.props.idserie;

        this.service.getPersonajeSerie(idserie).then((result) => {
            this.setState({
                personajes: result
            })
        })
    }


    componentDidMount = () => {
        this.loadPersonajes();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idserie != this.props.idserie) {
            this.loadPersonajes();
        }
    }


    render() {
        return (
            <div>
                <h1>Personajes de {this.props.idserie}</h1>

                <NavLink to={"/serie/" + this.props.idserie}
                className= "btn btn-danger">
                    Volver a serie
                </NavLink>

                <table className='table table-danger table-bordered'>
                    <thead>
                        <th>Personaje</th>
                        <th>Imagen</th>
                    </thead>

                    <tbody>
                        {
                            this.state.personajes.map((p, index) => {
                                return(
                                <tr key={index}>
                                    <td>{p.nombre}</td>
                                    <td><img src={p.imagen} alt={p.nombre} style={{ width: '100px', height: '100px' }} /></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
