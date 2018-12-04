import React, { PureComponent } from 'react';
import styled from 'styled-components';

interface IProps {
  className: string;
  countries: Array<{ name: string; value: string }>;
  country: string | null;
  search: string;
  onCountryChange: (countryCode: string) => void;
  onSignOut: () => void;
  onSearch: (search: string) => void;
}

const VerticalCenterDiv = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 0.8em;
  }
`;

// actual caps can make screen readers think it is a abbreviation
// and spell letter by letter
const CapsSpan = styled.span`
  text-transform: uppercase;
`;

class Filter extends PureComponent<IProps> {
  public render() {
    return (
      <nav
        className={`${this.props.className} navbar is-danger is-fixed-top`}
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href='#'>
            <CapsSpan>Spotifood</CapsSpan>
          </a>
        </div>
        <div className='navbar-start'>
          <VerticalCenterDiv>
            <input
              className='input is-danger'
              placeholder='Search playlists' // i18n
              onChange={this.handleSearch}
              type='text'
              value={this.props.search}
            />
          </VerticalCenterDiv>

          <VerticalCenterDiv>
            <div className='select is-danger'>
              <select
                onChange={this.handleCountryChange}
                defaultValue='placeholder'
                value={
                  this.props.country !== null
                    ? this.props.country
                    : 'placeholder'
                }
              >
                <option value='placeholder' disabled={true}>
                  or select by country
                </option>
                <option value={''}>Global</option>
                {this.props.countries.map(c => (
                  <option value={c.value} key={c.value}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </VerticalCenterDiv>
        </div>
        <div className='navbar-end is-hidden-touch'>
          <div className='navbar-item'>
            <a
              role='button'
              className='button is-danger is-small'
              onClick={this.props.onSignOut}
            >
              Sign out
            </a>
          </div>
        </div>
      </nav>
    );
  }

  private handleCountryChange = (e: React.FormEvent<HTMLSelectElement>) => {
    this.props.onCountryChange(e.currentTarget.value);
  };

  private handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.onSearch(e.currentTarget.value);
  };
}

export default styled(Filter)`
  /* makes logo centralized on touch screens */
  .navbar-brand {
    justify-content: center;
  }

  /* makes search elements centralized */
  .navbar-start {
    flex-grow: 2;
    justify-content: center;
  }
`;
