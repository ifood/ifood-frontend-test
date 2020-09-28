import React from "react";

export interface Filter {
	id: string;
	name: string;
	values?: Value[];
	validation?: Validation;
}

interface Value {
	value: string;
	name: string;
}

interface Validation {
	primitiveType: string;
	entityType: string;
	pattern?: string;
	min?: number;
	max?: number;
}

export interface QueryFilter {
	field: string;
	value: string;
}

type props = {
	filter: Filter;
	onChanged?: (event: React.ChangeEvent<any>) => void;
};

export function DateFilterInput(props: props) {
	const { filter, onChanged } = props;
	return (
		<div key={filter.id} className="playlists__filter__item">
			<label htmlFor={filter.id}>{filter.name}</label>
			<input
				key={filter.id}
				type="datetime-local"
				name={filter.id}
				onChange={onChanged}
			/>
		</div>
	);
}

export function IntegerFilterInput(props: props) {
	const { filter, onChanged } = props;
	return (
		<div key={filter.id} className="playlists__filter__item">
			<label htmlFor={filter.id}>{filter.name}</label>
			<input
				key={filter.id}
				type="number"
				name={filter.id}
				onChange={onChanged}
			/>
		</div>
	);
}

export function SelectFilterInput(props: props) {
	const { filter, onChanged } = props;
	return (
		<div key={filter.id} className="playlists__filter__item">
			<label htmlFor={filter.id}>{filter.name}</label>
			<select
				key={filter.id}
				name={filter.id}
				id={filter.id}
				onChange={onChanged}
			>
				{filter.values &&
					filter.values.map(option => (
						<option key={option.value} value={option.value}>
							{option.name}
						</option>
					))}
			</select>
		</div>
	);
}
