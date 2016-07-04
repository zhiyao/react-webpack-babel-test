import React from 'react';
import Tab from './Tab';

class Tabs extends React.Component {
  handleClick(tab) {
    this.props.handleClick(tab);
  }
  render() {
    let tabs = this.props.filters.map( tab => {
      return <Tab key={tab.name}
                  data={tab}
                  isCurrent={(this.props.currentTab === tab.name)}
                  handleClick={this.handleClick.bind(this, tab)}
              />
    })
    return (
      <div className="tab-bar">
        <ul>
          {tabs}
        </ul>
      </div>
    )
  }
}

export default Tabs
