import PropTypes from 'prop-types';
import { CardPropTypes } from '@/atoms/card/card.types';
import './card.css';
import { ReactElement } from 'react';

const Card = ({ image, title, author }: CardPropTypes) : ReactElement => {
	return (
		<div className="card__wrapper">
			<div className="custom-card">
				<div className="circle-container">
					<img className="circle" src={image.url} alt={image.description} />
				</div>
				<div className="custom-card-info">
					<h2>{title}</h2>
					<p>Author: {author}</p>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.object,
	title: PropTypes.string,
	author: PropTypes.string,
};

export default Card;
