import { useState, useEffect } from "react";
import { validation } from "./validation";
//import { useDispatch } from "react-redux";
//import { getAllPacks } from "../../redux/actions/PackageActions";

export default function CreatePackageForm() {
    //const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        name: "",
        location: "",
        price: "",
        duration: "",
        img: "",
        description: "",
        quotas: "",
        date: "",
        hotel: "",
        restaurant: "",
        activities: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        location: "",
        price: "",
        duration: "",
        img: "",
        description: "",
        quotas: "",
        date: "",
        hotel: "",
        restaurant: "",
        activities: ""
    });

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(errors).length === 0){
            alert(Object.values(inputs));
            //aca iria el dispatch, el formateo de las actividades y luego la confirmacion de que todo se envio
            //o la advertencia de que el paquete ya existe
        } else alert(Object.values(errors));
    }
    
    useEffect(() => {
        setErrors(validation(inputs));
    }, [inputs])

    return (
        <form onSubmit={handleSubmit}>
            <label>Package name:
                <input
                type="text"
                name="name"
                value={inputs.name}
                placeholder="nombre del paquete"
                onChange={handleChange}
                />
                <br/>
                {errors.name && <p>{errors.name}</p>}
            </label>
            <br/>
            <label>Location:
                <input
                type="text"
                name="location"
                value={inputs.location}
                placeholder="ubicacion donde se turistea"
                onChange={handleChange}
                />
                <br/>
                {errors.location && <p>{errors.location}</p>}
            </label>
            <br/>
            <label>Price:
                <input
                type="number"
                name="price"
                value={inputs.price}
                placeholder="precio del paquete"
                onChange={handleChange}
                />
                <br/>
                {errors.price && <p>{errors.price}</p>}
            </label>
            <br/>
            <label>Duration:
                <input
                type="number"
                name="duration"
                value={inputs.duration}
                placeholder="duracion del viaje en dias"
                onChange={handleChange}
                />
                <br/>
                {errors.duration && <p>{errors.duration}</p>}
            </label>
            <br/>
            <label>Image:
                <input
                type="text"
                name="img"
                value={inputs.img}
                placeholder="imagen para vender el paquete"
                onChange={handleChange}
                />
                <br/>
                {errors.img && <p>{errors.img}</p>}
            </label>
            <br/>
            <label>Description:
                <textarea
                type="text"
                name="description"
                value={inputs.description}
                placeholder="descripcion del paquete y de la zona en general"
                onChange={handleChange}
                />
                <br/>
                {errors.description && <p>{errors.description}</p>}
            </label>
            <br/>
            <label>Quotas: 
                <input
                type="number"
                name="quotas"
                value={inputs.quotas}
                placeholder="cantidad de cupos maximos"
                onChange={handleChange}
                />
                <br/>
                {errors.quotas && <p>{errors.quotas}</p>}
            </label>
            <br/>
            <label>Dates:
                <input
                type="text"
                name="date"
                value={inputs.date}
                placeholder="fechas disponibles"
                onChange={handleChange}
                />
                <br/>
                {errors.date && <p>{errors.date}</p>}
            </label>
            <br/>
            <label>Hotel:
                <input
                type="text"
                name="hotel"
                value={inputs.hotel}
                placeholder="falta ver como elegimos de los hoteles disponibles"
                onChange={handleChange}
                />
                <br/>
                {errors.hotel && <p>{errors.hotel}</p>}
            </label>
            <br/>
            <label>Restaurant:
                <input
                type="text"
                name="restaurant"
                value={inputs.restaurant}
                placeholder="nombre del restaurant asociado, puede estar vacio"
                onChange={handleChange}
                />
                <br/>
                {errors.restaurant && <p>{errors.restaurant}</p>}
            </label>
            <br/>
            <label>Activities:
                <textarea
                type="text"
                name="activities"
                value={inputs.activities}
                placeholder="de momento, se agrega cada actividad con un salto de linea para separarlas"
                onChange={handleChange}
                />
                <br/>
                {errors.activities && <p>{errors.activities}</p>}
            </label>
            <button type="submit" name="submit">Guardar y enviar</button>
        </form>
    );
}