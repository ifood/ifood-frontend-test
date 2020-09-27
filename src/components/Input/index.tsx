import React, { InputHTMLAttributes } from 'react';
import { InputWrap, Input as InputStyled } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type: string;
	value?: any;
	max?: number;
	min?: number;
}

function Input ({	type, value, max, min, ...others }: InputProps) {
	return (
		<InputWrap>
			<InputStyled
				type={type}
				value={value}
				max={max}
				min={min}
				{...others}
			/>
		</InputWrap>
	);
}

export default Input;