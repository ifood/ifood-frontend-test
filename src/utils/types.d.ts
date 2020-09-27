export interface Values {
	name: string;
	value: string;
}

export interface ValidateTimestamp {
	typeEntity: number;
	pattern: number;
	primitiveType: string;
}

export interface ValidateLimit {
	max: number;
	min: number;
	primitiveType: string;
}

export interface ValidateOffset {
	primitiveType: string;
}

export interface ArrayOfValues {
	id: string;
	name: string;
	values: Values[];
}

export interface ArrayOfValidateTimestamp {
	id: string;
	name: string;
	validation: ValidateTimestamp;
}

export interface ArrayOfValidateLimit {
	id: string;
	name: string;
	validation: Validation;
}

export interface ArrayOfValidateOffset {
	id: string;
	name: string;
	validation: Validation;
}

export interface FilterOptionsProps {
	filters: [
		ArrayOfValues[],
		ArrayOfValues[],
		ArrayOfValidateTimestamp,
		ArrayOfValidateLimit,
		ArrayOfValidateOffset
	];
}

export interface FilterValueProps {
	locale: string;
	country: string;
	timestamp: number;
	limit: number;
	offset: number;
}

export interface TypeAction {
	type: string;
	payload: any;
}

export interface ImgProps {
	url: string;
}

export interface ItemsProps {
	name: string;
	description: string;
	href: string;
	images: ImgProps[];

}

export interface FeaturedPlaylistStateProps {
	message: string;
	playlists: {
		items: ItemsProps[];
	};
}