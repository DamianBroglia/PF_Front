import { Box, Button, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from 'react-router-dom';
import { getHotelDetailById } from '../../../redux/actions/HotelesActions';
import LoadingComponent from '../../Loading/LoadingComponent';
import CommentBoard from '../../CommentBoard/CommentBoard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addHotelForm } from '../../../redux/actions/formActions';
import { agregarHotel } from '../../../redux/actions/carritoActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from "../Detail.module.css"
import { Rating } from "@mui/material"

export default function HotelDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hoteles.detail);
  const toForm = useSelector((state) => state.form.toForm);


  const { id } = useParams();
  const setings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const getDetail = async () => {
      try {
        await dispatch(getHotelDetailById(id));
      } catch (error) {
        console.log('Ocurrio un error en el useEffect', error);
      }
    };
    id && getDetail();
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };

  const handleClick = () => {
    if (toForm) {
      dispatch(addHotelForm(hotel));
      alert('añadida con exito');
    } else {
      dispatch(agregarHotel(hotel));
      alert('el hotel se añadio al carrito');
    }
  };

  return (
    <Grid
      sx={{
        width: '85vw',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '2%',
        marginLeft: '8%',
        marginRight: '8%',
      }}
    >
      {Object.keys(hotel).length ? (
        <Grid>
          <Typography
            variant="h2"
            gutterBottom
            fontWeight="400"
            className={styles.name}
          >
            {hotel.name}
          </Typography>
          <Slider {...setings}>
            {hotel.img
              ? hotel.img.map((item, index) => (


                <Box
                  key={index}

                >
                  <img className={styles.image} src={item} alt=""></img>
                </Box>
              ))
              : "cargando"}


          </Slider>

          <Box className={styles.containerProp}>

            <Box className={styles.containerRating}>
              <Typography variant='h5'>Ubicación:</Typography>
              <Typography variant='h6' sx={{lineHeight:"1", fontSize:"17px"}}>{hotel.location}</Typography>
            </Box>

            <Box className={styles.containerRating}>
              <Typography variant='h5'>Estrellas:</Typography>
              <Rating name="half-rating-read" value={hotel.stars} precision={0.5} readOnly size="large" className={styles.rating} /> 
            </Box>

            <Box className={styles.containerRating}>
              <Typography variant='h5'>Precio:</Typography>
              <Typography variant='h4'>{hotel.priceDay} USD</Typography>
              <Typography variant='h6'>por noche</Typography>
            </Box>

            <Box className={styles.containerRating}>
              <Typography variant='h5'>Rating</Typography>
              { hotel.rating ?
                <Rating name="half-rating-read" value={hotel.rating} precision={0.5} readOnly size="large" className={styles.rating} /> :
                <Typography variant='h4'>S/Puntaje</Typography>
              }
            </Box>
          </Box>

          
          <Typography variant='h4' sx={{marginTop:"25px"}}>
            {hotel.description}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3%',
            }}
          >
            <Button
              variant='contained'
              sx={{ fontSize: '1.4rem', marginRight: '3%' }}
              startIcon={toForm ? <AddCircleIcon /> : <AddShoppingCartIcon />}
              onClick={handleClick}
            >
              {toForm ? 'Añadir al paquete' : 'Añadir al Carrito'}
            </Button>
            <Button
              variant='contained'
              sx={{ fontSize: '1.6rem' }}
              startIcon={<ArrowBackIosIcon />}
              onClick={goBack}
            >
              volver
            </Button>
          </Box>
        </Grid>
      ) : (
        <LoadingComponent />
      )}
      <CommentBoard hotelId={hotel.id} arrayComments={hotel.comments} />
    </Grid>
  );
}
