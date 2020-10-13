import React from 'react';
import { Title } from '../../pages/Search/styles';
import * as S from './styles';

const Playlist = ({
  href,
  src,
  alt,
  title,
  description,
}) => (
    <div>
      <S.Link
        href={href}
        target='_blank'
      >
        <S.Image src={src} alt={alt} />
      </S.Link>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </div>
  );

export default Playlist;
