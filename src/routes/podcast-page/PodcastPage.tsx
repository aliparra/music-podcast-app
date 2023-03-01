import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '@/hooks/useFetch';

import DescriptionCard from '@/atoms/description-card/DescriptionCard';
import PodcastTable from '@/molecules/podcast-table/PodcastTable';
import './podcast-page.css';

function PodcastPage(): JSX.Element {
	const { podcastId } = useParams<{ podcastId: string }>();
	const podcastStringData = localStorage.getItem('podcastData');
	const podcastData = JSON.parse(`${podcastStringData}`);

	const episodesUrl = `https://itunes.apple.com/search?term=${podcastData.title}&entity=podcastEpisode`;

	const {
		data: episodeData,
		isLoading: isLoadingEpisodes,
		hasError: hasErrorEpisodes,
	} = useFetch(episodesUrl);

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

	return (
		<div className="podcast-page">
			{podcastData ? (
				<div className="podcast-page__card">
					<DescriptionCard
						title={podcastData.title}
						author={podcastData.author}
						description={podcastData.description}
						image={{
							url: podcastData.imageUrl,
							description: podcastData.imageLabel,
						}}
					/>
				</div>
			) : (
				<div className="spinner-grow text-info" role="status">
					<span className="visually-hidden">Loading...</span>
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
