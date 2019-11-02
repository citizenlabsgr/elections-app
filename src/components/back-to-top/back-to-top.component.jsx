import React from 'react';

export default class BackToTop extends React.Component {
  render() {
    return (
      <div className="back-to-top row flex-column">
        <a href="#root" className="back-to-top__anchor col-3 align-self-end">Back to top</a>
      </div>
    );
  }
}