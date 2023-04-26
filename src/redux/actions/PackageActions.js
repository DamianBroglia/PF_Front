import axios from "axios";
import {getAllPackages, getPackageById, setError} from "../reducer/PackageSlice";

export const getAllPacks = () => async (dispatch) => {
    try {
        //const response = axios(ruta de llamada);
        //dispatch(getAllPackages(response.data));
        dispatch(getAllPackages([{
            "name": "Paquete de turismo en Playa del Carmen",
            "location": "Playa del Carmen, México",
            "price": 1500,
            "duracion": 7,
            "imagen": [
                "https://example.com/image1.jpg",
                "https://example.com/image2.jpg",
                "https://example.com/image3.jpg"
            ],
            "descripcion": "Disfruta de una semana inolvidable en Playa del Carmen, hospedándote en el Hotel Riviera Maya. Incluye todas las comidas en el restaurante del hotel y actividades como tour en lancha por la costa, visita a las ruinas mayas de Tulum y masajes relajantes en el spa del hotel. Cupos limitados. Fechas disponibles: del 1 al 7 de agosto de 2023.",
            "cupos": 10,
            "date": {
                "start": "2023-08-01",
                "end": "2023-08-07"
            },
            "activities": [
                {
                    "name": "bicicleteo",
                    "price": "20 pesos",
                    "duration": "3 horas"
                },
                {
                    "name": "natacion en pileta climatizada",
                    "price": "2 alfajores y un pancho",
                    "duration": "1/2 hora"
                },
            ],
            "hotel": "trivago",
            "restaurant": ""
        }]))
        //esto es un llamado de relleno hasta que se hagan las rutas del back
    } catch (error) {
        dispatch(setError(error.message));
    }
}
