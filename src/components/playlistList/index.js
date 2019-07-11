import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardActions, CardContent, Typography, Button } from '@material-ui/core';

import { ListWrapper } from './styles';

const PlaylistList = ({
  items,
  appliedFilters,
  setResponseTotals,
  loadingResults,
  serverTotals,
}) => {
  const itemsForExhibition = () => {
    return items.filter(
      item => item.name.toLowerCase().indexOf(appliedFilters.name.toLowerCase()) !== -1,
    );
  };

  if (appliedFilters.name.length > 0) {
    setResponseTotals(itemsForExhibition().length);
  } else {
    setResponseTotals(serverTotals);
  }

  return (
    <ListWrapper>
      {itemsForExhibition().map((item) => {
        return (
          <Card key={item.id} className="card">
            <CardMedia image={item.images[0].url} title={item.name} className="card-image" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="title"
                title={item.name}
              >
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                De: {item.owner.display_name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Colaborativa: {item.collaborative ? 'Sim' : 'Não'}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Faixas: {item.tracks.total}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={item.external_urls.spotify}
                target="_blank"
              >
                Ouça agora
              </Button>
            </CardActions>
          </Card>
        );
      })}

      {itemsForExhibition().length === 0 && !loadingResults && (
        <Typography variant="h6" component="h2" className="no-results-msg">
          Não encontramos resultados para o filtro selecionado. Por favor, altere o critério e tente
          novamente mais tarde!
        </Typography>
      )}
    </ListWrapper>
  );
};

PlaylistList.defaultProps = {
  loadingResults: false,
};

PlaylistList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  appliedFilters: PropTypes.object.isRequired,
  setResponseTotals: PropTypes.func.isRequired,
  loadingResults: PropTypes.bool,
  serverTotals: PropTypes.number.isRequired,
};

export default PlaylistList;
