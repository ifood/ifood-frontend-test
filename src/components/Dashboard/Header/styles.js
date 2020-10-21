import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 55px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lighter};

  .header-wrapper {
    flex: 1;
    margin: 0 auto;
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a.header-title {
        color: ${colors.dark};
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.3px;

        :hover {
          opacity: 1;
        }
      }

      .header-main-nav {
        display: none;
      }

      .header-profile {
        position: relative;

        .header-profile-item {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          color: ${colors.dark};
          padding: 0;

          .avatar {
            width: 26px;
            height: 26px;
            border-radius: 30px;
            border: 2px solid ${colors.dark};
          }

          .fa-angle-down {
            margin-top: 2px;
            margin-left: 3px;
          }

          :hover {
            opacity: 1;
          }
        }

        .header-profile-nav {
          position: fixed;
          width: 100%;
          height: 100%;
          max-height: ${(props) => (props.profileNav ? '100%' : '0')};
          top: 55px;
          left: 0;
          background-color: ${colors.lighter};
          overflow: hidden;
          transition: max-height 0.5s ease 0s;
          z-index: 2;

          ul > li {
            a {
              display: block;
              padding: 12px 16px;
              color: ${colors.dark};

              :last-child {
                border-bottom: none;
              }

              :hover {
                opacity: 1;
                background-color: ${colors.lighter};
              }
            }

            :first-child {
              margin-top: 8px;
            }

            :last-child {
              margin-top: 8px;
              padding-top: 8px;
              border-top: 1px solid #eaeaea;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 990px) {
    .header-wrapper > .header-content {
      .header-main-nav {
        display: initial;

        ul {
          display: flex;
          align-items: center;

          li > a {
            display: flex;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            color: ${colors.dark};
            padding-left: 12px;
            padding-right: 12px;
            border-radius: 7px;
            height: 36px;

            .fa {
              margin-right: 10px;
            }

            .fa-user-friends {
              width: 24px;
              height: 20px;
            }

            .fa-music {
              margin-left: -4px;
              margin-right: 6px;
            }
          }

          li > a.active,
          a:hover,
          a:focus {
            opacity: 1 !important;
            background-color: ${colors.primary} !important;
            color: ${colors.white} !important;
          }
        }
      }

      .header-profile > .header-profile-nav {
        position: absolute;
        top: 40%;
        right: 0;
        left: initial;
        min-width: 240px;
        max-height: ${(props) => (props.profileNav ? '200px' : '0')};
        height: initial;
        margin-top: 28px;
        background-color: ${colors.white};
        box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 16px;
        border-radius: 12px;

        ul {
          padding: 8px 0;

          li {
            :first-child {
              margin-top: 0;
            }

            :last-child {
              border-top: 1px solid ${colors.lighter};
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1090px) {
    .header-wrapper > .header-content > .header-profile > .header-profile-nav {
      right: -20px;
    }
  }
`;
