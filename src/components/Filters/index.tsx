import React from 'react';
import { mapValues, timestamp } from '../../utils';
import { FilterOptionsProps, FilterValueProps } from '../../utils/types';
import Select from '../Select';
import Input from '../Input';
import { FormWrapper, InputWrapper } from './style';

interface FiltersProps {
	setFilterData: (value: any) => void;
	filterData: FilterValueProps;
	filterOptions: FilterOptionsProps | null;
};

function Filters ({ setFilterData, filterData, filterOptions }: FiltersProps) {
	return (
		<FormWrapper>
			<InputWrapper>
				<label>Idioma</label>
				<Select
					value={filterData.locale}
					options={mapValues(1, filterOptions) || []}
					onChange={(e) => setFilterData({ type: 'locale', payload: e.target.value	})}
				/>
			</InputWrapper>

			<InputWrapper>
				<label>Data/Hora</label>
				<Input
					value={filterData.timestamp || timestamp}
					type="datetime-local"
					onChange={(e) => setFilterData({ type: 'timestamp', payload: e.target.value	})}
				/>
			</InputWrapper>

			<InputWrapper>
				<label>Quantidade</label>
				<Input
					value={filterData.limit}
					type={filterOptions?.filters[3].validation.primitiveType}
					min={filterOptions?.filters[3].validation.min}
					max={filterOptions?.filters[3].validation.max}
					onChange={(e) => setFilterData({ type: 'limit', payload: Number(e.target.value)	})}
				/>
			</InputWrapper>

			<InputWrapper>
				<label>Páginas</label>
				<Input
					value={filterData.offset}
					type={filterOptions?.filters[4].validation.primitiveType}
					onChange={(e) => setFilterData({ type: 'offset', payload: Number(e.target.value)	})}
				/>
			</InputWrapper>
		</FormWrapper>
	);
}

export default Filters;