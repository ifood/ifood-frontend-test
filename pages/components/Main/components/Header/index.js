import React from 'react';
import "./style.sass";
import IconSettings from '../../../../../components/IconSettings';
import LogoSpotifood from '../../../../../components/LogoSpotifood';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="header">
      <div className="header__left"><IconSettings /></div>
      <div className="header__center"><LogoSpotifood /></div>
      <div className="header__right" style={{ backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2OTE1Njg4NjVeQTJeQWpwZ15BbWU3MDAyNjU4MDM@._V1_UY256_CR18,0,172,256_AL_.jpg)' }}>
      </div>
    </div>
  }
}
