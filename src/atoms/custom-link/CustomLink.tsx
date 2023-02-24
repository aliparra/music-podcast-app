import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { CustomLinkProps } from '@/atoms/custom-link/custom-link.types';
import { Link } from 'react-router-dom';
import '@/atoms/custom-link/custom-link.css';

export const CustomLink = ({
	size,
	link,
	children,
}: CustomLinkProps): ReactElement => {
	return (
		<div>
			<Link to={link} className={`--${size}`}>
				{children}
			</Link>
		</div>
	);
};

CustomLink.defaultProps = {
	size: 'medium',
};

CustomLink.propTypes = {
	size: PropTypes.oneOf(['medium', 'large']),
	url: PropTypes.string,
	children: PropTypes.node,
};
