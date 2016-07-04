import React from 'react';

class Banner extends React.Component {
  render() {
    const imgUrl = require(`./../images/${this.props.imageSource}`)
    const divStyle = {
      backgroundImage: `url(${imgUrl})`
    }
    return (
      <div className="box banner" style={divStyle}></div>
    )
  }
}


export default Banner
