import React from 'react';
import * as S from './styles';

const Playlist = ({
  href,
  src,
  alt,
  title,
  description,
}) => (
    <>
      <S.Link
        href={href}
        target='_blank'
      >
        <S.Image src={src} alt={alt} />
      </S.Link>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </>
  );

export default Playlist;
