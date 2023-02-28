export type Episode = {
	title: string;
	description: string;
	genres: string[];
	src: string;
};

export type EpisodeCardProps = {
	data: Episode;
};
