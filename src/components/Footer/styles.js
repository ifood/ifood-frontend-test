import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 40px 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.span`
  margin-left: 20px;

  a {
    padding: 0 5px 0 5px;
    color: var(--secondary);
  }
`

export { Wrapper, Text }
