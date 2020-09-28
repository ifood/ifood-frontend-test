import React, { useState, useEffect, Fragment, ChangeEvent } from "react";
import moment from "moment";
import { RouteComponentProps } from "react-router";
import {
	Filter,
	QueryFilter,
	DateFilterInput,
	IntegerFilterInput,
	SelectFilterInput
} from "../../components/Filter/Filter";
import { Profile } from "../../components/Profile/Profile";
import { Playlist } from "../../components/Playlist/Playlist";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SpotifyService } from "../../services/spotify";
import "./Playlists.scss";

export interface Playlist {
	id: string;
	name: string;
	amount: number;
	image: string;
}

export const Playlists = ({ history }: RouteComponentProps) => {
	const [filters, setFilters] = useState<Filter[]>([]);
	const [currentFilters, setCurrentFilters] = useState<QueryFilter[]>([]);
	const [playlists, setPlaylists] = useState<Playlist[]>([]);
	const [filtered, setFiltered] = useState<Playlist[]>([]);

	useEffect(() => {
		getMockFilters();
		getUserPlaylist();
	}, []);

	useEffect(() => {
		setTimeout(() => {
			const params =
				currentFilters.length > 0
					? currentFilters
							.map(filter => `${filter.field}=${filter.value}`)
							.reduce((accumulator, current) => `${accumulator}&${current}`)
					: "";

			getUserPlaylistBasedOnFilter(params);
		}, 30000);
	});

	useEffect(() => {
		const params =
			currentFilters.length > 0
				? currentFilters
						.map(filter => `${filter.field}=${filter.value}`)
						.reduce((accumulator, current) => `${accumulator}&${current}`)
				: "";

		getUserPlaylistBasedOnFilter(params);
	}, [currentFilters]);

	const getMockFilters = async () => {
		const filters = await SpotifyService.getMockFilters();
		setFilters(filters);
	};

	const getUserPlaylist = async () => {
		const playlists = await SpotifyService.getAllPlaylists();
		setPlaylists(playlists);
	};

	const getUserPlaylistBasedOnFilter = async (params: any) => {
		const playlists = await SpotifyService.getUserPlaylistBasedOnFilter(params);
		setPlaylists(playlists);
	};

	const goToPlaylistPage = ({ id, name, amount, image }: Playlist) => {
		history.push({
			pathname: "/playlist",
			state: { id, name, amount, image }
		});
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		const filtersAux = currentFilters.filter(filter => filter.field !== name);
		if (value && validateField(name, value)) {
			const convertedValue = convertDate(name, value);
			filtersAux.push({
				field: name,
				value: convertedValue
			});
		}
		setCurrentFilters(filtersAux);
	};

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = event.target;
		const filtersAux = currentFilters.filter(filter => filter.field !== name);
		if (value && validateField(name, value)) {
			filtersAux.push({
				field: name,
				value
			});
		}
		setCurrentFilters(filtersAux);
	};

	const validateField = (field: string, value: string) => {
		const filter = filters.find(filter => filter.id === field);
		if (filter && filter.validation) {
			if (
				filter.validation.primitiveType &&
				filter.validation.min &&
				filter.validation.max
			) {
				return (
					filter.validation.min <= Number(value) &&
					filter.validation.max >= Number(value)
				);
			} else if (filter.validation.entityType === "DATE_TIME") {
				return moment(value).isValid();
			} else {
				return true;
			}
		} else if (filter) {
			return true;
		}

		return false;
	};

	const convertDate = (field: string, value: string) => {
		const currentFilter = filters.find(filter => filter.id === field);
		if (
			currentFilter &&
			currentFilter.validation &&
			currentFilter.validation.entityType &&
			currentFilter.validation.entityType === "DATE_TIME"
		) {
			return moment(value).format("yyyy-MM-DDTHH:mm:ss");
		}
		return value;
	};

	const onSearch = (value: string) => {
		if (!value.length) return setFiltered([]);

		const items = playlists.filter(({ name }) =>
			name.toLowerCase().includes(value.toLowerCase())
		);
		setFiltered(items);
	};

	return (
		<div className="playlists">
			<section className="playlists__content">
				<Profile {...SpotifyService.getUserInformation()} />
				<div className="playlists__search-content">
					<SearchBar onSearch={onSearch} placeholder="Pesquisar..." />
				</div>

				<div className="playlists__filter">
					{filters.map(filter => {
						if (
							filter.validation &&
							filter.validation.primitiveType === "INTEGER"
						) {
							return (
								<IntegerFilterInput
									filter={filter}
									onChanged={handleInputChange}
								/>
							);
						}
						if (
							filter.validation &&
							filter.validation.primitiveType === "STRING"
						) {
							return (
								<DateFilterInput
									filter={filter}
									onChanged={handleInputChange}
								/>
							);
						}
						return (
							<SelectFilterInput
								filter={filter}
								onChanged={handleSelectChange}
							/>
						);
					})}
				</div>

				<div className="playlists__content__items">
					{filtered.length
						? filtered.map(filter => (
								<Fragment key={filter.id}>
									<Playlist {...filter} onClick={goToPlaylistPage} />
								</Fragment>
						  ))
						: playlists.map(playlist => (
								<Fragment key={playlist.id}>
									<Playlist {...playlist} onClick={goToPlaylistPage} />
								</Fragment>
						  ))}
				</div>
			</section>
		</div>
	);
};
