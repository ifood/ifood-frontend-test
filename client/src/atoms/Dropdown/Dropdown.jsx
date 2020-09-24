import React, { useState } from "react";
import { Arrow } from "../Icons";
import { Container, Title, Values, Item } from "./styles";

const Dropdown = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [items] = useState(props.data);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <Container width={props.width}>
      <Title isOpen={isOpen} onClick={toggleDropdown}>
        {props.selectedItem && items !== []
          ? items.find((item) => item.value === props.selectedItem).name
          : props.placeholder}
        <Arrow />
      </Title>
      <Values isOpen={isOpen} width={props.width}>
        {items !== [] &&
          items.map((item) => (
            <Item
              key={item.value}
              onClick={() => {
                toggleDropdown();
                // eslint-disable-next-line no-restricted-globals
                props.onClick(event);
              }}
              id={item.value}
            >
              {item.name}
            </Item>
          ))}
      </Values>
    </Container>
  );
};

export default Dropdown;
