/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect } from 'react';
import { FiAlertCircle, FiXCircle, FiCheckCircle } from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/toast';

import * as S from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <S.Container
      style={style}
      type={message.type}
      hasDescription={Number(!!message.description)}
    >
      {icons[message.type || 'success']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </S.Container>
  );
};

export default Toast;
