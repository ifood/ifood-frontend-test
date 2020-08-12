import React  from "react";

import { Container } from "./styles";
import { ToastMessage } from "../../hooks/toast";
import Toast from './Toast/index'
import { useTransition } from 'react-spring';

export interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

  const messageWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    }
  )

  return (
    <Container>
      {messageWithTransitions.map(({ item, key, props }) => (
        <Toast
          key={key}
          message={item}
          styles={props}
        >
          
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
