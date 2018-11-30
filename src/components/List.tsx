import React, { Fragment, PureComponent } from 'react';
import { IPlaylist } from '../api/spotify';

interface IProps {
  nextPage: string | null;
  playlists: IPlaylist[];
  previousPage: string | null;
  onPageChange: (page: string) => void;
}

export default class List extends PureComponent<IProps> {
  public render() {
    return (
      <Fragment>
        <button
          disabled={!this.props.previousPage}
          onClick={this.handlePreviousPage}
        >
          Previous page
        </button>
        <button disabled={!this.props.nextPage} onClick={this.handleNextPage}>
          Next page
        </button>
        {this.props.playlists.map(p => (
          <div key={p.id}>
            <img src={p.images[0].url} />
            <div>{p.name}</div>
          </div>
        ))}
      </Fragment>
    );
  }

  private handlePreviousPage = () => {
    // page will never be null bc button is disabled then
    // but let's make lint happy
    if (this.props.previousPage) {
      this.props.onPageChange(this.props.previousPage);
    }
  };

  private handleNextPage = () => {
    // page will never be null bc button is disabled then
    // but let's make lint happy
    if (this.props.nextPage) {
      this.props.onPageChange(this.props.nextPage);
    }
  };
}
