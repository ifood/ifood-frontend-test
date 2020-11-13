import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import WarningIcon from '@material-ui/icons/Warning'
import Container from '@material-ui/core/Container'
import { StyledErrorPage } from './styles'

const ErrorPage = () => {
  return (
    <StyledErrorPage component="main">
      <Container className="page__container" maxWidth="lg">
        <Box className="error-page__section" component="section">
          <Typography color="textPrimary" className="error-page__message">
            <WarningIcon color="secondary" className="error-page__icon" />
            Essa pagina não pode ser carregada
          </Typography>
        </Box>
      </Container>
    </StyledErrorPage>
  )
}

export default ErrorPage
