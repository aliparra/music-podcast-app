import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '@/hooks/useFetch';

import DescriptionCard from '@/atoms/description-card/DescriptionCard';
import PodcastTable from '@/molecules/podcast-table/PodcastTable';
import './podcast-page.css';

function PodcastPage(): JSX.Element {
	const { podcastId } = useParams<{ podcastId: string }>();
	const podcastsUrl = `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`;
	const episodesUrl = `https://itunes.apple.com/search?term=${localStorage.getItem(
		'podcastTitle'
	)}&entity=podcastEpisode`;

	const {
		data: episodeData,
		isLoading: isLoadingEpisodes,
		hasError: hasErrorEpisodes,
	} = useFetch(episodesUrl);

	const {
		data: podcastData,
		isLoading: isLoadingPodcast,
		hasError: hasErrorPodcast,
	} = useFetch(podcastsUrl);

	const tableData = episodeData?.results.map((episode: any) => {
		return {
			link: {
				label: episode.trackName,
				url: `/podcast/${podcastId}/episode/${episode.trackId}`,
			},
			date: episode.releaseDate,
			duration: episode.trackTimeMillis,
		};
	});

	const findCurrentPodcast = (id: string) => {
		const podcastsList = podcastData?.feed?.entry;
		if (podcastsList) {
			return podcastsList.find(
				(podcast: any) => podcast?.id?.attributes['im:id'] === id
			);
		}
	};

	const createCardData = () => {
		const currentPodcast = podcastId && findCurrentPodcast(podcastId);
		const cardData = {
			image: {
				url: currentPodcast['im:image'][2].label,
				description: currentPodcast?.title?.label,
			},
			title: currentPodcast.title.label,
			author: currentPodcast['im:artist'].label,
			description: currentPodcast?.summary?.label || 'No description available',
		};
		return cardData;
	};

	return (
		<div className="podcast-page">
			{isLoadingPodcast ? (
				<div className="spinner-grow text-info" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			) : (
				<div className="podcast-page__card">
					<DescriptionCard
						title={createCardData().title}
						author={createCardData().author}
						description={createCardData().description}
						image={{
							url: createCardData().image.url,
							description: createCardData().image.description,
						}}
					/>
				</div>
			)}

			{isLoadingEpisodes ? (
				<div className="spinner-grow text-info" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			) : (
				<div>
					<div className="podcast-page__episode-counter">
						<h3>Episodes: {episodeData.resultCount}</h3>
					</div>
					<PodcastTable data={tableData} />
				</div>
			)}
		</div>
	);
}

export default PodcastPage;
