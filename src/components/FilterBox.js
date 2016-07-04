import React from 'react';
import Tabs from './Tabs';
import TabContent from './TabContent';

class FilterBox extends React.Component {
  handleClick(tab) {
    this.props.changeTab(tab);
  }
  render() {
    return (
      <div className="box filter-box">
        <Tabs
          filters={this.props.filters}
          currentTab={this.props.currentTab}
          handleClick={this.handleClick.bind(this)} />
        <TabContent
          filters={this.props.filters}
          currentTab={this.props.currentTab} />
      </div>
    )
  }
}

export default FilterBox
