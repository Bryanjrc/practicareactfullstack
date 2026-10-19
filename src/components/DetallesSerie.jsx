import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries'
import { NavLink } from 'react-router-dom';

export default class DetallesSerie extends Component {

    service = new ServiceSeries();

    state = {
        serie: null
    }

    loadSerie = () => {
        let id = this.props.idserie;
        this.service.findSerie(id).then((result) => {
            this.setState({
                serie: result
            })
        })
    }

    componentDidMount = () => {
        this.loadSerie();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idserie != this.props.idserie) {
            this.loadSerie();
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.serie && (
                        <div>
                            <img src={this.state.serie.imagen} width="300px"/>
                            <h2>{this.state.serie.nombre}</h2>
                            <h2>IMDB: {this.state.serie.puntuacion}</h2>

                            <NavLink to={"/personajes/" + this.props.idserie}
                            className= "btn btn-danger">
                                Ver personajes
                            </NavLink>
                        </div>
                    )
                }
            </div>
        )
    }
}
