import '@/molecules/episode-card/episode-card.css';
import { EpisodeCardProps } from '@/molecules/episode-card/episode-card.types';
import PropTypes from 'prop-types';

const EpisodeCard = ({ data }: EpisodeCardProps) => {
  const { title, description, genres, src } = data;

  return (
    <div className="episode-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Episode genres: <span className="--blue">{genres.join(', ')}</span></p>
      <hr />
      <audio src={src} controls />
    </div>
  );
};

EpisodeCard.propTypes = {
  data: PropTypes.object,
};

export default EpisodeCard;
