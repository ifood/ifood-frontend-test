import React from 'react';
import { Col, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './Loading.less';

const Loading = () => (
  <Col
    span={24}
    className="loading"
  >
    <Spin indicator={(
      <LoadingOutlined
        className="loading__spin"
        spin
      />
  )}
    />
  </Col>
);

export default Loading;
