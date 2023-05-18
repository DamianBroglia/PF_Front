import { Box, Button, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from 'react-router-dom';
import { getActivityDetailById, getAllActivity } from '../../../redux/actions/ActivitiesActions';
import LoadingComponent from '../../Loading/LoadingComponent';
import CommentBoard from '../../CommentBoard/CommentBoard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addActiForm } from '../../../redux/actions/formActions';
import { agregarActivitie } from '../../../redux/actions/carritoActions';
import { Rating } from "@mui/material"
import styles from "../Detail.module.css"
import axios from 'axios';

export default function ActivityDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activity = useSelector((state) => state.activities.detail);
  const toForm = useSelector((state) => state.form.toForm);
  const { id } = useParams();
  const user =  useSelector((state) => state.users.user);
  const admin = process.env.REACT_APP_ADMIN_USERS;

  useEffect(() => {
    const getDetail = async () => {
      try {
        await dispatch(getActivityDetailById(id));
      } catch (error) {
        console.log(
          'Ocurrió un error al obtener el detalle del paquete:',
          error,
        );
      }
    };
    id && getDetail();
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };


  const handleClick = () => {
    if (toForm) {
      dispatch(addActiForm(activity));
      alert('añadida con exito');
    } else {
      dispatch(agregarActivitie(activity));
      alert('la actividad se añadio al carrito');
    }
  };

  const handleDelete = async () => {
    const response = await axios.put("/activity/delete", {id: activity.id});
    if (response.status === 200) {
      alert("borrada con exito");
      dispatch(getAllActivity());
      navigate(-1);
    }
  }

  const setings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (

    <Grid sx={{
      width: "85vw",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      marginTop: "2%",
      marginLeft: "8%",
      marginRight: "8%",
    }}>
      {Object.keys(activity).length ? (
        <Grid>
          <Typography
            variant="h2"
            gutterBottom
            fontWeight="400"
            className={styles.name}

          >
            {activity.name}
          </Typography>

          <Slider {...setings}>
            {activity.img
              ? activity.img.map((item, index) => (


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
              <Typography variant='h5'>Duración:</Typography>
              <Typography variant='h4'>{activity.duration} horas</Typography>
            </Box>

            <Box className={styles.containerRating}>
              <Typography variant='h5'>Tipo:</Typography>
              <Typography variant='h4'>{activity.typeAct}</Typography>
            </Box>

            <Box className={styles.containerRating}>
              <Typography variant='h5'>Precio:</Typography>
              <Typography variant='h4'>{activity.price} USD</Typography>
            </Box>

            <Box className={styles.containerRating}>
              <Typography variant='h5'>Rating</Typography>
              {activity.rating ?
                <Rating name="half-rating-read" value={activity.rating} precision={0.5} readOnly size="large" className={styles.rating} /> :
                <Typography variant='h4'>S/Puntaje</Typography>
              }
            </Box>
          </Box>

          <Typography variant='h4' sx={{marginTop:"25px"}}>
            {activity.description}
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
            {Object.values(user).length?
            (<Button
              variant='contained'
              sx={{ fontSize: '1.4rem', marginRight: '3%' }}
              startIcon={toForm ? <AddCircleIcon /> : <AddShoppingCartIcon />}
              onClick={handleClick}
            >
              {toForm ? 'Añadir al paquete' : 'Añadir al Carrito'}
            </Button>) : ("")}
            <Button
              variant='contained'
              sx={{ fontSize: '1.4rem' }}
              startIcon={<ArrowBackIosIcon />}
              onClick={goBack}
            >
              volver
            </Button>
            {admin.slice(",").includes(user.email)?
            (<Button
              variant='contained'
              sx={{ fontSize: '1.4rem', marginLeft: "0.5%" }}
              onClick={handleDelete}
            >
              borrar X
            </Button>)
            : ("")  
          }
          </Box>

        </Grid>
      ) : (
        <LoadingComponent />
      )}
      <CommentBoard
        activityId={activity.id}
        arrayComments={activity.comments}
      />
    </Grid>

  );
}
