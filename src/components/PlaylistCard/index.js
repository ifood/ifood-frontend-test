import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const PlaylistCard = ({ link, image, title, author, label, authorPrefix }) => {
  return (
    <S.PlaylistCard href={link} target="_blank">
      <S.PlaylistCardImage>
        <img src={image} alt={title} />
      </S.PlaylistCardImage>

      <S.PlaylistCardContent>
        <S.PlaylistCardInfo>
          <S.PlaylistCardTitle>{title}</S.PlaylistCardTitle>
          <S.PlaylistCardAuthor>
            {authorPrefix}
            <S.PlaylistCardAuthorDetail> {author}</S.PlaylistCardAuthorDetail>
          </S.PlaylistCardAuthor>
        </S.PlaylistCardInfo>

        <S.PlaylistCardLink>{label}</S.PlaylistCardLink>
      </S.PlaylistCardContent>
    </S.PlaylistCard>
  );
};

PlaylistCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorPrefix: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default PlaylistCard;
