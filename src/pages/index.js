import styled from 'styled-components'
import { SPOTIFY_LOGIN_URL } from '../constants/services'
import {
  INITIAL_PAGE_DESCRIPTION,
  INITIAL_PAGE_CALL_TO_ACTION
} from '../constants/pages'
import { APP_NAME } from '../constants/project'
import { mediaQueries, colors } from '../assets/styles/default-style'

const Home = () => {
  return (
    <HomeStyle>
      <div
        className="card"
        onClick={() => (document.location.href = SPOTIFY_LOGIN_URL)}
      >
        <div className="card-wrapper">
          <div className="card-image" />
          <div className="logo">
            <h1>{APP_NAME}</h1>
          </div>
          <div className="card-content">
            <p className="card-description">{INITIAL_PAGE_DESCRIPTION}</p>
            <span>{INITIAL_PAGE_CALL_TO_ACTION}</span>
          </div>
        </div>
      </div>
    </HomeStyle>
  )
}

const HomeStyle = styled.section`
  --percentage-title: -12vw;
  --size-title: 8rem;
  --size-title-mobile: 70px;
  --wrapper-size: 65vw;

  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;

  .card {
    cursor: pointer;
    height: 650px;
    position: relative;
    max-width: var(--wrapper-size);
    width: 100%;

    &:hover {
      .card-image {
        transform: skew(1deg, 1deg);
        transition: all 0.5s ease-in-out;
      }

      .card-content span {
        color: ${colors.purple};
        transition: all 0.3s ease-in-out;

        &:after {
          height: 25px;
          transition: all 0.3s ease-in-out;
        }
      }
    }

    .card-wrapper {
      height: 100%;
      margin: 0 auto;
      width: var(--wrapper-size);
    }

    .card-image {
      background-image: url('./cd.jpg');
      background-repeat: no-repeat;
      height: 90vh;
      left: 0;
      max-height: 100%;
      max-width: 90vw;
      position: absolute;
      top: 0;
      transition: all 0.5s ease-in-out;
      width: 100%;

      @media (min-width: ${mediaQueries.tablet.min + 1}px) {
        height: 100%;
        max-width: var(--wrapper-size);
        width: 70vw;
      }
    }

    &:after {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 3px;
      -webkit-text-stroke-color: white;
      content: 'SPOTIFOOD';
      color: transparent;
      font-family: sans-serif;
      font-size: var(--size-title-mobile);
      font-weight: bold;
      letter-spacing: 3px;
      position: absolute;
      top: 0;

      @media (min-width: ${mediaQueries.mobile.max}px) {
        font-size: var(--size-title);
        transform: translateX(var(--percentage-title));
      }

      @media (max-width: ${mediaQueries.mobile.max - 1}px) {
        top: -45px;
        word-break: break-word;
        max-width: 210px;
        z-index: -1;
        left: 15px;
      }
    }

    .logo {
      overflow: hidden;
    }

    h1 {
      color: white;
      display: flex;
      font-size: var(--size-title-mobile);
      flex-direction: column;
      letter-spacing: 3px;
      position: relative;
      text-transform: uppercase;
      z-index: 1;

      @media (min-width: ${mediaQueries.mobile.max}px) {
        font-size: var(--size-title);
        transform: translateX(var(--percentage-title));
      }

      @media (max-width: ${mediaQueries.mobile.max - 1}px) {
        -webkit-text-fill-color: white;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: white;
        left: 15px;
        line-height: 1;
        max-width: 210px;
        top: -40px;
        word-break: break-word;
      }
    }

    .card-content {
      bottom: 30px;
      left: -10px;
      max-width: 230px;
      position: absolute;

      p,
      span {
        font-family: sans-serif;
        font-weight: bold;
      }

      p {
        color: white;
        font-size: 2rem;
      }

      span {
        color: ${colors.pink};
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: all 0.3s ease-in-out;
        z-index: 1;

        &:after {
          background-color: ${colors.pink};
          content: '';
          display: block;
          height: 0;
          left: -3px;
          position: absolute;
          top: -2px;
          transition: all 0.3s ease-in-out;
          width: 104%;
          z-index: -1;
        }
      }

      @media (max-width: ${mediaQueries.mobile.max}px) {
        p {
          font-size: 1.65rem;
        }
      }

      @media (min-width: ${mediaQueries.mobile.max}px) {
        max-width: 330px;
        left: -45px;
      }
    }

    @media (max-width: ${mediaQueries.mobile.max}px) {
      height: 500px;
    }

    @media (min-width: ${mediaQueries.mobile.max + 1}) {
      right: -70px;
    }
  }
`

export default Home
