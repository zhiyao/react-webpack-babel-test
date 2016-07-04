import React from 'react';

class Tab extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }
  render() {
    return (
      <li className={this.props.isCurrent ? 'active' : null}>
        <a onClick={this.handleClick.bind(this)}>
          {this.props.data.name}
        </a>
      </li>
    )
  }
}

export default Tab
