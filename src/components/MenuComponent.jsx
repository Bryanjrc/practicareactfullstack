import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries'
import { NavLink } from 'react-router-dom';

export default class MenuComponent extends Component {

    service = new ServiceSeries();

    state = {
        series: []
    }

    loadSeries = () => {
        this.service.getSeries().then((result) => {
            this.setState({
                series: result
            })
        })
    }

    componentDidMount = () => {
        this.loadSeries();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to = "/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/crearpersonaje">Nuevo Personaje</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Series
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.series.map((serie, index) => {
                                            return(
                                                <li key={index}>
                                                    <NavLink className = "dropdown-item" to = {"/serie/" + serie.idSerie}>
                                                        {serie.nombre}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
