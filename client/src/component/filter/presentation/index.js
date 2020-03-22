import React from 'react';
import PropTypes from 'prop-types';

import { Button, Row, Col, Form, Alert, List } from 'bootstrap-4-react';

import style from './style.scss';

const ListFilter = ({
	info,
	error,
	filters,
	filtered,
	handleFilter,
	handleChangeRadio,
	handleChangeInput,
	handleSearchName,
	submit,
	search,
	isShowInput
}) => {
	return (
		<>
			<h2 className={style.Title}>Buscar playlist</h2>
			{error.status && <Alert danger>{error.message[0]}</Alert>}
			{info.status && <Alert warning>{info.message}</Alert>}
			{Boolean(filters.length) && (
				<Row className={style.Line}>
					<Col col="4">
						<select
							className="browser-default custom-select"
							onChange={handleFilter}
						>
							<option>Escolha um filtro</option>
							{filters.map(filter => {
								return (
									<option key={filter.id} value={filter.id}>
										{filter.name}
									</option>
								);
							})}
						</select>
					</Col>
				</Row>
			)}
			{filtered && filtered.hasOwnProperty('values') && (
				<Row className={style.Line}>
					<List>
						{filtered.values.map((item, index) => {
							return (
								<List.Item key={index} className={style.Centered}>
									<input
										key={index}
										type="radio"
										name="react-tips"
										value={item.value}
										className="form-check-input"
										onChange={handleChangeRadio}
									/>
									{item.name}
								</List.Item>
							);
						})}
					</List>
				</Row>
			)}
			{filtered.hasOwnProperty('validation') && (
				<Row className={style.Line}>
					<Col col="4">
						<Form.Input
							onChange={handleChangeInput}
							type={
								filtered.validation.primitiveType === 'STRING'
									? 'datetime-local'
									: 'number'
							}
						/>
					</Col>
				</Row>
			)}
			<Row>
				<Col col="12">
					<Button variant="contained" color="primary" onClick={submit}>
						Filtrar
					</Button>
				</Col>
			</Row>
			{isShowInput && (
				<Row className={style.Line}>
					<Col col="4">
						<Form.Input
							className={style.Input}
							placeholder="Buscar por nome a playlist"
							type="text"
							value={search}
							onChange={handleSearchName}
						/>
						<small>OBS: Após digitar 4 letras a playlist será filtrada</small>
					</Col>
				</Row>
			)}
		</>
	);
};

ListFilter.propTypes = {
	info: PropTypes.object,
	error: PropTypes.object,
	filters: PropTypes.array,
	filtered: PropTypes.object,
	handleFilter: PropTypes.func,
	handleChangeRadio: PropTypes.func,
	handleChangeInput: PropTypes.func,
	handleSearchName: PropTypes.func,
	submit: PropTypes.func,
	search: PropTypes.string,
	isShowInput: PropTypes.bool
};

export default ListFilter;
