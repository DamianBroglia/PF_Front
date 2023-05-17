import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { validation } from './validation';
import { useState, useEffect } from 'react';
import BasicCard from './commons/BasicCard';
import ActivityModal from './Modals/ActivityModal';
import HotelModal from './Modals/HotelModal';
import axios from 'axios';
import { package1, package2, package3, package4 } from './loadPackage';
import RestoModal from './Modals/RestoModal';
import { useNavigate } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import { addDays, addYears } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import {
  addActiForm,
  addHotelForm,
  addRestoForm,
  deleteActiForm,
  deleteHotelForm,
  deleteRestoForm,
  emptyFormCommand,
  setButtonToCart,
  setButtonToForm,
} from '../../redux/actions/formActions';
import { inputSet } from '../../redux/actions/formActions';
registerLocale('es', es);

const styles = {
  width: '100%',
  border: '1px solid black',
  borderRadius: '3px',
  borderShadow: '5px',
  fontSize: '1.3rem',
};
const stylesDateInput = {
  display: 'flex',
  flexDirection: 'row-Reverse',
  alignItems: 'center',
};

export default function CreatePackageForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openActi, setOpenActi] = useState(false);
  const [openHotel, setOpenHotel] = useState(false);
  const [openResto, setOpenResto] = useState(false);
  const [selectDate, setSelectDate] = useState(new Date());
  const state = useSelector((state) => state.form);
  const user = useSelector((state) => state.users.user);

  const [inputs, setInputs] = useState({
    name: '',
    location: '',
    price: '',
    duration: '',
    img: '',
    img2: '',
    img3: '',
    img4: '',
    description: '',
    quotas: '',
    dateInit: '',
    dateEnd: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    location: '',
    price: '',
    duration: '',
    img: '',
    img2: '',
    img3: '',
    img4: '',
    description: '',
    quotas: '',
    dateInit: '',
    dateEnd: '',
  });
  const [activities, setActivities] = useState([]);
  const [hotels, setHotels] = useState('');
  const [resto, setResto] = useState([]);

  const changePage = (name) => {
    dispatch(setButtonToForm());
    dispatch(inputSet(inputs));
    switch (name) {
      case 'ACTIVIDAD':
        navigate('/activitycards');
        break;
      case 'HOTEL':
        navigate('/hotelcards');
        break;
      case 'RESTO':
        navigate('/restaurantcards');
        break;
      default:
        alert('algo salio mal');
    }
  };

  const defaultValuesActivity = {
    name: '',
    description: '',
    duration: '',
    price: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    typeAct: '',
  };
  const defaultValuesHotel = {
    name: '',
    location: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    description: '',
    stars: '',
    priceDay: '',
  };

  const defaultValuesResto = {
    name: '',
    location: '',
    description: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    price: '',
  };

  const handlePreLoad = (number) => {
    switch (number) {
      case 'uno':
        setInputs(package1.package);
        setHotels(package1.hotel);
        setActivities(package1.activities);
        setResto(package1.resto);
        break;
      case 'dos':
        setInputs(package2.package);
        setHotels(package2.hotel);
        setActivities(package2.activities);
        setResto(package2.resto);
        break;
      case 'tres':
        setInputs(package3.package);
        setHotels(package3.hotel);
        setActivities(package3.activities);
        setResto(package3.resto);
        break;
      case 'cuatro':
        setInputs(package4.package);
        setHotels(package4.hotel);
        setActivities(package4.activities);
        setResto(package4.resto);
        break;
      default:
        alert('error');
    }
  };

  const getHeader = (boton1, boton2, funcionOpen, funcionOpen2 = () => {}) => {
    return (
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'lightcyan',
            border: '1px solid black',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Button
            onClick={funcionOpen}
            variant='contained'
            size='small'
            sx={{ marginRight: '2%' }}
          >
            {boton1}
          </Button>
          <Button onClick={funcionOpen2} variant='contained' size='small'>
            {boton2}
          </Button>
        </Box>
      </Box>
    );
  };

  const addNewActivity = (data) => {
    setActivities([...activities, data]);
    setOpenActi(false);
    dispatch(addActiForm(data));
  };

  const addNewHotel = (data) => {
    setHotels(data);
    setOpenHotel(false);
    dispatch(addHotelForm(data));
  };

  const addNewResto = (data) => {
    setResto([...resto, data]);
    setOpenResto(false);
    dispatch(addRestoForm(data));
  };

  const deleteActi = (name) => {
    setActivities(activities.filter((elem) => elem.name !== name));
    dispatch(deleteActiForm(name));
  };

  const deleteResto = (name) => {
    setResto(resto.filter((elem) => elem.name !== name));
    dispatch(deleteRestoForm(name));
  };

  const deleteHotel = () => {
    setHotels('');
    dispatch(deleteHotelForm());
  };

  const getContent = (type) => {
    switch (type) {
      case 'ACTIVITY':
        return activities.length
          ? activities.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    border: '1px solid black',
                    backgroundColor: 'lightsalmon',
                    marginBottom: '4px',
                    marginTop: '4px',
                  }}
                >
                  {' '}
                  Actividad {index}:<Typography>Nombre: {item.name}</Typography>
                  <Typography>Descrip: {item.description}</Typography>
                  <Typography>Duracion: {item.duration} days</Typography>
                  <Typography>Imagenes: [{item.img}]</Typography>
                  <Typography>Tipo: {item.typeAct}</Typography>
                  <Typography>Precio: {item.price} USD</Typography>
                  <Button
                    variant='contained'
                    size='small'
                    onClick={() => deleteActi(item.name)}
                  >
                    X
                  </Button>
                </Box>
              );
            })
          : 'no hay actividades cargadas';
      case 'HOTEL':
        return hotels ? (
          <Box
            sx={{
              border: '1px solid black',
              backgroundColor: 'cyan',
              marginBottom: '4px',
              marginTop: '4px',
            }}
          >
            {' '}
            Hotel:
            <Typography>Nombre : {hotels.name}</Typography>
            <Typography>Desc. : {hotels.description}</Typography>
            <Typography>Ubicacion : {hotels.location}</Typography>
            <Typography>Imagenes : [{hotels.img}]</Typography>
            <Typography>Estrellas: {hotels.stars}</Typography>
            <Typography>Precio: {hotels.priceDay} USD/dia</Typography>
            <Button
              variant='contained'
              size='small'
              onClick={() => deleteHotel()}
            >
              X
            </Button>
          </Box>
        ) : (
          'no hay hoteles de momento'
        );
      case 'RESTO':
        return resto.length
          ? resto.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    border: '1px solid black',
                    backgroundColor: 'lightsalmon',
                    marginBottom: '4px',
                    marginTop: '4px',
                  }}
                >
                  {' '}
                  Restaurant {index}:
                  <Typography>Nombre : {item.name}</Typography>
                  <Typography>Desc. : {item.description}</Typography>
                  <Typography>Ubicacion : {item.location}</Typography>
                  <Typography>Imagenes : [{item.img}]</Typography>
                  <Typography>Precio? : {item.price} USD</Typography>
                  <Button
                    variant='contained'
                    size='small'
                    onClick={() => deleteResto(item.name)}
                  >
                    X
                  </Button>
                </Box>
              );
            })
          : 'no hay restaurantes cargados';
      default:
        return 'fallo algo';
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    dispatch(setButtonToCart());
    event.preventDefault();
    if (Object.values(errors).length === 0) {
      try {
        const combinedImages = Array.from([
          inputs.img,
          inputs.img2,
          inputs.img3,
          inputs.img4,
        ]).filter((elem) => elem !== '');
        const ids = {
          restaurantID: [],
          hotelId: hotels.id || '',
          activitiesID: [],
          userId: user.id,
        };
        for (let i = 0; i < resto.length; i++) {
          if (resto[i].id) {
            ids.restaurantID.push(resto[i].id);
          } else {
            const restaurantId = await axios.post('/restaurant', resto[i]);
            ids.restaurantID.push(restaurantId.data.id);
          }
        }
        if (!ids.hotelId) {
          const hotelId = await axios.post('/hotel', hotels);
          ids.hotelId = hotelId.data.id;
        }
        for (let i = 0; i < activities.length; i++) {
          if (activities[i].id) {
            ids.activitiesID.push(activities[i].id);
          } else {
            const actviId = await axios.post('/activity', activities[i]);
            ids.activitiesID.push(actviId.data.id);
          }
        }
        const body = {
          ...inputs,
          img: combinedImages,
          dateInit: selectDate,
          dateEnd: addDays(selectDate, inputs.duration),
          hotelId: ids.hotelId,
          restaurantId: ids.restaurantID,
          activitiesId: ids.activitiesID,
          userId: ids.userId,
        };
        axios.post('/package', body).then((response) => {
          if (response.status === 200) {
            dispatch(emptyFormCommand());
            alert('paquete creado con exito');
            navigate(-1);
          }
        });
      } catch (error) {
        alert(error.response.data.error || error.message);
      }
    }
  };

  useEffect(() => {
    setErrors(validation(inputs, activities));
  }, [inputs]);

  useEffect(() => {
    setInputs(state.inputs);
    setHotels(state.hotel);
    setResto(state.restaurants);
    setActivities(state.activities);
  }, []);

  return (
        <Grid container
          sx={{
            marginLeft: "5%",
            width: '70vw',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Grid item>
            <Typography component='h1' variant='h3'>
              Crear paquete
            </Typography>
          </Grid>
          <Grid item sx={{ mt: 3 }}>
            <Grid container spacing={2} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                width: "60vw"
              }}>
              <Grid item xs={12} width="50vw">
                <TextField
                  autoComplete='nombre del paquete'
                  name='name'
                  required
                  fullWidth
                  id='name'
                  label='Nombre'
                  autoFocus
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  value={inputs.name}
                />
              </Grid>
              <Grid item xs={12} width="50vw">
                <TextField
                  required
                  fullWidth
                  id='location'
                  label='Ubicacion'
                  name='location'
                  autoComplete='ubicacion'
                  onChange={handleChange}
                  error={!!errors.location}
                  helperText={errors.location}
                  value={inputs.location}
                />
              </Grid>
              <Grid item xs={12} width="50vw">
                <TextField
                  required
                  fullWidth
                  name='price'
                  label='Precio'
                  type='number'
                  id='price'
                  autoComplete='precio'
                  onChange={handleChange}
                  error={!!errors.price}
                  helperText={errors.price}
                  value={inputs.price}
                />
              </Grid>
              <Grid item xs={12} width="50vw">
                <TextField
                  required
                  fullWidth
                  name='duration'
                  label='Duracion'
                  type='number'
                  id='duration'
                  autoComplete='duracion(numero de dias)'
                  onChange={handleChange}
                  error={!!errors.duration}
                  helperText={errors.duration}
                  value={inputs.duration}
                />
              </Grid>
              <Grid item xs={12} width="50vw">
                <TextField
                  required
                  fullWidth
                  id='img'
                  label='Imagen'
                  name='img'
                  autoComplete='imagen'
                  onChange={handleChange}
                  error={!!errors.img}
                  helperText={errors.img}
                  value={inputs.img}
                />
              </Grid>
              <Grid item xs={12} width="50vw">
                <TextField
                  fullWidth
                  id='img2'
                  label='Imagen 2'
                  name='img2'
                  autoComplete='imagen 2'
                  onChange={handleChange}
                  error={!!errors.img2}
                  helperText={errors.img2}
                  value={inputs.img2}
                />
              </Grid>
              <Grid item xs={12} width="50vw">
                <TextField
                  fullWidth
                  id='img3'
                  label='Imagen 3'
                  name='img3'
                  autoComplete='imagen 3'
                  onChange={handleChange}
                  error={!!errors.img3}
                  helperText={errors.img3}
                  value={inputs.img3}
                />
              </Grid>
              <Grid item xs={12} width="50vw">
                <TextField
                  fullWidth
                  id='img4'
                  label='Imagen 4'
                  name='img4'
                  autoComplete='imagen 4'
                  onChange={handleChange}
                  error={!!errors.img4}
                  helperText={errors.img4}
                  value={inputs.img4}
                />
              </Grid>
              <Grid item xs={12} width="50vw">
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={6}
                  id='description'
                  label='Descripcion'
                  name='description'
                  autoComplete='descripcion'
                  onChange={handleChange}
                  error={!!errors.description}
                  helperText={errors.description}
                  value={inputs.description}
                />
              </Grid>
              <Grid item xs={12} width="50vw">
                <TextField
                  required
                  fullWidth
                  id='quotas'
                  label='Cupos'
                  name='quotas'
                  autoComplete='cupos'
                  onChange={handleChange}
                  error={!!errors.quotas}
                  helperText={errors.quotas}
                  value={inputs.quotas}
                />
              </Grid>
              <Grid item xs={12} sx={stylesDateInput} width="50vw">
                <DatePicker
                  // selected={selectDate}
                  placeholderText='Eligir fecha'
                  onChange={(date) => {
                    setSelectDate(date);
                  }}
                  locale='es'
                  minDate={new Date()}
                  maxDate={addYears(new Date(), 1)}
                />

                <TextField
                  required
                  fullWidth
                  id='dateInit'
                  label='Fecha inicio'
                  name='dateInit'
                  autoComplete='Fecha inicio'
                  onChange={handleChange}
                  error={!!errors.dateInit}
                  helperText={errors.dateInit}
                  value={selectDate.toLocaleDateString('es', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                />
              </Grid>
              <Grid item xs={12} width="50vw">
                <TextField
                  required
                  fullWidth
                  id='dateEnd'
                  label='Fecha fin'
                  name='dateEnd'
                  autoComplete='fecha fin'
                  onChange={handleChange}
                  error={!!errors.dateEnd}
                  helperText={errors.dateEnd}
                  value={addDays(
                    selectDate,
                    inputs.duration,
                  ).toLocaleDateString('es', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                />
              </Grid>
            </Grid>
          </Grid>
          <br/>
          <Grid item>
            <Grid container sx={{
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "60vw",
              }}>
            <Grid item xs={8} sx={styles} width="50vw">
              <BasicCard
                header={getHeader(
                  'Crear nueva actividad',
                  'Cargar actividad de la BD',
                  () => setOpenActi(true),
                  () => changePage('ACTIVIDAD'),
                )}
                content={getContent('ACTIVITY')}
              />
              <ActivityModal
                open={openActi}
                handleClose={() => setOpenActi(false)}
                addNewItem={addNewActivity}
                defaultValues={defaultValuesActivity}
              />
            </Grid>
            <br />
            <Grid item xs={8} sx={styles} width="50vw">
              <BasicCard
                header={getHeader(
                  'Crear nuevo hotel',
                  'Cargar hotel de la BD',
                  () => setOpenHotel(true),
                  () => changePage('HOTEL'),
                )}
                content={getContent('HOTEL')}
              />
              <HotelModal
                open={openHotel}
                handleClose={() => setOpenHotel(false)}
                addNewItem={addNewHotel}
                defaultValues={defaultValuesHotel}
              />
            </Grid>
            <br />
            <Grid item xs={8} sx={styles} width="50vw">
              <BasicCard
                header={getHeader(
                  'Crear nuevo resto',
                  'Cargar resto de la BD',
                  () => setOpenResto(true),
                  () => changePage('RESTO'),
                )}
                content={getContent('RESTO')}
              />
              <RestoModal
                open={openResto}
                handleClose={() => setOpenResto(false)}
                addNewItem={addNewResto}
                defaultValues={defaultValuesResto}
              />
            <Button
              onClick={handleSubmit}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Confirmar
            </Button>
            </Grid>
          </Grid>
          </Grid>
          <Box>
            <Button
              size='small'
              variant='contained'
              onClick={() => handlePreLoad('uno')}
            >
              1
            </Button>
            <Button
              size='small'
              variant='contained'
              onClick={() => handlePreLoad('dos')}
            >
              2
            </Button>
            <Button
              size='small'
              variant='contained'
              onClick={() => handlePreLoad('tres')}
            >
              3
            </Button>
            <Button
              size='small'
              variant='contained'
              onClick={() => handlePreLoad('cuatro')}
            >
              4
            </Button>
          </Box>
        </Grid>
  );
}
