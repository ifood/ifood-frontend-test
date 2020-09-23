import styled from 'styled-components'

const Container = styled.div`
  text-align: right;

  svg {
    margin-top: 5px;
    cursor: pointer;

    path {
      fill: var(--white);
    }
  }
`

const FilterWrapper = styled.div`
  &.active {
    p {
      color: var(--white);
    }
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
`

const Title = styled.h2`
  padding-bottom: 5px;
  color: var(--white);
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid var(--border-light);
  display: block;
`

const Wrapper = styled.div`
  margin-bottom: 10px;
`

const Label = styled.label`
  color: var(--white);
`

export { Container, FilterWrapper, Title, Wrapper, Label }
