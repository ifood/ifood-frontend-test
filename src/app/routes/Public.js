import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';


class Public extends React.PureComponent {
  render() {
    const { title, container } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {container}
      </div>
    );
  }
}


export default connect(
  null,
  null,
)(
  Public,
);
