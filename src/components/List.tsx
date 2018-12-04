import React, { Fragment, PureComponent } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { IPlaylist } from '../api/spotify';

interface IProps {
  nextPage: string | null;
  playlists: IPlaylist[];
  onPageChange: (page: string) => void;
}

export default class List extends PureComponent<IProps> {
  public render() {
    return (
      <Fragment>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.handleNextPage}
          hasMore={this.props.nextPage}
          loader={
            <div className='loader' key={0}>
              Loading ...
            </div>
          }
        >
          {this.props.playlists.map(p => (
            <div key={p.id}>
              <img src={p.images[0].url} />
              <div>{p.name}</div>
            </div>
          ))}
        </InfiniteScroll>
      </Fragment>
    );
  }

  private handleNextPage = () => {
    if (this.props.nextPage) {
      this.props.onPageChange(this.props.nextPage);
    }
  };
}
