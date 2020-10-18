import React, {useState, useEffect} from 'react'
import { BsFilterLeft } from 'react-icons/bs'

import filtersApi from '../../../Services/filters-api.js'

import {
    Container, SearchContainer, Input, Buttom, Text, Modal,
    ParametersContainer, Select, Option, InputParameters
} from './styles'

export default function Filter(){
    const [show, setShow] = useState(false)
    const [filters, setFilters] = useState([])

    useEffect(() => {
        filtersApi.get('/')
        .then(response =>{
            setFilters(response.data.filters)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return(
        <Container>
            <SearchContainer>
                <Input placeholder="Buscar"/>
                <Buttom onClick={() => setShow(!show)}>
                    <Text>Filtros</Text>
                    <BsFilterLeft/>
                </Buttom>
            </SearchContainer>
            <Modal display={show}>
                    {filters.map(item =>
                        <ParametersContainer key={item.id}>
                            <Text>{item.name}</Text>
                            {item.values ? <Select> {item.values.map(value =>
                                <Option>{value.name}</Option>
                            ) }</Select> : <InputParameters placeholder={item.validation.pattern ? item.validation.pattern : ''}/>}
                        </ParametersContainer>
                    )}
            </Modal>
        </Container>
    )
}