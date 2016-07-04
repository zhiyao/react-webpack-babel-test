import React from 'react';
import { getIndex } from './../Util';

class TabContent extends React.Component {
  render() {
    let currentIndex = getIndex(this.props.currentTab, this.props.filters, 'name')
    let content = this.props.filters[currentIndex].values;
    let lists = content.map( list => {
      return (
        <li className="pill" key={list}>
          <div className="pill-checkbox-wrapper">
            <div className="checkbox">
              <input type="checkbox" />
              <span className="square"></span>
            </div>
          </div>
          <span className="pill-text">{list}</span>
        </li>
      )
    })
    return (
      <ul className="pills">
        {lists}
      </ul>
    )
  }
}

export default TabContent
