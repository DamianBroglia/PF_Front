import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { getPackageByName } from '../../redux/actions/packageActions';
import { getActivityByName } from '../../redux/actions/ActivitiesActions';
import { getHotelByNameAprox } from "../../redux/actions/HotelesActions";
import { getRestoByName } from "../../redux/actions/RestaurantsActions";

const SearchBar = (dondeEstoy) => {
  const { ubicacion } = dondeEstoy;
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    switch(ubicacion) {
      case 'activity':
        dispatch(getActivityByName(e.target.value));
      case "hotel":
        dispatch(getHotelByNameAprox(e.target.value));
      case "restaurant":
        dispatch(getRestoByName(e.target.value));
      default:
        dispatch(getPackageByName(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    if (ubicacion === 'activity') {
      e.preventDefault();
      dispatch(getActivityByName(searchTerm));
      setSearchTerm('');
    } else {
      e.preventDefault();
      dispatch(getPackageByName(searchTerm));
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSearch} className='search-box'>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
        placeholder='Busca destinos, hoteles, actividades...'
        className='search-bar-input'
      />
      <button
        type='submit'
        className='search-bar-button'
        onClick={(e) => handleSubmit(e)}
      >
        <FontAwesomeIcon icon={faSearch} size='2x' />
      </button>
    </form>
  );
};

export default SearchBar;
