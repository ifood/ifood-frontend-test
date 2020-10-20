import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Container = styled.a`
  background-color: ${colors.white};
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.04) 3px 3px 0px -1px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  .playlist-content {
    flex: 1;
    display: flex;
    flex-direction: column;

    .playlist-cover {
      width: 100%;
      height: 100%;
      margin-bottom: 16px;
      box-shadow: 0 5px 14px rgba(0, 0, 0, 0.2);
      border-radius: 4px;

      img {
        width: 100%;
        border-radius: 4px;
        vertical-align: bottom;
      }
    }

    .playlist-info {
      h3 {
        font-size: 16px;
        color: ${colors.dark};
      }

      p {
        color: ${colors.dark};
        font-size: 14px;
        padding-top: 5px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  :hover {
    opacity: 1;
    background: #fff8f8;
    border: 1px solid ${colors.primary};
  }
`;
