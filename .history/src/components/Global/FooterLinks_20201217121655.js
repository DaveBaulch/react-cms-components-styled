import React from 'react';

const FooterLinks = (props) => {
  console.log(props);

  const renderedLinks = data.map((link) => {
    return <li key={link.id}>{link.title}</li>;
  });

  return <ul>test</ul>;
};

export default FooterLinks;
