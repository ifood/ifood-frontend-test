import React from 'react';
import './Profile.scss';

interface Profile {
  avatar: string,
  name: string,
  username: string,
  followers: number,
  className?: string,
  minimal?: boolean
}

export const Profile = ({ avatar, name, followers, className = '', minimal }: Profile) => (
  <div className={`profile ${minimal ? 'profile--minimal' : ''} ${className}`}>
    <img src={avatar} alt={name} className={`profile__avatar ${minimal ? 'profile--minimal__avatar' : ''}`} />

    <div className={`profile__informations ${minimal ? 'profile--minimal__informations' : ''}`}>
      <span className={`profile__informations__name ${minimal ? 'profile--minimal__informations__name' : ''}`}>
        {name}
      </span>

      <span className={`profile__informations__account ${minimal ? 'profile--minimal__informations__account' : ''}`}>
        followers: {followers}
      </span>
    </div>
  </div>
);
