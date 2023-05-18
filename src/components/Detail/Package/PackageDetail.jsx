import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom/dist';
import { useDispatch, useSelector } from 'react-redux';
import { getPackageDetailById } from '../../../redux/actions/packageActions';
import LoadingComponent from '../../Loading/LoadingComponent';
import { useParams } from 'react-router-dom/dist';
import { Rating } from "@mui/material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PackageDetail.css';
//PayPal
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import CommentBoard from '../../CommentBoard/CommentBoard';
import axios from "axios";
import styles from "../Detail.module.css"
// import Actividades from '../../Cards/Actividades';
// import Hoteles from '../../Cards/Hoteles';
// import Restaurant from "../../Cards/Hoteles"

export default function PackageDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pack = useSelector((state) => state.packages.detail);
  const { id } = useParams();
  const user = useSelector((state) => state.users.user);
  const [valid, setValid] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: false,
    // adaptativeHeigth: false,
    // variableWidth: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const settings2 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: false,
    // adaptativeHeigth: false,
    // variableWidth: false,
  };

  const transformDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleString().split(",")[0];
  }

  const viewHotel = (id) => {
    navigate(`/hotel/byId/${id}`);
  };

  const viewActivity = (id) => {
    navigate(`/activity/byId/${id}`);
  };

  const viewRestaurant = (id) => {
    navigate(`/restaurant/byId/${id}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleSubmit = async () => {
    const datosAMandar = {
      paid: true,
      numOfTravels: 1,
      userId: user.id,
      packageId: pack.id
    }
    const response = await axios.post("/reservation", datosAMandar);
    if (response.status === 200) {
      setValid(false);
      const body = {
        userEmail: user.email,
        dateInit: transformDate(pack.dateInit),
        price: pack.price
      }
      await axios.post("/mails/confirmation", body);
    }
    setValid(false);
  }

  useEffect(() => {
    const getDetail = async () => {
      try {
        dispatch(getPackageDetailById(id));
      } catch (error) {
        console.log(
          'Ocurrió un error al obtener el detalle del paquete:',
          error,
        );
      }
    };
    id && getDetail();
  }, [dispatch, id]);

  useEffect(() => {
    if (valid) {
      alert(
        '¡Excelente! Tu transacción ha sido realizada con éxito.',
      );
      setTimeout(() => {
        handleSubmit();
      }, 1000);
    }
  }, [valid])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'beige',
        // marginLeft: '8%',
        // marginRight: '8%',
        // width: '85vw',
        // border: '1px solid black',
      }}
    >
      {Object.keys(pack).length ? (
        <Grid>
          <Typography
            variant="h2"
            gutterBottom
            fontWeight="400"
            className={styles.name2}
          >
            {pack.name}
          </Typography>
          <Slider {...settings}>
            {pack.img.map((item, index) => (
              <Box
                key={index}

              >
                <img className={styles.image} src={item} alt=""></img>
              </Box>
            ))}
          </Slider>

          <Box className={styles.containerProp2}>

            <Box className={styles.containerRating} sx={{ marginInline: "20px" }}>
              <Typography variant='h5'>Ubicación:</Typography>
              <Typography variant='h6' sx={{ lineHeight: "1", fontSize: "17px" }}>{pack.location}</Typography>
            </Box>

            <Box className={styles.containerRating} sx={{ marginInline: "20px" }}>
              <Typography variant='h5'>Duracion:</Typography>
              <Typography variant='h4'>{pack.duration} días</Typography>
            </Box>

            <Box className={styles.containerRating} sx={{ marginInline: "20px" }}>
              <Typography variant='h5'>Rating</Typography>
              {pack.rating ?
                <Rating name="half-rating-read" value={pack.rating} precision={0.5} readOnly size="large" className={styles.rating} /> :
                <Typography variant='h4'>S/Puntaje</Typography>
              }
            </Box>

            <Box className={styles.containerRating} sx={{ marginInline: "20px" }}>
              <Typography variant='h5'>Fecha Inicio:</Typography>
              <Typography variant='h4'>{transformDate(pack.dateInit)}</Typography>
            </Box>

            <Box className={styles.containerRating} sx={{ marginInline: "20px" }}>
              <Typography variant='h5'>Fecha Final:</Typography>
              <Typography variant='h4'>{transformDate(pack.dateEnd)}</Typography>
            </Box>

            <Box className={styles.containerRating} sx={{ marginInline: "20px" }}>
              <Typography variant='h5'>Cupos:</Typography>
              <Typography variant='h4'>{pack.quotas} </Typography>
            </Box>

            <Box className={styles.containerRating} sx={{ marginInline: "20px" }}>
              <Typography variant='h5'>Precio:</Typography>
              <Typography variant='h4'>{pack.price} USD</Typography>
            </Box>
          </Box>

          <Typography variant='h4' sx={{ marginTop: "25px" }}>
            {pack.description}
          </Typography>


          <Typography gutterBottom variant='h3' sx={{ fontWeight: '700', marginTop: "25px" }}>
            Actividades:{' '}
          </Typography>
          <Slider {...settings2}>
            {pack.activities.map((item, index) => {
              return (
                <Card
                  sx={{
                    maxWidth: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'lightgray',
                  }}
                  key={index}
                >
                  <Typography fontWeight='600' variant='h3'>
                    {item.name}
                  </Typography>
                  <Typography variant='h3'>
                    duracion: {item.duration} horas
                  </Typography>
                  <CardContent>
                    <img src={item.img[0]} alt={item.name} />
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        marginTop: '2%',
                        fontSize: '1.5rem',
                      }}
                      variant='contained'
                      size='small'
                      onClick={() => viewActivity(item.id)}
                    >
                      mas info
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Slider>
          <br />
          <Typography variant='h3' sx={{ fontWeight: '700', marginTop: '4%' }}>
            Hotel:
          </Typography>
          {pack.hotel && (
            <Card
              sx={{
                maxWidth: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '25%',
              }}
            >
              <CardMedia
                component='img'
                sx={{ maxHeight: '35vh' }}
                image={pack.hotel.img[0]}
                alt={pack.hotel.name}
              />
              <CardContent>
                <Typography fontWeight='600' variant='h4' gutterBottom>
                  Nombre: {pack.hotel.name}
                </Typography>
                <Typography variant='h5' gutterBottom>
                  Estrellas: {pack.hotel.stars}
                </Typography>
                <Typography variant='h6'>{pack.hotel.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ fontSize: '1.5rem' }}
                  onClick={() => viewHotel(pack.hotel.id)}
                >
                  mas info
                </Button>
              </CardActions>
            </Card>
          )}
          {pack.restaurants.length ? (
            <Grid marginTop='3%' marginBottom='3%'>
              <Typography variant='h2' gutterBottom sx={{ fontWeight: '700' }}>
                Restaurant/s:
              </Typography>
              <Slider {...settings2}>
                {pack.restaurants.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      maxWidth: '70%',
                    }}
                  >
                    <Typography variant='h4' gutterBottom>
                      Nombre: {item.name}
                    </Typography>
                    <img src={item.img[0]} alt=''></img>
                    <Button
                      variant='text'
                      onClick={() => viewRestaurant(item.id)}
                      sx={{
                        marginTop: '2%',
                        fontSize: '1.5rem',
                      }}
                    >
                      mas info
                    </Button>
                  </Box>
                ))}
              </Slider>
            </Grid>
          ) : (
            <Typography
              fontWeight='600'
              variant='h4'
              gutterBottom
              marginTop='2%'
            >
              no incluye comida/s en restaurante/s
            </Typography>
          )}
          <Typography
            variant='h2'
            gutterBottom
            sx={{ fontWeight: '700' }}
            display='inline'
          >
            {'Precio: '}
            <Typography variant='h3' display='inline'>
              {pack.price} USD
            </Typography>
          </Typography>
        </Grid>
      ) : (
        <LoadingComponent />
      )}
      <Box
        sx={{
          marginTop: '2%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant='contained'
          sx={{ fontSize: '1.6rem', maxWidth: '20vw' }}
          startIcon={<ArrowBackIosIcon />}
          onClick={goBack}
        >
          volver
        </Button>
      </Box>
      <Box sx={{ marginTop: '5%', marginBottom: '3%' }}>

        {Object.values(user).length?
        (<PayPalScriptProvider
        options={{
          'client-id':
            'AYUz54121CeOUjgpCAsy19Y_mYQUlhihSs4Y0z_e5PK3MBjJxIsEHPRGOGLO6wxhnUtNd20Xw7k0z0km',
        }}

        >
          <PayPalButtons
            forceReRender={[pack]}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: pack.price,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(function () {
                setValid(true);
              });
            }}
            onCancel={(data) => {
              return alert('Pago cancelado.');
            }}
          />
        </PayPalScriptProvider>)
        : (<Typography variant='h3' fontWeight="600">La compra es solo para usuarios registrados</Typography>)}
      </Box>
      <CommentBoard packageId={pack.id} arrayComments={pack.comments} />
    </Box>
  );
}
