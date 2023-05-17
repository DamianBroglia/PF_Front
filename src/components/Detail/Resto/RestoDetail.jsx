import { Box, Button, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from 'react-router-dom';
import { getRestaurantDetailById } from '../../../redux/actions/RestaurantsActions';
import LoadingComponent from '../../Loading/LoadingComponent';
import CommentBoard from '../../CommentBoard/CommentBoard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addRestoForm } from '../../../redux/actions/formActions';
import styles from "../Detail.module.css"
import { Rating } from "@mui/material"

export default function RestoDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.restaurants.detail);
  const toForm = useSelector((state) => state.form.toForm);
  const { id } = useParams();
  const setings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: false,
    // variableWidth: false,
    // adaptativeHeigth: false,
  };

  useEffect(() => {
    const getDetail = async () => {
      try {
        dispatch(getRestaurantDetailById(id));
      } catch (error) {
        console.log('Error en el useEffect', error);
      }
    };

    id && getDetail();
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };

  const handleClick = () => {
    if (toForm) {
      dispatch(addRestoForm(restaurant));
      alert('añadida con exito');
    } else {
      alert('no deberias estar viendo esto');
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
      {Object.keys(restaurant).length ? (
        <Grid>
          <Typography
            variant="h2"
            gutterBottom
            fontWeight="400"
            className={styles.name}
          >
            {restaurant.name}
          </Typography>
          <Slider {...setings}>
            {restaurant.img
              ? restaurant.img.map((item, index) => (


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
              <Typography variant='h5'>Ubicacion:</Typography>
              <Typography variant='h6' sx={{lineHeight:"1", fontSize:"17px"}}>{restaurant.location}</Typography>
            </Box>

            <Box className={styles.containerRating}>
              <Typography variant='h5'>Precio Menú:</Typography>
              <Typography variant='h4'>{restaurant.price} USD</Typography>
            </Box>

            <Box className={styles.containerRating}>
              <Typography variant='h5'>Rating</Typography>
              {restaurant.rating ?
                <Rating name="half-rating-read" value={restaurant.rating} precision={0.5} readOnly size="large" className={styles.rating} /> :
                <Typography variant='h4'>S/Puntaje</Typography>
              }
            </Box>
          </Box>

          <Typography variant='h4' sx={{marginTop:"25px"}}>
          {restaurant.description}
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
            {toForm ? (
              <Button
                variant='contained'
                sx={{ fontSize: '1.4rem', marginRight: '3%' }}
                startIcon={<AddCircleIcon />}
                onClick={handleClick}
              >
                Añadir al paquete
              </Button>
            ) : (
              ''
            )}

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

      <CommentBoard
        restaurantId={restaurant.id}
        arrayComments={restaurant.comments}
      />
    </Grid>
  );
}
