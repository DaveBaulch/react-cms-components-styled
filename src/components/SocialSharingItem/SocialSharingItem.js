import React from 'react';
import './SocialSharingItem.scss';

const SocialSharingItem = ({ href, children }) => (
  <React.Fragment>
    <a href={href} className="social-sharing-item">
      {children}
    </a>
  </React.Fragment>
);

export default SocialSharingItem;
