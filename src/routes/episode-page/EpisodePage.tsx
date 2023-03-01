import DescriptionCard from '@/atoms/description-card/DescriptionCard';
import EpisodeCard from '@/molecules/episode-card/EpisodeCard';
import './episode-page.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '@/hooks/useFetch';
import { PodcastDetail, Episode, Genre } from '@/routes/episode-page/episode-page.types';



function EpisodePage() {
  // Constants
  const { episodeId } = useParams<{ episodeId: string }>();
  const navigate = useNavigate();

  //functions
  // A function that redirect to podcast  by id
  const redirectToPodcast = (id: string) => {
    id !== '' && navigate(`/podcast/${id}`);
  };

  const podcastStringData = localStorage.getItem('podcastData');
  const podcastData = JSON.parse(`${podcastStringData}`);

  const episodesUrl = `https://itunes.apple.com/search?term=${podcastData.title}&entity=podcastEpisode`;

  const {
    data: episodesData,
    isLoading: isLoadingEpisodes,
  } = useFetch(episodesUrl);

  const generateData = (data: PodcastDetail) => {
    const episode = data.results.find(
      (item: Episode) => String(item.trackId) === episodeId
    );

    const genres = episode && episode.genres.length > 0 ? episode.genres?.map((genre: Genre) => genre?.name) : [];


    return {
      title: episode?.trackName || 'Untitled episode',
      description: episode?.description || 'This episode does not have a description',
      genres: genres || ['No genres defined yet'],
      src: episode?.episodeUrl || '',
    };
  };

  return (
    <div className="episode-page">
      <DescriptionCard
        handleRedirection={() => redirectToPodcast(podcastData.id)}
        title={podcastData.title}
        author={podcastData.author}
        description={podcastData.description}
        image={{
          url: podcastData.imageUrl,
          description: podcastData.imageLabel,
        }}
      />
      {isLoadingEpisodes && episodeId ? (
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <EpisodeCard data={generateData(episodesData)} />
      )}
    </div>
  );
}

export default EpisodePage;
