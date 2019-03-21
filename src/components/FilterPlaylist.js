import React, { Component } from 'react';

import api from '../services/api';
import axios from 'axios';

import './FilterPlaylist.css';

import {
	InputGroup,
	FormControl,
	Button,
	Collapse,
	Form,
	Alert
} from 'react-bootstrap';

import moment from 'moment';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playlistsActions from '../actions/playlists';

class FilterPlaylist extends Component {
	state = {
		search: '',
		datePicker: '',
		playlists: '',
		localeFilters: [],
		countryFilters: [],
		openFilterOptions: false,
		filterApplied: false
	};

	async componentDidMount() {
		const response = await axios.get(
			'https://www.mocky.io/v2/5a25fade2e0000213aa90776'
		);

		this.setState({
			localeFilters: response.data.filters[0].values,
			countryFilters: response.data.filters[1].values
		});
	}

	checkParams = params => {
		for (var propName in params) {
			if (params[propName] === null || params[propName] === undefined) {
				delete params[propName];
			}
		}
		return params;
	};

	handleApplyFilter = e => {
		const { callbackFromParent } = this.props;
		e.preventDefault();

		const country = this.country.value === 'empty' ? null : this.country.value;
		const locale = this.locale.value === 'empty' ? null : this.locale.value;
		const timestamp =
			this.state.datePicker === '' ? null : this.state.datePicker;
		const limit = this.limit.value === '' ? null : this.limit.value;
		const offset = this.offset.value === '' ? null : this.offset.value;

		const data = {
			country: country,
			locale: locale,
			timestamp: timestamp,
			limit: limit,
			offset: offset
		};

		const params = this.checkParams(data);

		api
			.get('browse/featured-playlists', {
				params: params
			})
			.then(data => {
				this.props.listPlaylists(data.data.playlists.items);
			})
			.catch(error => {
				if (error.response.status === 401) {
					this.setState({ expiredToken: true });
					setInterval(() => {
						this.setState({ expiredToken: false });
						window.location.replace('http://localhost:3000/');
					}, 3000);
				}
			});

		this.setState({
			openFilterOptions: false,
			filterApplied: true
		});
		return callbackFromParent({
			filterApplied: true
		});
	};

	resetFilters = e => {
		e.preventDefault();

		api
			.get('browse/featured-playlists')
			.then(data => {
				this.props.listPlaylists(data.data.playlists.items);
			})
			.catch(error => {
				if (error.response.status === 401) {
					this.setState({ expiredToken: true });
					setInterval(() => {
						this.setState({ expiredToken: false });
						window.location.replace('http://localhost:3000/');
					}, 3000);
				}
			});

		this.setState({
			filterApplied: false
		});

		return this.props.callbackFromParent({
			filterApplied: false
		});
	};

	closeModal = () => {
		this.setState({
			filterApplied: false
		});
	};

	handleNewSearch = async e => {
		if (e.keyCode !== 13) return;

		const { callbackFromParent } = this.props;
		const response = await api.get('browse/featured-playlists');

		if (response.status === 401) {
			this.setState({ expiredToken: true });
			setInterval(() => {
				this.setState({ expiredToken: false });
				window.location.replace('http://localhost:3000/');
			}, 3000);
		} else {
			const playlists = response.data.playlists.items;

			const search = this.state.search;

			let filteredPlaylist = playlists.filter(playlist => {
				if (playlist.name.toLowerCase().includes(search)) {
					return playlist;
				}
				return null;
			});

			this.props.searchPlaylists(filteredPlaylist);

			this.setState({
				openFilterOptions: false,
				filterApplied: true,
				search: ''
			});

			return callbackFromParent({
				filterApplied: true
			});
		}
	};

	handleSearchChange = e => {
		this.setState({ search: e.target.value });
	};

	handleDatePickerChange = date => {
		this.setState({
			datePicker: moment(date.target.value, 'YYYY-MM-DD HH:mm').format()
		});
	};

	render() {
		const { openFilterOptions, localeFilters, countryFilters } = this.state;
		return (
			<div className="col-12">
				<div className="row">
					<div className="col-md-6 mb-3">
						<InputGroup className="search-form">
							<FormControl
								placeholder="Search a playlist ... (Press Enter to Search)"
								aria-label="Search"
								value={this.state.search}
								onChange={this.handleSearchChange}
								onKeyDown={this.handleNewSearch}
							/>
						</InputGroup>
					</div>
					<div className="col-md-6 mb-3">
						<Button
							onClick={() =>
								this.setState({ openFilterOptions: !openFilterOptions })
							}
							aria-controls="collapse-filter-options"
							aria-expanded={openFilterOptions}
							style={{
								backgroundColor: 'rgb(0, 225, 85)',
								border: 0,
								fontWeight: '500'
							}}
						>
							Filter Options
						</Button>
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-12">
						<Collapse in={this.state.openFilterOptions}>
							<div className="collapse-filter-options">
								<p className="filter-title-text">Filters Options</p>
								<div>
									<Form
										onSubmit={this.handleApplyFilter}
										className="col-12 filter-form"
									>
										<Form.Row>
											<Form.Group
												controlId="locale"
												style={{ marginRight: 20 }}
											>
												<Form.Label
													style={{
														color: 'rgb(236, 236, 236)',
														fontWeight: 'bold'
													}}
												>
													Locale
												</Form.Label>
												<FormControl
													as="select"
													name="locale"
													ref={c => (this.locale = c)}
												>
													<option value="empty">Choose...</option>
													{localeFilters.map((item, index) => (
														<option key={index} value={item.value}>
															{item.name}
														</option>
													))}
												</FormControl>
											</Form.Group>
											<Form.Group controlId="country">
												<Form.Label
													style={{
														color: 'rgb(236, 236, 236)',
														fontWeight: 'bold'
													}}
												>
													Country
												</Form.Label>
												<FormControl
													as="select"
													name="country"
													ref={c => (this.country = c)}
												>
													<option value="empty">Choose...</option>
													{countryFilters.map((item, index) => (
														<option key={index} value={item.value}>
															{item.name}
														</option>
													))}
												</FormControl>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group controlId="timestamp">
												<Form.Label
													style={{
														color: 'rgb(236, 236, 236)',
														fontWeight: 'bold'
													}}
												>
													Timestamp
												</Form.Label>
												<FormControl
													as="input"
													placeholder="2014-10-23T07:00:00"
													type="datetime-local"
													name="timestamp"
													ref={c => (this.timestamp = c)}
													onChange={this.handleDatePickerChange}
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group controlId="limit" style={{ marginRight: 20 }}>
												<Form.Label
													style={{
														color: 'rgb(236, 236, 236)',
														fontWeight: 'bold'
													}}
												>
													Limit
												</Form.Label>
												<FormControl
													as="input"
													name="limit"
													type="number"
													placeholder="5"
													min="1"
													max="50"
													ref={c => (this.limit = c)}
												/>
											</Form.Group>
											<Form.Group controlId="offset">
												<Form.Label
													style={{
														color: 'rgb(236, 236, 236)',
														fontWeight: 'bold'
													}}
												>
													Offset
												</Form.Label>
												<FormControl
													as="input"
													name="offset"
													type="number"
													placeholder="5"
													min="1"
													max="50"
													ref={c => (this.offset = c)}
												/>
											</Form.Group>
										</Form.Row>
										<br />
										<Button variant="primary" type="submit">
											Apply
										</Button>
									</Form>
								</div>
							</div>
						</Collapse>
					</div>
					<div className="col-12">
						<Alert
							dismissible
							show={this.state.filterApplied}
							onClose={this.closeModal}
							variant="success"
							style={{ justifyContent: 'center' }}
						>
							<Alert.Heading>Filters applied!</Alert.Heading>
							<hr />
							<div className="d-flex justify-content-start">
								<Button onClick={this.resetFilters} variant="outline-success">
									Remove Filters
								</Button>
							</div>
						</Alert>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(playlistsActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterPlaylist);
