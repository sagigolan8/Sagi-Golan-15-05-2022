import React, { useState, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
    NavIcon,
} from '../styles/NavbarStyles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const linksData = [
	{
		text: 'Weather',
		to: '/',
	},
	{
		text: 'Favorites',
		to: '/favorites',
	},
];

const Navbar = () => {
    const {isDay} = useSelector((state) => state.isDay);
	const navRef = useRef();
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	const handleClick = () => {
		setShow(!show);
	};

	const closeMobileMenu = (to) => {
		navigate(to);
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
		<Nav ref={navRef}>
				<NavbarContainer>
					<NavLogo>
						<NavIcon onClick={(e)=>{
							e.target.classList.toggle('spin');
						}} src={isDay} alt="Is Day?" />
					</NavLogo> 
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{linksData.map((el, index) => (
							<NavItem key={index}>
								<NavLinks
									inverseHover 
									inverse 
									onClick={() => closeMobileMenu(el.to)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
			</IconContext.Provider> 
	);
};		





export default Navbar;





