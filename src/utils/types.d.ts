export interface Values {
	name: string;
	value: string;
}

export interface ValidateTimestamp {
	typeEntity: number;
	pattern: number;
	typePrimative: string;
}

export interface ValidateLimit {
	max: number;
	min: number;
	typePrimative: string;
}

export interface ValidateOffset {
	primativeType: string;
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