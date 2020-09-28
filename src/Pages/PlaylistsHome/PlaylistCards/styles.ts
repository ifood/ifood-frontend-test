import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem 0;
  width: 100%;
  ;`

export const Content = styled.div`
width: 80%;
margin: 0 auto;

  a {
    display: flex;
    align-items: center;

    background-color: ${props => props.theme.colors.third};
    border-radius: 0.7rem;
    color: ${props => props.theme.colors.white} ;
    padding: 1rem;
    text-decoration: none;
    transition: transform 0.2s;

    & + a {
      margin-top: 1rem;
    }

    &:hover {
      transform: translateX(0.5rem);
    }

    img {
      border-radius: 0.7rem;
      height: 7rem;
      width: 7rem;
    }

    div {
      flex: 1;
      margin-left: 1rem;

      strong {
        display: block;
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: ${props => props.theme.colors.gray};
        line-height: 1.3rem;
      }
    }
  }


@media(max-width:500px){
  width: 100%;
}
`;


