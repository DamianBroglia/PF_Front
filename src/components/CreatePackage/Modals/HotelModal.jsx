import React from 'react';
import BasicModal from './BasicModal';
import { useState, useEffect } from 'react';
import { validateHotel } from './validateHotel';
import { Box, TextField } from '@mui/material';

export default function HotelModal({
  open,
  handleClose,
  addNewItem,
  defaultValues,
}) {
  const getContent = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'scroll',
          maxHeight: '70vh',
          '.MuiFormControl-root': {
            marginBottom: '3%',
          },
        }}
      >
        <TextField
          placeholder='nombre'
          name='name'
          id='name'
          label='Nombre'
          value={inputs.name}
          required
          fullWidth
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          placeholder='descripcion'
          name='description'
          id='description'
          label='Descripcion'
          multiline
          rows={4}
          value={inputs.description}
          required
          fullWidth
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
        />
        <TextField
          placeholder='ubicacion'
          name='location'
          id='location'
          label='Ubicacion'
          value={inputs.location}
          required
          fullWidth
          onChange={handleChange}
          error={!!errors.location}
          helperText={errors.location}
        />
        <TextField
          placeholder='img 1'
          name='img1'
          id='img1'
          label='Imagen 1'
          value={inputs.img1}
          required
          fullWidth
          onChange={handleChange}
          error={!!errors.img1}
          helperText={errors.img1}
        />
        <TextField
          placeholder='img 2'
          name='img2'
          id='img2'
          label='Imagen 2'
          value={inputs.img2}
          fullWidth
          onChange={handleChange}
          error={!!errors.img2}
          helperText={errors.img2}
        />
        <TextField
          placeholder='img 3'
          name='img3'
          id='img3'
          label='Imagen 3'
          value={inputs.img3}
          fullWidth
          onChange={handleChange}
          error={!!errors.img3}
          helperText={errors.img3}
        />
        <TextField
          placeholder='img 4'
          name='img4'
          id='img4'
          label='Imagen 4'
          value={inputs.img4}
          fullWidth
          onChange={handleChange}
          error={!!errors.img4}
          helperText={errors.img4}
        />
        <TextField
          placeholder='estrellas'
          name='stars'
          id='stars'
          label='Estrellas'
          value={inputs.stars}
          required
          fullWidth
          onChange={handleChange}
          error={!!errors.stars}
          helperText={errors.stars}
        />
        <TextField
          placeholder='precio por noche'
          name='priceDay'
          id='priceDay'
          label='Precio la noche'
          value={inputs.priceDay}
          type='number'
          required
          fullWidth
          onChange={handleChange}
          error={!!errors.priceDay}
          helperText={errors.priceDay}
        />
      </Box>
    );
  };

  const [inputs, setInputs] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(errors).length === 0) {
      const datosCombinados = {
        name: inputs.name,
        description: inputs.description,
        location: inputs.location,
        img: Array.from([
          inputs.img1,
          inputs.img2,
          inputs.img3,
          inputs.img4,
        ]).filter((elem) => elem !== ''),
        priceDay: inputs.priceDay,
        stars: inputs.stars,
      };
      addNewItem(datosCombinados);
    } else alert('hay errores en el formulario');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    setInputs(defaultValues);
  }, [open]);

  useEffect(() => {
    setErrors(validateHotel(inputs));
  }, [inputs]);

  return (
    <BasicModal
      open={open}
      handleClose={handleClose}
      addNewItem={addNewItem}
      defaultValues={defaultValues}
      title={'Nuevo Hotel:'}
      content={getContent()}
      handleSubmit={handleSubmit}
    />
  );
}
