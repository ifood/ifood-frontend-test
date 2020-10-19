import React, {useState} from 'react'
import { BsFilterLeft } from 'react-icons/bs'

import {
    Container, SearchContainer, Input, Buttom, Text, Form,
    ParametersContainer, Select, Option, InputParameters
} from './styles'

export default function Filter({search, handleSearchChange, filters}){
    const [show, setShow] = useState(false)
    
    return(
        <Container>
            <SearchContainer>
                <Input placeholder="Buscar" value={search} onChange={event => handleSearchChange(event)}/>
                <Buttom onClick={() => setShow(!show)}>
                    <Text>Filtros</Text>
                    <BsFilterLeft/>
                </Buttom>
            </SearchContainer>
            <Form display={show} onSubmit={() => console.log('ok')}>
                    {filters.map(item =>
                        <ParametersContainer key={item.id}>
                            <Text>{item.name}</Text>
                            {item.values ? <Select> <Option> </Option>
                            {item.values.map(value =>
                                <Option>{value.name}</Option>
                            ) }</Select> : <InputParameters
                                placeholder={item.validation.pattern ? item.validation.pattern : ''}
                                type={item.validation.pattern ? "text" : "number"}
                                pattern={item.validation.pattern ? "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}" : ""}
                            />}
                        </ParametersContainer>
                    )}
            </Form>
        </Container>
    )
}