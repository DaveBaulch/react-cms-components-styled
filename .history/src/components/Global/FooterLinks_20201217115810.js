import React from 'react';

const FooterLinks = (props) => {
  console.log(props);

  renderLinks() {
    return this.props.map((link) => {
      return (
        <ul>
          <li></li>
        </ul>
      );
    });
  }

  return <div>{this.renderLinks()}</div>;
};

export default FooterLinks;
