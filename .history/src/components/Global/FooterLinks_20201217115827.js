import React from 'react';

const FooterLinks = (props) => {
  console.log(props);

  renderLinks() {
    return props.map((link) => {
      return (
        <ul>
          <li>{ link.}</li>
        </ul>
      );
    });
  }

  return <div>{this.renderLinks()}</div>;
};

export default FooterLinks;
