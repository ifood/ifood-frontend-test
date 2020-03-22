import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import ListFilter from '../presentation';

class ListFilterContainer extends React.PureComponent {
	static propTypes = {
		receiveFeaturedList: PropTypes.func
	};

	state = {
		name: '',
		filters: [],
		selected: null,
		playlist: [],
		filtered: {},
		query: new Map(),
		info: {
			status: false,
			message: ''
		},
		error: {
			status: false,
			message: ''
		},
		isShowInput: false,
		playlistFiltered: []
	};

	async componentDidMount() {
		try {
			const { data } = await axios.get('/filters');
			this.setState({
				filters: data.filters,
				error: { status: false, message: '' }
			});
		} catch (error) {
			this.setState({
				error: { status: true, message: error.response.data.message }
			});
		}
	}

	submit = async () => {
		const { query } = this.state;

		let params = '?';
		query.forEach((value, key) => {
			params += `${key}=${value}&`;
		});

		try {
			const { data } = await axios.get(`/playlists${params}`);
			this.setState({
				playlist: data,
				isShowInput: true,
				error: { status: false, message: '' }
			});
			this.props.receiveFeaturedList(data);
		} catch (error) {
			this.setState({
				error: { status: true, message: error.response.data.message }
			});
		}
	};

	handleFilter = event => {
		const selectedFilter = this.state.filters
			.filter(filter => filter.id === event.target.value)
			.map(filter => filter);

		this.setState({ filtered: selectedFilter[0], selected: event.target.value });
	};

	handleChangeRadio = event => {
		const { query, selected } = this.state;
		const queryMap = new Map(query.set(selected, event.target.value));

		this.setState({ query: queryMap });
	};

	handleChangeInput = event => {
		const { query, selected } = this.state;
		const { value } = event.target;

		this.setState({ info: { status: false, message: '' } });

		if (selected === 'limit' && (value < 1 || value > 50)) {
			this.setState({
				info: { status: true, message: 'A Quantidade deve ser entre 1 e 50' }
			});
			return;
		}

		const queryMap = new Map(query.set(selected, event.target.value));

		this.setState({ query: queryMap });
	};

	handleSearchName = event => {
		const { value } = event.target;

		if (value.length > 3) {
			this.setState({ name: value });
			this.searchByName(value);
		}

		if (!value) {
			this.setState({ name: value });
			this.resetPlaylist();
		}
	};

	resetPlaylist = () => {
		this.props.receiveFeaturedList(this.state.playlist);
	};

	searchByName = name => {
		const { playlist } = this.state;
		const pattern = new RegExp(String.raw`${name}`, 'i');

		let clone = playlist.filter(item => item.name.match(pattern));

		this.setState({ playlistFiltered: clone, name });
		this.props.receiveFeaturedList(clone);
	};

	render() {
		return (
			<ListFilter
				{...this.state}
				handleChangeRadio={this.handleChangeRadio}
				handleChangeInput={this.handleChangeInput}
				handleSearchName={this.handleSearchName}
				handleFilter={this.handleFilter}
				submit={this.submit}
			/>
		);
	}
}

export default ListFilterContainer;
