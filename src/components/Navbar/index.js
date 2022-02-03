import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		{/* <NavLink to='/dashboard' activeStyle>
            Track Your Period
        </NavLink> */}
		<NavLink to='/register' activeStyle>
			Register
		</NavLink>
		<NavLink to='/login' activeStyle>
			Login
		</NavLink>
        <NavLink to='/Notes' activeStyle>
            Journal
        </NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
