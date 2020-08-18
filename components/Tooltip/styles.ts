import styled from 'styled-components';

export const Container = styled.div`
  width: 16px;
  position: absolute;
  right: 0.5rem;
  bottom: 0.25rem;
  @media (max-width: 900px) {
    bottom: 0.05rem;
  }

  span {
    width: 160px;
    background: #ff6363;
    padding: 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    z-index: 99;
    text-align: center;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-45%);

    color: #fff;

    @media (max-width: 900px) {
      transform: none;
      bottom: -0.5rem;
      left: -10.3rem;
    }

    &::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-color: #ff6363 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      @media (max-width: 900px) {
        border-color: transparent #ff6363;
        border-width: 6px 0 6px 6px;
        transform: none;
        top: 1.4rem;
        left: 9.9rem;
      }
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
