import '@/molecules/episode-card/episode-card.css';
import { EpisodeCardProps } from '@/molecules/episode-card/episode-card.types';
import PropTypes from 'prop-types';

const EpisodeCard = ({ data }: EpisodeCardProps) => {
	const { title, description, genres, src } = data;

	/**
	 * A function to generate template with spans and an array elements.
	 * @returns a JSX element
	 */

	const getGenres = (genresList: string[]) => {
		const genresLength = genresList.length;
		return genresList.map((genre, i) => {
			if (genresLength - 1 === i) {
				return (
					<span key={i}>
						{' '}
						and <span className="--blue">{genre}</span>.
					</span>
				);
			} else if (genresLength - 2 === i) {
				return (
					<span key={i} className="--blue">
						{' '}
						{genre}
					</span>
				);
			} else {
				return (
					<span key={i}>
						{' '}
						<span className="--blue">{genre}</span>,
					</span>
				);
			}
		});
	};

	return (
		<div className="episode-card">
			<h2>{title}</h2>
			<p>{description}</p>
			<p>This episode has genres:{getGenres(genres)}</p>
			<hr />
			<audio src={src} controls />
		</div>
	);
};

EpisodeCard.propTypes = {
	data: PropTypes.object,
};

export default EpisodeCard;
