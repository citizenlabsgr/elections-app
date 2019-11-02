import React from 'react';

export default class JumpLinks extends React.Component {
  /**
   * Create a Side Nav to jump to individual ballot items
   * @prop ballot {Array<BallotItem>} This is an array of ballot items
   * @option name {string} This is the name or title for the ballot item
   * @option id {string} This is a unique identifier for the ballot item
   * @returns {*}
   */
  render() {
    const ballotItems = this.props.ballot.map((ballotItem, i) => (
      <li className="jump-links__list-item col">
        <a className="jump-links__anchor" href={`#ballot-item-${ballotItem.id}`} role="menuitem" tabIndex={i}>{ballotItem.name}</a>
      </li>));
    return (
      <aside className="jump-links">
        <h3>Quickly Jump to an Item</h3>
        <ul className="jump-links__list row flex-column" role="menubar">{ballotItems}</ul>
      </aside>
    );
  }
}