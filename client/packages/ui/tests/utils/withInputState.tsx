import React, { useState, useCallback, ChangeEvent, ReactElement, MemoExoticComponent } from 'react'
import { InputType } from '@project'

interface StatefulInputProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
}

type StatefulInput = MemoExoticComponent<InputType>

export default function withInputState(Input: StatefulInput) {
  return function InputWithState(props: StatefulInputProps): ReactElement {
    const [inputState, setInputState] = useState('')
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => setInputState(event.target.value),
      []
    )
    return (
      <Input 
        {...props}
        value={inputState}
        onChange={handleChange}
      />
    )
  }
}
