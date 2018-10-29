
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
  flex-grow: 1;
`;

const StyledAppBar = styled(AppBar)`
  && {
    color: white;
    background-color: #bc2026;
  }
`;

const Header = (props) => {
  const { title } = props;
  return (
    <Container>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
