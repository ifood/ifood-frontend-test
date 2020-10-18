import React, {useState} from 'react'
import { BsFilterLeft } from 'react-icons/bs'

import { Container, SearchContainer, Input, Buttom, Text, Modal } from './styles'
export default function Filter(){
    const [show, setShow] = useState(false)

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
            </Modal>
        </Container>
    )
}