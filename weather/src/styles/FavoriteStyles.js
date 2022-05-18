import styled from 'styled-components';
import Slider from 'react-slick';

export const Heading = styled.h2`
	margin-top: 0.6rem;
	font-size: 2.5rem;
    color: #2b9cd7d9;
    text-shadow: white 1px 1px, rgb(118 118 118) 6px 2px;
	letter-spacing: .4rem;
	line-height: 1.06;
	width: ${({ width }) => (width ? width : '100%')};
	@media screen and (max-width: 500px) and (max-height:600px) {
		margin-top: -.6rem !important;
		font-size: 1.8rem;
	}
	@media screen and (max-width: 500px) and (min-height:600px) {
		margin:.8rem 0 !important;
		font-size: 1.8rem;
	}
	@media screen and (max-width: 450px) {
		font-size: 1.6rem;
	}
	@media screen and (max-width: 320px) {
		font-size: 1.3rem;
	}
`;

export const Section = styled.section`
	margin: ${({ margin }) => (margin ? margin : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	@media screen and (max-width: 768px) {
		padding: 70px 0;
	}
	background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(to bottom, #363946, #363946 48%,#ff9900 2% ,#ff9900 52%, #ff9900);
`;

export const RowContainer = styled.div`
	display: flex;
	align-items: center;
    justify-content: center;
    flex-direction: column;
	@media screen and (max-width: 500px) {
		gap:15px;
	}
`;

export const CarouselImage = styled.img`
	background: linear-gradient(to bottom, #0e1428ba, #47bdce, #e0a8909e);
	border-radius: 40px;
	width: ${({ width }) => (width ? width : '130px')};
`;

export const CityWrapper = styled.div`
	position: relative !important;
	display: flex !important;
	flex-direction: column !important;
	justify-content: center !important;
	align-items: center !important;
    border: 1.34px solid #a4a4a4de;
    border-radius: 18px;
    padding: 25px;
	margin-top: -1rem;
	height:310px;
	width:300px !important;
    text-align: center;
	background: #fffbec;
	box-shadow: 0 6px 20px black;
	@media screen and (max-width: 855px) {
		width: 75vw !important;
	}
	@media screen and (max-width: 750px) {
		width:80vw !important;
	}

`;

export const ButtonContainer = styled.div`
	display: flex;
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}

	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;

	.slick-track {
		display: flex;
		padding: 30px;
		// gap: 6rem;
		gap: 3rem;
		cursor: grabbing;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}

	.slick-list {
		overflow: hidden;
	}
`;

export const CardButton = styled.button`
margin: auto 0 0 0;
width: 100%;
font-weight: 600;
	background-color: #1d609c;
	font-size: 1.3rem;
	padding: 5px 10px;
	color: #fff;
	cursor: pointer;
	border: none;
	border-radius: 0 0 10px 10px;

	&:hover {
		background-color: #112f4a;
		transition: background-color 0.2s ease-in;
	}
`;

export const CardsButton = styled.button`
	margin: auto 0 0 0;
	width: 100%;
	font-weight:500;
	font-size: 20px;
	padding: 15px 20px;
	border:none;
	border-radius:8px ;
	margin-bottom: 10px;
	// background-color: rgb(182, 69, 31);
	background-color: #0097e6;
	color: #fff;
	transition: all 0.4s ease;
	&:hover{
		font-size: 22px;
		cursor: pointer;
		transform: scale(1.08);
		transition: all 0.4s ease;
		// background-color: rgb(162, 66, 26);
		background-color: #2ba1e0eb;
	}
	@media screen and (max-width: 340px) {
		font-size: .9rem !important;
	}
`


export const TextWrapper = styled.p`
	text-transform: capitalize;
	font-weight:600;
	font-size: 1.5rem;
	margin-bottom: 10px;
	word-break: break-word;
	@media screen and (max-width: 600px) {
		font-size: 1.5rem;
	}
	@media screen and (max-width: 450px) {
		font-size: 1.2rem;
	}
`;

export const Temperature = styled.span`
	font-family: 'Varela Round', sans-serif;
	font-size: 3rem;
	color:#004d66eb;
`;

export const NoFavorites = styled.p`
	text-align: center;
	font-size: 1.6rem;
	margin-top: 1.6rem;
	color: #f0f0f0f0;
	font-weight: 500;
`;

export const IconWrapper = styled.span`
	position: absolute ;
	top: 3px ;
	left: 3px ;
	transition: all 0.2s ease;
	&:hover{
		cursor: pointer;
		transition: all 0.2s ease;
		transform: scale(1.5);
	}
	@media screen and (max-width: 855px) {
		top: 15px !important;
		left: 15px !important;
		
	}
	@media screen and (max-width: 565px) {
		top: 2px !important;
		left: 2px !important;
		
	}
`;