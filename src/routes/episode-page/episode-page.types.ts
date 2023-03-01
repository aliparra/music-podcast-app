export type Genre = {
	id: string;
	name: string;
};

export type Episode = {
	contentAdvisoryRating: string;
	trackViewUrl: string;
	episodeUrl: string;
	artworkUrl60: string;
	episodeFileExtension: string;
	episodeContentType: string;
	artworkUrl160: string;
	artistIds: string[];
	trackTimeMillis: number;
	collectionViewUrl: string;
	genres: Genre[];
	episodeGuid: string;
	description: string;
	closedCaptioning: string;
	feedUrl: string;
	collectionId: number;
	collectionName: string;
	releaseDate: Date;
	shortDescription: string;
	trackId: number;
	trackName: string;
	country: string;
	artworkUrl600: string;
	kind: string;
	wrapperType: string;
	previewUrl: string;
};

export type PodcastDetail = {
	resultcount: number;
	results: Episode[];
};
