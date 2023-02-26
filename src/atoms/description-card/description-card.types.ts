export type Image = {
	url: string;
	description: string;
};

export type DescriptionCardProps = {
	image?: Image;
	title: string;
	author: string;
	description: string;
};
