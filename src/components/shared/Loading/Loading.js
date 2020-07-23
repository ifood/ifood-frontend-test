import React from 'react';
import { Spin } from 'antd';
import './Loading.scss';

const Loading = () => (
  <div className="loading__wrapper">
    <Spin />
  </div>
);

export default Loading;
