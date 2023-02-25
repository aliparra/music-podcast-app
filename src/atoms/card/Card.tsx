import PropTypes from 'prop-types';
import { CardPropTypes } from '@/atoms/card/card.types';
import './card.css';

const Card = ({ image, title, author }: CardPropTypes) => {
	return (
		<div className="card__wrapper">
			<div className="card">
				<div className="circle-container">
					<img className="circle" src={image.url} alt={image.description} />
				</div>
				<div className="card-info">
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