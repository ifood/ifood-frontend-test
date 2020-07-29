import styled from 'styled-components'
import { bool } from 'prop-types'
import { colors } from '../assets/styles/default-style'

const Loader = ({ centered }) => {
  return <LoaderStyle centered={centered} />
}

const LoaderStyle = styled.div`
  animation: spin 1s linear infinite;
  border: 5px solid ${colors.pink};
  border-left-color: ${colors.purple};
  border-radius: 50%;
  height: 30px;
  margin: ${({ centered }) => (centered ? '0 auto' : '0')};
  width: 30px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

Loader.propTypes = {
  centered: bool
}

Loader.defaultProps = {
  centered: false
}

export default Loader
