import React from 'react';
import { Helmet } from 'react-helmet';


const Public = ({ title, container }) => (
  <div>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {container}
  </div>
);


export default Public;
