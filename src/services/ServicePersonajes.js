import axios from "axios";
import Global from "../Global"

export default class ServicePersonaje {

    getPersonajes() {
        return new Promise((resolve, reject) => {
            let url = Global.urlApiSeriesPersonaje;
            let request = "api/personajes";

            axios.get(url + request).then((response) => {
                console.log("Leyendo Series")

                resolve(response.data)
            })
        })
    }

    findPersonajes(idpersonaje) {
        return new Promise((resolve, reject) => {
            let url = Global.urlApiSeriesPersonaje;
            let request = "api/personajes/" + idpersonaje;

            axios.get(url + request).then((response) => {
                resolve(response.data)
            })
        })
    }

    insertPersonaje(personaje) {
        return new Promise((resolve, reject) => {
            let url = Global.urlApiSeriesPersonaje;
            let request = "api/personajes/";

            axios.post(url + request, personaje).then((response) => {
                resolve(response);
            })
        })
    }
}