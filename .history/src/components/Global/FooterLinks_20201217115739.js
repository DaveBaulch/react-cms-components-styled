import React from 'react';

const FooterLinks = (props) => {
  console.log(props);

  renderLinks() {
    return this.props.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  return <div>{this.renderLinks()}</div>;
};

export default FooterLinks;
