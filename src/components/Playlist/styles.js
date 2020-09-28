import styled from 'styled-components';

import { colors, spacing, borderRadius, typography } from '../../styles/theme';

export const PlaylistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  padding: ${spacing.s2};
  border-radius: ${borderRadius};
  background-color: ${colors.base.white};

  cursor: pointer;
  transition: all 0.25s ease-in-out;
  transition-timing-function: cubic-bezier(0.57, 0.21, 0.69, 1.25);

  .Playlist__Image {
    width: 100%;
    padding-top: 100%;
    border-radius: ${borderRadius};

    background-color: ${colors.muted.m1};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .Playlist__Name {
    font-size: ${typography.body.p1};
    color: ${colors.muted.m6};
    font-weight: 600;
    margin: ${spacing.s1} 0 0;
    text-align: center;
  }

  .Playlist__Description {
    font-size: ${typography.body.action};
    color: ${colors.muted.m4};
    font-weight: 400;
    margin: 0 0 ${spacing.s1};
    text-align: center;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 15px 1px ${colors.muted.m1};
  }
`;
