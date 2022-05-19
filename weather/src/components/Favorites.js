import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
	ButtonContainer,
	ReviewSlider,
	CarouselImage,
	RowContainer, 
	Heading, 
	Section, 
	TextWrapper,
	CityWrapper,
	Temperature,
	CardsButton,
	IconWrapper,
	NoFavorites,
} from '../styles/FavoriteStyles';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { iconCdn } from '../helpers/assets';
import TempSwitch from './TempSwitch';
import { useNavigate } from 'react-router-dom';
import { updateCity } from '../reducers/citySlice';
import { removeFavorite } from '../reducers/favoritesSlice';
import { infoNotification } from '../helpers/alerts';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const tempType = useSelector((state) => state.tempType);
  const [sliderRef, setSliderRef] = useState(null);
  const navigate = useNavigate();

  const sliderSettings =
  favorites.length &&
  { 
  	arrows: false,
  	slidesToShow:  favorites.length > 2 ? 3 : favorites.length,
  	focusOnselect: false,
  	accessability: false,
  	infinite: true,
  	autoplay: true,
  	autoplaySpeed: 1500,
  	responsive: [
  		{
  			breakpoint: 1080,
  			settings: {
  				slidesToShow: favorites.length > 1 ? 2 : favorites.length,
  			},
  		},
  
  		{
  			breakpoint: 900,
  			settings: {
  				slidesToShow: 1,
  			},
  		},
  	],
  };
  
  const handleSearch = (city) =>{
  	dispatch(updateCity({...city,favorite: true}));
  	navigate('/',{ state: { payload: city.name } });
  }  
  const removeFromFavorites = (city) =>{
  	dispatch(updateCity({...city, favorite: false}));
  	dispatch(removeFavorite({key:city.key}));
  	infoNotification
  	(`${city.name.charAt(0).toUpperCase()}${city.name.slice(1)} deleted from your favorites`);
  }  

  return (
		<Section className='favorites-wrapper' margin="auto" maxWidth="4050px" padding="50px 70px" >
		  <RowContainer justify="space-between" margin="1rem" wrap="wrap">
			  <Heading width="auto">
				  Favorites cities - {favorites.length}
			  </Heading>
			  <div style={{margin:'2rem 0'}} className='switchContainer'>
			    <TempSwitch borderStyle={{border:'2px solid #8c8c8c',borderRadius:'30px',padding:'2px'}}/>
			  </div>
			  <ButtonContainer>
				  <IconContext.Provider value={{ size: '3rem', color: '#3cbcff', }}>
					  <FaArrowCircleLeft 
					  	style={{background:'#fffcee',borderRadius:'30px'}} 
						onClick={sliderRef?.slickPrev} 
					  />
					  <FaArrowCircleRight
					  	style={{background:'#fffcee',borderRadius:'30px'}} 
						onClick={sliderRef?.slickNext}
					  />
				  </IconContext.Provider>
			  </ButtonContainer>
		  </RowContainer>

		{ 
		  !favorites.length 
		  ? 
		  <NoFavorites>There are no favorites in your collection.</NoFavorites> 
		  :  
		  <ReviewSlider {...sliderSettings } ref={setSliderRef}>
			  {favorites.map((el) => (
				<CityWrapper className='city-wrapper' key={el.key}>
					<TextWrapper >{el.name}</TextWrapper>
					<IconWrapper 
						onClick={()=> removeFromFavorites(el)} 
					>
						<StarIcon style={{color:'#f2b01e',fontSize:'2rem'}}/>
					</IconWrapper>
					<CarouselImage 	
						src={iconCdn(el.currentWeather.weatherIcon)} 
						alt="weather icon" 
					/>
					<Temperature className='favorite-temp'>
						{
							(
								`${tempType.tempType === 'C'
								? 
								el.currentWeather.temp.celsius 
								: 
								el.currentWeather.temp.fahrenheit}°`
							)
						}
					</Temperature>
					<CardsButton onClick={()=>handleSearch(el)}>Weather Forecast</CardsButton>
				</CityWrapper>
			  ))}
		  </ReviewSlider>
		}
	  </Section>
	);
};

export default Favorites;
