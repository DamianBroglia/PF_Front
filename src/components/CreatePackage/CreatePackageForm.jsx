import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { validation } from "./validation";
import { useState, useEffect } from 'react';
import BasicCard from './commons/BasicCard';
import ActivityModal from './Modals/ActivityModal';
import HotelModal from './Modals/HotelModal';
import FindHotelModal from '../CustomPackage/FindHotelModal';
import axios from "axios";
import { CardActions } from '@mui/material';
import { package1, package2, package3, package4 } from './loadPackage';
import RestoModal from './Modals/RestoModal';
import { useNavigate } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import es from "date-fns/locale/es";
import { addDays, addYears } from 'date-fns';


registerLocale("es", es)

const theme = createTheme();

const styles = {
    width: "100%",
    border: "1px solid black",
    borderRadius: "3px",
    borderShadow: "5px",
    fontSize: "1.3rem"
}
const stylesDateInput = {
display:"flex",
flexDirection: "row-Reverse",
alignItems: "center"
}



export default function CreatePackageForm() {
    const navigate = useNavigate();
    const [openActi, setOpenActi] = useState(false);
    const [openHotel, setOpenHotel] = useState(false);
    const [openResto, setOpenResto] = useState(false);
    const [findHotelOpen, setFindHotelOpen] = useState(false);
    const [findRestoOpen, setFinRestoOpen] = useState(false);
    const [selectDate, setSelectDate] = useState(new Date())

    const [inputs, setInputs] = useState({
        name: "",
        location: "",
        price: "",
        duration: "",
        img: "",
        description: "",
        quotas: "",
        dateInit: "",
        dateEnd: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        location: "",
        price: "",
        duration: "",
        img: "",
        description: "",
        quotas: "",
        dateInit: "",
        dateEnd: ""
    });
    const [activities, setActivities] = useState([]);
    const [hotels, setHotels] = useState("");
    const [resto, setResto] = useState([]);

    const defaultValuesActivity = {
        name: "",
        description: "",
        duration: "",
        price: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        typeAct: ""
    }
    const defaultValuesHotel = {
        name: "",
        location: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        description: "",
        stars: "",
        priceDay: ""
    }

    const defaultValuesResto = {
        name: "",
        location: "",
        description: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        price: ""
    }

    const handlePreLoad = (number) => {
        switch (number) {
            case "uno": {
                setInputs(package1.package);
                setHotels(package1.hotel);
                setActivities(package1.activities);
                setResto(package1.resto);
                break;
            };
            case "dos": {
                setInputs(package2.package);
                setHotels(package2.hotel);
                setActivities(package2.activities);
                setResto(package2.resto);
                break;
            };
            case "tres": {
                setInputs(package3.package);
                setHotels(package3.hotel);
                setActivities(package3.activities);
                setResto(package3.resto);
                break;
            };
            case "cuatro": {
                setInputs(package4.package);
                setHotels(package4.hotel);
                setActivities(package4.activities);
                setResto(package4.resto);
                break;
            };
            default: {
                alert("error");
            }
        }
    }

    const getHeader = (boton1, boton2, funcionOpen, funcionOpen2 = () => { }) => {
        return (
            <Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                    height: "100%",
                    backgroundColor: 'lightcyan',
                    border: "1px solid black",
                    width: "100%"
                }}>
                    <Button
                        onClick={funcionOpen}
                        variant='contained'
                        size='small'
                        sx={{ marginRight: "2%" }}
                    >
                        {boton1}
                    </Button>
                    <Button
                        onClick={funcionOpen2}
                        variant='contained'
                        size='small'
                    >
                        {boton2}
                    </Button>
                </Box>
            </Box>
        )
    }

    const addNewActivity = (data) => {
        setActivities([
            ...activities,
            data
        ]);
        setOpenActi(false);
    }

    const addNewHotel = (data) => {
        setHotels(data);
        setOpenHotel(false);
        setFindHotelOpen(false);
    }

    const addNewResto = (data) => {
        setResto([
            ...resto,
            data
        ]);
        setOpenResto(false);
    }

    const deleteActi = (id) => {
        setActivities(activities.filter((elem, index) => index !== id));
    }

    const deleteResto = (id) => {
        setResto(resto.filter((elem, index) => index !== id));
    }

    const deleteHotel = () => {
        setHotels("");
    }

    const getContent = (type) => {
        switch (type) {
            case "ACTIVITY": {
                return activities.length
                    ? (activities.map((item, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    border: "1px solid black",
                                    backgroundColor: 'lightsalmon',
                                    marginBottom: "4px",
                                    marginTop: "4px"
                                }
                                }> Actividad {index}:
                                <Typography>Nombre: {item.name}</Typography>
                                <Typography>Descrip: {item.description}</Typography>
                                <Typography>Duracion: {item.duration} days</Typography>
                                <Typography>Imagenes: [{item.img}]</Typography>
                                <Typography>Tipo: {item.typeAct}</Typography>
                                <Typography>Precio: {item.price} USD</Typography>
                                <Button variant='contained' size='small' onClick={() => deleteActi(index)}>X</Button>
                            </Box>
                        )
                    }))
                    : ("no hay actividades cargadas")
            };
            case "HOTEL": {
                return hotels
                    ? (<Box
                        sx={{
                            border: "1px solid black",
                            backgroundColor: 'cyan',
                            marginBottom: "4px",
                            marginTop: "4px"
                        }
                        }> Hotel:
                        <Typography>Nombre : {hotels.name}</Typography>
                        <Typography>Desc. : {hotels.description}</Typography>
                        <Typography>Ubicacion : {hotels.location}</Typography>
                        <Typography>Imagenes : [{hotels.img}]</Typography>
                        <Typography>Estrellas: {hotels.stars}</Typography>
                        <Typography>Precio: {hotels.priceDay} USD/dia</Typography>
                        <Button variant='contained' size='small' onClick={() => deleteHotel()}>X</Button>
                    </Box>
                    )
                    : ("no hay hoteles de momento")
            };
            case "RESTO": {
                return resto.length
                    ? (resto.map((item, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    border: "1px solid black",
                                    backgroundColor: 'lightsalmon',
                                    marginBottom: "4px",
                                    marginTop: "4px"
                                }
                                }> Restaurant {index}:
                                <Typography>Nombre : {item.name}</Typography>
                                <Typography>Desc. : {item.description}</Typography>
                                <Typography>Ubicacion : {item.location}</Typography>
                                <Typography>Imagenes : [{item.img}]</Typography>
                                <Typography>Precio? : {item.price} USD</Typography>
                                <Button variant='contained' size='small' onClick={() => deleteResto(index)}>X</Button>
                            </Box>
                        )
                    }))
                    : ("no hay restaurantes cargados")
            };
            default: {
                return "fallo algo"
            };
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.values(errors).length === 0) {
            try {
                const ids = {
                    restaurantID: [],
                    hotelId: hotels.id || "",
                    activitiesID: []
                }
                for (let i = 0; i < resto.length; i++) {
                    if (resto[i].id) {
                        ids.restaurantID.push(resto[i].id)
                    } else {
                        const restaurantId = (await axios.post("http://localhost:3001/restaurant", resto[i]));
                        ids.restaurantID.push(restaurantId.data.id);
                    }
                }
                if (!ids.hotelId) {
                    const hotelId = await axios.post("http://localhost:3001/hotel", hotels);
                    ids.hotelId = hotelId.data.id;
                }
                for (let i = 0; i < activities.length; i++) {
                    if (activities[i].id) {
                        ids.activitiesID.push(activities[i].id)
                    } else {
                        const actviId = await axios.post("http://localhost:3001/activity", activities[i]);
                        ids.activitiesID.push(actviId.data.id);
                    }
                }
                const usuario = {
                    userName: "nada",
                    email: "nada",
                    password: "123456",
                    lastName: "perez",
                    social: true,
                    socialRed: "feisbuh"
                }
                // const a = new Date(inputs.dateInit);
                // const b = new Date(inputs.dateEnd);
                const userId = await axios.post("http://localhost:3001/user", usuario);
                const body = {
                    ...inputs,
                    dateInit: selectDate,
                    dateEnd: addDays(selectDate, inputs.duration),
                    hotelId: ids.hotelId,
                    restaurantId: ids.restaurantID,
                    activitiesId: ids.activitiesID,
                    userId: userId.data.id || 0,
                }
                axios.post("http://localhost:3001/package", body)
                    .then(response => {
                        if (response.status === 200) {
                            alert("paquete creado con exito");
                            navigate(0);
                        }
                    })
            } catch (error) {
                alert(error.response.data.error);
            }
        }
    };

    useEffect(() => {
        setErrors(validation(inputs, activities));
    }, [inputs]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "center",
                        width: "40vw"
                    }}
                >
                    <Typography component="h1" variant="h3">
                        Crear paquete
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="nombre del paquete"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nombre"
                                    autoFocus
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    value={inputs.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="location"
                                    label="Ubicacion"
                                    name="location"
                                    autoComplete="ubicacion"
                                    onChange={handleChange}
                                    error={!!errors.location}
                                    helperText={errors.location}
                                    value={inputs.location}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="price"
                                    label="Precio"
                                    type='number'
                                    id="price"
                                    autoComplete="precio"
                                    onChange={handleChange}
                                    error={!!errors.price}
                                    helperText={errors.price}
                                    value={inputs.price}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="duration"
                                    label="Duracion"
                                    type="number"
                                    id="duration"
                                    autoComplete="duracion(numero de dias)"
                                    onChange={handleChange}
                                    error={!!errors.duration}
                                    helperText={errors.duration}
                                    value={inputs.duration}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="img"
                                    label="Imagen"
                                    name="img"
                                    autoComplete="imagen"
                                    onChange={handleChange}
                                    error={!!errors.img}
                                    helperText={errors.img}
                                    value={inputs.img}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="Descripcion"
                                    name="description"
                                    autoComplete="descripcion"
                                    onChange={handleChange}
                                    error={!!errors.description}
                                    helperText={errors.description}
                                    value={inputs.description}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="quotas"
                                    label="Cupos"
                                    name="quotas"
                                    autoComplete="cupos"
                                    onChange={handleChange}
                                    error={!!errors.quotas}
                                    helperText={errors.quotas}
                                    value={inputs.quotas}
                                />
                            </Grid>
                            <Grid item xs={12} sx={stylesDateInput}>
                                <DatePicker
                                    // selected={selectDate}
                                    placeholderText='Eligir fecha'
                                    onChange={(date) => { setSelectDate(date) }}
                                    locale="es"
                                    minDate={new Date()}
                                    maxDate={addYears(new Date(), 1)}
                                />
                            
                                <TextField
                                    required
                                     fullWidth
                                    id="dateInit"
                                    label="Fecha inicio"
                                    name="dateInit"
                                    autoComplete="Fecha inicio"
                                    onChange={handleChange}
                                    error={!!errors.dateInit}
                                    helperText={errors.dateInit}
                                    value={selectDate.toLocaleDateString('es', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="dateEnd"
                                    label="Fecha fin"
                                    name="dateEnd"
                                    autoComplete="fecha fin"
                                    onChange={handleChange}
                                    error={!!errors.dateEnd}
                                    helperText={errors.dateEnd}
                                    value={addDays(selectDate, inputs.duration).toLocaleDateString('es', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                                />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid item xs={8} sx={styles}>
                            <BasicCard
                                header={getHeader("Add new Activity", "add existing activity", () => setOpenActi(true), () => alert("componente muestra actividades"))}
                                content={getContent("ACTIVITY")} />
                            <ActivityModal
                                open={openActi}
                                handleClose={() => setOpenActi(false)}
                                addNewItem={addNewActivity}
                                defaultValues={defaultValuesActivity} />
                        </Grid>
                        <br />
                        <Grid item xs={8} sx={styles}>
                            <BasicCard
                                header={getHeader("Add new Hotel", "add existing hotel", () => setOpenHotel(true), () => alert("componente muestra hotel"))}
                                content={getContent("HOTEL")} />
                            <HotelModal
                                open={openHotel}
                                handleClose={() => setOpenHotel(false)}
                                addNewItem={addNewHotel}
                                defaultValues={defaultValuesHotel} />
                            {/* <FindHotelModal
                        open={findHotelOpen}
                        handleClose={() => setFindHotelOpen(false)}
                        handleAdd={addNewHotel}
                    /> */}
                        </Grid>
                        <br />
                        <Grid item xs={8} sx={styles}>
                            <BasicCard
                                header={getHeader("Add new resto", "add existing resto", () => setOpenResto(true), () => alert("componente muestra restoranes"))}
                                content={getContent("RESTO")} />
                            <RestoModal
                                open={openResto}
                                handleClose={() => setOpenResto(false)}
                                addNewItem={addNewResto}
                                defaultValues={defaultValuesResto} />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Confirmar
                        </Button>
                    </Box>
                    <Box>
                        <Button size='small' variant='contained' onClick={() => handlePreLoad("uno")}>1</Button>
                        <Button size='small' variant='contained' onClick={() => handlePreLoad("dos")}>2</Button>
                        <Button size='small' variant='contained' onClick={() => handlePreLoad("tres")}>3</Button>
                        <Button size='small' variant='contained' onClick={() => handlePreLoad("cuatro")}>4</Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}