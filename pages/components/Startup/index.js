import React from 'react';
import "./style.sass";
import LogoSpotifood from '../../../components/LogoSpotifood';
import SpButton from '../../../components/SpButton';


export default class Component extends React.Component {
  render() {
    return <div className="startup">
      <div className="startup__div">
        <LogoSpotifood />
        <SpButton text="Connect" />
      </div>
    </div>;
  }
}
