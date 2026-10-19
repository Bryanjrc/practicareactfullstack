import React, { Component } from 'react'
import ServicePersonaje from '../services/ServicePersonajes';
import ServiceSeries from '../services/ServiceSeries';
import { Navigate } from 'react-router-dom';

export default class CrearPersonaje extends Component {

    servicePersonajes = new ServicePersonaje();
    serviceSeries = new ServiceSeries();

    cajaidPersonaje = React.createRef();
    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    selectSerie = React.createRef();

    state = {
        series: [],
        idSerieSeleccionada: null,
        status: false
    }

    componentDidMount = () => {
        this.serviceSeries.getSeries().then((result) => {
            this.setState({
                series: result
            })
        })
    }

    insertPersonaje = (event) => {
        event.preventDefault();
        let idSerie = parseInt(this.selectSerie.current.value);
        let personaje = {
            idPersonaje: 1,
            nombre: this.cajaNombre.current.value,
            imagen: this.cajaImagen.current.value,
            idSerie: idSerie
        };

        this.servicePersonajes.insertPersonaje(personaje).then((result) => {
            this.setState({
                status: true
            })
        })
    }

    render() {

        if(this.state.status == true) {
            return (
                <Navigate to = {"/personajes/" + this.state.idSerieSeleccionada } />
            )   
            }

        return (

            <div>
                <form onSubmit={this.insertPersonaje}>
                    <h1>Nuevo Personaje</h1>

                    <label>Nombre: </label>
                    <input type="text" ref={this.cajaNombre} className='form-control'/>

                    <label>Imagen: </label>
                    <input type="text" ref={this.cajaImagen} className='form-control'/>

                    <label>Serie: </label>
                    <select ref={this.selectSerie} className='form-control'>
                        {
                            this.state.series.map((serie) => (
                                <option key={serie.idSerie} value={serie.idSerie}>
                                    {serie.nombre}
                                </option>
                            ))
                        }
                    </select>

                    <button className='btn btn-success'>
                        Insertar Personaje
                    </button>

                    
                </form>
            </div>
        )
    }
}
