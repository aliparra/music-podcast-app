import { ReactElement } from 'react';
import { CustomLink } from '@/atoms/custom-link/CustomLink';
import './nav-bar.css';

const NavBar = (): ReactElement => {
	return (
		<div className="nav-bar">
			<CustomLink size="large" link={'/'}>
				Podcaster
			</CustomLink>
		</div>
	);
};

export default NavBar;
