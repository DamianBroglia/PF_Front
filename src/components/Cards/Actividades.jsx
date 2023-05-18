import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { agregarActivitie } from '../../redux/actions/carritoActions';
import { addActiForm } from '../../redux/actions/formActions';
import { Link } from 'react-router-dom';
import './Actividades.css'; // Importar el archivo CSS

export default function Actividades(props) {
  const { id, name, img, description, price, rating } = props.actividad;
  const dispatch = useDispatch();
  const toForm = useSelector((state) => state.form.toForm);
  const user = useSelector((state) => state.users.user);

  const handleClick = async (e) => {
    if (toForm) {
      dispatch(addActiForm(props.actividad));
      alert('Se agregó con éxito');
    } else {
      dispatch(agregarActivitie(props.actividad));
      alert('Se agregó la actividad al carrito.');
    }
  };

  const cutDescription = (description) => {
    var nuevaDesc = description;
    if (description.length > 250) {
      nuevaDesc = nuevaDesc.slice(0, 250);
      nuevaDesc += "...";
    }
    return nuevaDesc;
  }

  return (
    <Card className="actividad-card">
      <CardActionArea key={id} component={Link} to={`/activity/byId/${id}`}>
        <CardMedia component="img" alt="actividad" height="140" image={img[0]} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="actividad-name">
            {name}
          </Typography>
          <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
          <Typography className="price">{price}</Typography>
          <Typography variant="body2" color="text.secondary" className="description">
            {cutDescription(description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="actividad-card-footer"
      >
        <CardActions>
          {Object.values(user).length?
          (<Button variant="outlined" onClick={handleClick} className="add-button">
            {toForm ? 'Agregar al paquete' : 'Agregar al carrito'}
          </Button>) : ("")}
        </CardActions>
      </Grid>
    </Card>
  );
}
