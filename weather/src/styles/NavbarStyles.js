import styled from 'styled-components';

export const Nav = styled.nav`
    background: linear-gradient(to right,#000000a1,#021c41a8);
	margin-bottom: -60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	top: 0;
	z-index: 50;
	width: 100%;
	position: sticky;
	transition: background-color 0.3s ease-in;
	@media screen and (min-width: 1300px) {
		font-size: 1.5rem;
	}
	@media screen and (min-width: 1600px) {
		font-size: 1.4rem;
	}
	@media screen and (min-width: 2000px) {
		font-size: 1.6rem;
	}
`;


export const NavbarContainer = styled.div`
	display: flex;
	justify-content: start;
	height: 60px;
	width: 100%;
	max-width: 3000px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 30px;

	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;

export const NavLogo = styled.a`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;	
	z-index: 50;
`;

export const NavIcon = styled.img`
	-webkit-tap-highlight-color: transparent !important;
	margin-left: -1rem;
	width: 55px;
	overflow: hidden;
	transition: all 0.8s ease;
	border-radius: 50%;
	&:hover{
		transition: all 0.8s ease;
		box-shadow: 0 10px 24px #14151c;
		opacity:0.87;
	}
	@media screen and (max-width: 450px) {
		// width: 10rem;
	}
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 1000px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-70%,45%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 1200px) {
        gap:1rem ;
    }

	@media screen and (max-width: 1000px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 20%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #071c2f;
	}

	> li:first-child {
		margin-left: auto;
	}

	@media screen and (max-width: 500px) {
		padding-top: 50%;
	}

	@media screen and (min-width : 600px) and (max-width : 950px) and (orientation :landscape) {
		padding-top: 10%;
	}
`;

export const NavItem = styled.li`
	height: 30px;
	cursor: pointer;
	&.active-nav{
		border-bottom: 2px solid white;
		transition: all 0.3s ease-in;
		> a{
			color:#fff;
		}
	}
	
	@media screen and (max-width: 1000px) {
		width: 100%;
		padding: 0 0 2.2rem .5rem;
		&:hover {
			border: none;
		}
	}
	
	@media screen and (max-width: 500px) {
		padding: 0 0 2.3rem .5rem;
	}
	`;
	
	export const NavLinks = styled.a`
	color: ${({ inverse }) => ( inverse ? '#e9a35b' : '#fff')};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 1rem 1.3rem;
	height: 100%;
	font-size: 15px;
	font-weight: 500;
	transition: all 0.2s linear;
	&:hover {
		color: ${({ inverseHover }) => ( inverseHover ? '#c8c9d8' : '#6fd0f6')};
		transition: all 0.2s ease-out;
		transform: scale(1.17);
	}
	
	@media screen and (min-width: 1250px) {
        font-size: 1.2rem;

    } 
	@media screen and (max-width: 1250px) { 
        font-size: 1.2rem;
		padding: 1rem .39rem;
	}
	
	
	@media screen and (max-width: 1000px) {
		text-align: center;
		width: 100%;
		display: table;
		font-size: 20px;
		font-weight: 500;
		&:hover {
			transition: all 0.2s ease-out;
		}
		ul{
			background: linear-gradient(to right, #000000, #021c41);
		}
	}
	
	@media screen and (max-width : 660px) and (orientation :landscape) {
		font-size: 16px;
	}
	`;
	
	export const NavBtnLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
	`;
	
	
	export const NavUser = styled.a`
	text-transform: capitalize;
	white-space: nowrap;
	font-size: 1rem;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-weight: 600;
	color: #2dd580de;
	cursor: pointer;
	text-decoration: none;
	transition: all 0.4s linear; /* vendorless fallback */

	&:hover{
		opacity:0.85;
		transform: scale(1.06);
		transition: all 0.5s ease;
	}
	@media screen and (max-width: 410px) {
		font-size: .6rem;
		justify-content: center;
		white-space: normal;
	}
	@media screen and (max-width: 390px) {
		font-size: .6rem;
		justify-content: flex-end;
		white-space: normal;
		padding-bottom: 20px;
	}
	@media screen and (max-width: 330px) {
		padding-bottom: 0;
	}
	`;

	export const NavLogOut = styled.div`
	margin-right: 3rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-content: center;
	> :first-child{
		&:hover{
			opacity:0.85;
			transform: scale(1.25);
			transition: all 0.4s ease;
		}
		transition: all 0.4s linear; /* vendorless fallback */
	}
	`;