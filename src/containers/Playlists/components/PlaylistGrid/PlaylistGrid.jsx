
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 25px;
`;

const Link = styled.a`
  text-decoration: none;
  display: block;
`;

const StyledGridListTileBar = styled(GridListTileBar)`
  max-width: 300px;
`;

class PlaylistGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 0,
    };
  }

  componentDidMount() {
    this.evaluateColumnsNumber();
    window.addEventListener('resize', this.evaluateColumnsNumber);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.evaluateColumnsNumber);
  }

  evaluateColumnsNumber = () => {
    this.setState({
      columns: Math.floor(window.innerWidth / 300) || 1,
    });
  }

  render() {
    const { playlists } = this.props;
    const { columns } = this.state;
    const cols = columns <= playlists.length ? columns : playlists.length;

    return (
      <Container>
        <GridList cellHeight={300} cols={cols}>
          {playlists.map(playlist => (
            <GridListTile key={playlist.images[0].url} cols={1}>
              <Link href={playlist.external_urls.spotify} target="_blank">
                <img src={playlist.images[0].url} alt="playlist" />
                <StyledGridListTileBar
                  title={playlist.name}
                  subtitle={playlist.owner.display_name}
                />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </Container>
    );
  }
}

PlaylistGrid.propTypes = {
  playlists: PropTypes.array,
};

PlaylistGrid.defaultProps = {
  playlists: [],
};

export default PlaylistGrid;
