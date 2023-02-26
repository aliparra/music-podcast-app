export type Image = {
	url: string;
	description: string;
};

export type CardPropTypes = {
	image?: Image;
	title: string;
	author: string;
};
