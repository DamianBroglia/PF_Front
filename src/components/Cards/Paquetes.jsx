import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardActionArea, CardActions } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import './Paquetes.css';
import imagen3 from '../../assets/imagen6.png';
import { Rating } from '@mui/material';
// For expand
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

//----------------------------------------------

// Importa la imagen

export default function Paquete(props) {
  const {
    id,
    name,
    price,
    img,
    description,
    dateInit,
    dateEnd,
    restaurants,
    activities,
    hotel,
    rating,
  } = props.paquete;

  const transformDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleString().split(',')[0];
  };

  // For expand
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12} sm={10} md={10}>
        <Card
          className='card-grande'
          style={{ backgroundImage: `url(${imagen3})` }}
        >
          <CardActionArea key={id} component={Link} to={`/package/${id}`}>
            <CardHeader
              title={name}
              subheader={`${transformDate(dateInit)} to ${transformDate(
                dateEnd,
              )}`}
              action={
                <Typography variant='h6' component='span' color='textSecondary'>
                  ${price}
                </Typography>
              }
            />
          </CardActionArea>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Carousel
                  autoPlay
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                >
                  {img?.map((i) => {
                    return (
                      <div key={i}>
                        <img src={i} alt='.' />
                      </div>
                    );
                  })}
                </Carousel>
              </Grid>

              <Grid item xs={8}>
                <Grid>
                  <CardActions>
                    <Typography>DESCRIPCION</Typography>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label='show more'
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                      <Typography paragraph>{description}</Typography>
                    </CardContent>
                  </Collapse>
                </Grid>

                <Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography>Actividades</Typography>
                      {activities?.map((a) => {
                        return (
                          <ul key={a.name}>
                            <li>{a.name}</li>
                          </ul>
                        );
                      })}
                    </Grid>

                    <Grid item xs={4}>
                      <Typography>Restaurants</Typography>
                      {restaurants?.map((r) => {
                        return (
                          <ul key={r.name}>
                            <li>{r.name}</li>
                          </ul>
                        );
                      })}
                    </Grid>

                    <Grid item xs={4}>
                      <Typography>Hotel</Typography>
                      <ul>
                        <li>{hotel.name}</li>
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid></Grid>
              </Grid>
            </Grid>
            <Grid>
              <p>
                ¿Estás esperando un paquete turístico? ¡No busques más! Descubre
                nuestras increíbles ofertas y vive una experiencia inolvidable.
                Explora destinos emocionantes, disfruta de alojamientos de lujo,
                saborea la deliciosa gastronomía local y sumérgete en aventuras
                inigualables. ¡No pierdas más tiempo y reserva tu paquete
                turístico hoy mismo!
              </p>
            </Grid>
            <Rating
              className='custom-rating-right'
              name='half-rating-read'
              value={rating}
              precision={0.5}
              readOnly
              size='large'
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
