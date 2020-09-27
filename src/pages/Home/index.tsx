import React, { useState, useReducer, useEffect } from 'react';
import { useNavigate	} from 'react-router-dom';
import FilterIcon from '@material-ui/icons/FilterListRounded';
import logo from '../../assets/img/logo.png';
import { ButtonFilter, Container, Header, Logo, SearcherInput, SearcherWrapper } from './style';
import Filters from '../../components/Filters';
import FeaturedPlaylist from '../../components/FeaturedPlaylist';
import { ItemsProps	} from '../../components/FeaturedPlaylist/types';
import { FeaturedPlaylistStateProps, FilterOptionsProps	} from '../../utils/types';
import { MOCKY_API, SPOTIFY_API } from '../../services/api';
import reducer, { initialState } from '../../store';

function Home () {
	const [playlists, setPlaylists] = useState<ItemsProps[] | undefined>([]);
	const [featuredPlaylist, setFeaturedPlaylist] = useState<FeaturedPlaylistStateProps | null | undefined>(null);

	const [filterOptions, setFilterOptions] = useState<FilterOptionsProps | null>(null);
	const [filterData, setFilterData] = useReducer(reducer, initialState);
	const [isFilterOpen, setFilterOpen] = useState(false);

	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	useEffect(() => {(async () => {
		const {	data } = await MOCKY_API.get('/5a25fade2e0000213aa90776');
		setFilterOptions(data);
	})();
	}, [setFilterOptions]);

	useEffect(() => {
		const getApiSpotify = async () => {
			try {
				const { data } = await SPOTIFY_API.get('/browse/featured-playlists', {
					params: filterData,
				});

				setFeaturedPlaylist(data);
				const newPlaylists = data.playlists.items.map((playlist: ItemsProps) => {
					return {
						...playlist,
						isVisible: true,
					};
				});
				setPlaylists(newPlaylists);
			} catch (error) {
				if (error.response.status === 401) {
					navigate('/');
					console.warn("Auth Error");
				}
				console.warn(error);
			}
		};
		getApiSpotify();
		const interval = setInterval(() => getApiSpotify(), 30000);
		return () => clearInterval(interval);
	}, [filterData, navigate]);

	useEffect(() => {
		if (!search) {
			const newPlaylists = featuredPlaylist?.playlists.items.map((playlist: ItemsProps) => {
				return {
					...playlist,
					isVisible: true,
				};
			});

			setPlaylists(newPlaylists);
		}

		if (search) {
			const newPlaylist = playlists?.map((playlist: ItemsProps) => {
				return {
					...playlist,
					isVisible: !!playlist.name.toLowerCase().includes(search.toLowerCase()),
				};
			});
			setPlaylists(newPlaylist);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [featuredPlaylist, search]);


	return (
		<Container>
			<Header>
				<Logo src={logo} alt="Spotifood" />
				<span>
					<strong> Playlists </strong> no conforto de casa
				</span>
				<SearcherWrapper>
					<SearcherInput
            placeholder="Buscar por nome"
            onChange={(e) => setSearch(e.target.value)}
          />
					<ButtonFilter onClick={() => setFilterOpen(!isFilterOpen)}>
						<FilterIcon />
						<span>Filtrar</span>
					</ButtonFilter>
					{isFilterOpen && (
						<Filters
							filterData={filterData}
							setFilterData={setFilterData}
							filterOptions={filterOptions}
						/>
						)}
				</SearcherWrapper>
			</Header>
			<FeaturedPlaylist
				playlists={playlists}
				message={featuredPlaylist?.message}
			/>
		</Container>
	);
}

export default Home;