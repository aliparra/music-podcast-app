import '@/atoms/description-card/description-card.css';
import { DescriptionCardProps } from '@/atoms/description-card/description-card.types';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';

const DescriptionCard = ({
	image,
	title,
	author,
	description,
	handleRedirection,
}: DescriptionCardProps): ReactElement => {
	return (
		<div className="description-card__wrapper">
			<div className="description-card">
				<div
					className={`${
						handleRedirection && `--link`
					} description-card__image-container`}
					onClick={handleRedirection && handleRedirection}
				>
					<img src={image?.url} alt={image?.description} />
				</div>
				<div className="description-card__info">
					<div
						className={`${
							handleRedirection && `--link`
						} description-card__basic-info`}
						onClick={handleRedirection && handleRedirection}
					>
						<h2>{title}</h2>
						<p>by {author}</p>
					</div>
					<div className="description-card__description">
						<h3>Description:</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

DescriptionCard.defaultProps = {
	image: {
		url: '/images/image-placeholder.png',
		description: 'default',
	},
};

DescriptionCard.propTypes = {
	image: PropTypes.object,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	handleRedirection: PropTypes.func,
};

export default DescriptionCard;
