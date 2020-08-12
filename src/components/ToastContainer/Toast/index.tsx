import React, { useEffect } from "react";

import { Container } from "./styles";
import { FiAlertCircle, FiXCircle, FiInfo, FiCheckCircle } from "react-icons/fi";
import { ToastMessage, useToast } from "../../../hooks/toast";

interface ToastProps {
  message: ToastMessage;
  styles: object;
}

const icons = {
    info: <FiInfo size={20} />,
    error: <FiAlertCircle size={20} />,
    success: <FiCheckCircle size={20} />,
}

const Toast: React.FC<ToastProps> = ({ message, styles }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
        removeToast(message.id)
    }, 3000)

    /**
     * when you return a function on UseEffect, this function will be executed when the component is destroyed.
     */
    return () => {
        clearTimeout(timer)
    }
  },[])

  return (
    <Container type={message.type} hasDescription={!!message.description} style={styles}>
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
