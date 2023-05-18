import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminMail() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    to: '',
    title: '',
    img: '',
    content: '',
    link: '',
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mensaje = {
        to: inputs.to.replace(/\s+/g, '').split(','),
        title: inputs.title,
        content: inputs.content,
        img: inputs.img,
        link: inputs.link,
      };
      const response = await axios.post('/mails/admin', mensaje);
      if (response.status === 200) {
        alert('mensaje mandado con exito');
        setInputs({
          to: '',
          title: '',
          img: '',
          content: '',
          link: '', 
        })
        navigate(0);
      } else console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePetition = async (name) => {
    if (name === "spam") {
      const response = await axios.get("/user/notification");
      if (response.data.length) {
        setInputs({
          ...inputs,
          to: response.data.join(",")
        });
      } else alert("nadie quiere nuestro spam :("); 
    } else {
      const response = await axios.get("/reservation/forThisWeek");
      if (response.data.length) {
        console.log(response.data);
        setInputs({
        ...inputs,
        to: response.data.join(",")
      });
      } else alert("no hay reservas para esta semana");
    }
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "rgb(204, 205, 207)",
          width: '80vw',
          borderRadius: '1rem',
          borderBottom: "0.3rem solid rgb(249, 249, 249)",
          padding: "20px",
          marginLeft: '10%',
          marginTop: '0.5%',
        }}
      >
        <Typography gutterBottom variant='h2' fontWeight='600'>
          Mail a enviar:{' '}
        </Typography>
        <Grid item sx={{ width: '70vw'}}>
          <TextField
            fullWidth
            variant="standard"
            name='title'
            label='Titulo del mail'
            value={inputs.title}
            onChange={handleChange}
            InputProps={{disableUnderline: true}}
            InputLabelProps={{color: "grey"}}
            sx={{backgroundColor: "rgb(249, 249, 249)", borderRadius: "0.5rem"}}
          />
        </Grid>
        <Grid item sx={{ width: '70vw' }}>
          <TextField
            fullWidth
            variant="standard"
            name='to'
            label='Para quien/es es el mail'
            value={inputs.to}
            onChange={handleChange}
            palceholder='cada usuario va separado por una coma'
            InputProps={{disableUnderline: true}}
            InputLabelProps={{color: "grey"}}
            sx={{backgroundColor: "rgb(249, 249, 249)", borderRadius: "0.3rem"}}
          />
        </Grid>
        <Grid item sx={{ width: '70vw' }}>
          <TextField
            multiline
            rows={7}
            fullWidth
            variant="standard"
            name='content'
            label='Contenido del mail'
            onChange={handleChange}
            value={inputs.content}
            InputProps={{disableUnderline: true}}
            InputLabelProps={{color: "grey"}}
            sx={{backgroundColor: "rgb(249, 249, 249)", borderRadius: "0.3rem"}}
          />
        </Grid>
        <Grid item sx={{ width: '70vw', marginBottom: '0.5%' }}>
          <TextField
            fullWidth
            variant="standard"
            name='link'
            label='Link unico'
            value={inputs.link}
            onChange={handleChange}
            InputProps={{disableUnderline: true}}
            InputLabelProps={{color: "grey"}}
            sx={{backgroundColor: "rgb(249, 249, 249)", borderRadius: "0.3rem"}}
          />
        </Grid>
        <Grid container sx={{display: "flex", flexDirection: "row" , justifyContent: "space-evenly"}}>
            <Button sx={{ backgroundColor: "rgb(4, 15, 57)", marginTop: '1%'}} onClick={() => handlePetition("reservas")} variant='contained'>reservas de esta semana</Button>
            <Button sx={{ backgroundColor: "rgb(4, 15, 57)", marginTop: '1%'}} onClick={() => handlePetition("spam")} variant='contained'>spam</Button>
        </Grid>
      </Grid>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          width: '78.2vw',
          marginLeft: '10%',
          marginTop: '5%',
          backgroundColor: "rgb(249, 249, 249)",
          paddingTop: '1%',
          borderRadius: "1rem",
          border: "2px solid black",
          
        }}
      >
        <Typography gutterBottom fontWeight='600' variant='h2'sx={{width: '75vw',  borderBottom: "2px solid black", }}>
          Vista previa:
        </Typography>
        <Grid sx={{width: '75vw',  borderRadius: "1rem", }}>
          <Typography
            variant='h2'
            gutterBottom
            sx={{ marginLeft: '1%', marginTop: "1%"}}
          >
            
            <Typography variant='h2' marginLeft='1%'>
              {inputs.title}
            </Typography>
          </Typography>
          <Typography
            variant='h4'
            gutterBottom
            sx={{ paddingLeft: '1%', }}
          >
            Destinatarios:
            <Typography variant='h6' marginLeft='1%'>
              {inputs.to
                .replace(/\s+/g, '')
                .split(',')
                .map((elem) => {
                  return `<${elem}>`;
                })}
            </Typography>
            {/* <Typography variant='h6' marginLeft='1%'>
              {inputs.to && inputs.to.split(',').length} 
            </Typography> */}
          </Typography>
          <Typography
            variant='h4'
            gutterBottom
            sx={{ paddingLeft: '1%', }}
          >
            
            <Typography
              variant='h4'
              sx={{ whiteSpace: 'pre-line', marginLeft: '1%'}}
            >
              {`
                            ${inputs.content}
                            `}
              <a href={inputs.link}>{inputs.link}</a>
            </Typography>
          </Typography>
        </Grid>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          sx={{ alignSelf: 'center', backgroundColor: "rgb(4, 15, 57)", marginTop: '1%' }}
          variant='contained'
          size='large'
          onClick={handleSubmit}
        >
          Mandar
        </Button>
      </CardActions>
    </Card>
  );
}
