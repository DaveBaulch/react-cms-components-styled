import React from 'react';
import '../../sass/components/_skip-link.scss';

const SkipLink = (props) => {
  return (
    <a href="#main" id="skip-navigation" class="skip-link">
      {props.children}
    </a>
  );
};

export default SkipLink;
