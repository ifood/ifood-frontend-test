import React, { PureComponent } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

import { IPlaylist } from '../api/spotify';
import PlaylistCard from './PlaylistCard';

interface IProps {
  error: string | null;
  nextPage: string | null;
  playlists: IPlaylist[];
  onPageChange: (page: string) => void;
}

const StyledDiv = styled.div`
  margin-top: 4.8rem;

  @media (max-width: 1087px) {
    margin-top: 9.6rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default class List extends PureComponent<IProps> {
  public render() {
    return (
      <StyledDiv>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.handleNextPage}
          hasMore={!!this.props.nextPage}
        >
          <CardsContainer>
            {this.props.playlists.map(p => (
              <PlaylistCard playlist={p} key={p.id} />
            ))}
          </CardsContainer>
        </InfiniteScroll>
        {this.props.error && (
          <div className='notification is-danger'>{this.props.error}</div>
        )}
      </StyledDiv>
    );
  }

  private handleNextPage = () => {
    if (this.props.nextPage) {
      this.props.onPageChange(this.props.nextPage);
    }
  };
}
