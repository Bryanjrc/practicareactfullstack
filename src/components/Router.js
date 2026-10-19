import { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import HomeComponent from "./HomeComponent";
import DetallesSerie from "./DetallesSerie";
import PersonajesSerie from "./PersonajesSerie";
import CrearPersonaje from "./CrearPersonaje";

export default class Router extends Component {
    render() {

        function DetallesSerieElement() {
            let {idserie} = useParams();

            return(
                <DetallesSerie idserie = {idserie}/>
            )
        }

        function PersonajesSerieElement() {
            let {idserie} = useParams();

            return(
                <PersonajesSerie idserie = {idserie}/>
            )
        }

        return(
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route path="/home" element= {<HomeComponent/>} />
                    <Route path="/serie/:idserie" element = {<DetallesSerieElement/>} />
                    <Route path="/personajes/:idserie" element = {<PersonajesSerieElement/>}  />
                    <Route path="/crearpersonaje" element = {<CrearPersonaje/>}  />

                </Routes>
            </BrowserRouter>
        )
    }
}