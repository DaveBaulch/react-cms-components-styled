import React from 'react';

const FooterLinks = ({footerItems}) => {
  console.log(footerItems);

  renderedLinks() {
    return footerItems.map((link) => {
      return (
        <li
          key={link.}
        >
        test
        </li>
      );
    });
  };

  return <ul>links</ul>;
};

export default FooterLinks;
