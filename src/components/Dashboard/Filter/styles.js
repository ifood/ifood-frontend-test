import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Container = styled.div`
  width: 100%;

  .filter-wrapper {
    margin: 0 auto;
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;

    .filter-content {
      display: flex;
      flex-direction: column;
      padding: ${(props) => (props.showFilter ? '16px 16px 0' : '16px')};
      margin-top: 20px;
      background-color: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.04) 3px 3px 0px -1px;
      border-radius: 8px;

      .filter-search-container {
        flex: 1;
        display: flex;
        align-items: center;

        .filter-button {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 45px;
          background-color: #f5f5f5;
          border-radius: 6px;
          border: none;
          margin-left: 16px;
          padding-left: 12px;
          padding-right: 8px;
          color: ${colors.primary};
          cursor: pointer;

          .fa-angle-down {
            margin-left: 3px;
            color: #dddddd;
          }

          :hover {
            background-color: ${colors.lighter};
            border-radius: 6px;
            transition: all 300ms ease-out;
          }
        }
      }

      .filter-items {
        display: ${(props) => (props.showFilter ? 'flex' : 'none')};
        flex-wrap: wrap;
        margin-top: 16px;

        .select__control,
        input {
          width: 100%;
          margin-right: 16px;
          margin-bottom: 16px;
        }

        .default-input {
          max-width: 100%;
          height: 40px;
          border: 1px solid #f1f1f1;
          border-radius: 4px;
          padding: 0 10px;
          margin-right: 0;

          :focus {
            border-color: ${colors.primary};
          }
        }

        .react-select {
          width: 100%;
        }

        .react-datepicker-wrapper {
          width: 93%;
        }
      }
    }
  }

  @media screen and (min-width: 520px) {
    .filter-wrapper > .filter-content > .filter-items {
      .select__control {
        max-width: 170px;
        margin-right: 16px;
      }

      .react-select,
      .react-datepicker-wrapper {
        width: initial;
      }

      .default-input {
        max-width: 148px;
        margin-right: 16px;
      }
    }
  }
`;

export const Label = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: ${(props) => {
    if (props.error) return `1px solid ${colors.red}`;
    if (props.focus) return `1px solid ${colors.primary}`;
    return '1px solid #f1f1f1';
  }};

  .fa {
    margin-left: 15px;
    color: ${(props) => {
      if (props.error) return `${colors.red}`;
      if (props.focus) return `${colors.primary}`;
      return '#e9e9e9';
    }};
  }

  .fa-search {
    width: 22px;
  }

  @media screen and (min-width: 768px) {
    .fa-searh {
      width: 18px;
    }
  }
`;
