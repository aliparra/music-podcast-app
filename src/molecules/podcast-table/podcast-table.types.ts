export type Link = {
	label: string;
	url: string;
};

export type PodcastData = {
	link: Link;
	date: string;
	duration: number;
};

export type PodcastTableProps = {
	data: PodcastData[];
};
