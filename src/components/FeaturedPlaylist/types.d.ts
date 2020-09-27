export interface ImgProps {
	url: string;
}

export interface ItemsProps {
	name: string;
	description: string;
	href: string;
	images: ImgProps[];
	isVisible?: boolean;
}