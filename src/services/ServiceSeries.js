import axios from "axios";
import Global from "../Global"

export default class ServiceSeries {

    getSeries() {
        return new Promise((resolve, reject) => {
            let url = Global.urlApiSeriesPersonaje;
            let request = "api/series";

            axios.get(url + request).then((response) => {
                console.log("Leyendo Series")

                resolve(response.data);
            })
        })
    }


    findSerie(idserie) {
        return new Promise ((resolve, reject) => {
            let url = Global.urlApiSeriesPersonaje;
            let request = "api/series/" + idserie;

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

    getPersonajeSerie(idserie) {
        return new Promise((resolve, reject) => {
            let url = Global.urlApiSeriesPersonaje;
            let request = "api/series/personajesserie/" + idserie;

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

}