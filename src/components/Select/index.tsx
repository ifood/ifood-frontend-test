import React, { SelectHTMLAttributes } from 'react';
import { SelectWrapper, Select as SelectStyled } from './style';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options: Array<{
		name: string;
		value: string;
	}>;
};

function Select ({ options, ...others	}: SelectProps) {
	return (
		<SelectWrapper>
			<SelectStyled {...others}>
				{options?.map((option) => (
					<option key={option.value} value={option.value}>
						{option.value}
					</option>
				))}
			</SelectStyled>
		</SelectWrapper>
	);
}

export default Select;