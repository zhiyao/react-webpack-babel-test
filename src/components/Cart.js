import React from 'react'

class Cart extends React.Component {
  constructor() {
    super();
    this.backToProductsView = this.backToProductsView.bind(this);
  }

  backToProductsView() {
    this.props.backToProductsView();
  }

  render() {
    let products = this.props.cartContent.map( product => {
      return <div key={product.name} className="product-box">
          <img className="product-image" src={require(`./../images/${product.image}`)} />
          <div className="product-details">
            <div className="product-description">
              <h4 className="product-name">{product.name}</h4>
              <h5 className="product-measurement">{product.measurement}</h5>
            </div>
            <div className="product-price">${product.price}</div>
          </div>
        </div>
    })
    return (
      <div className={this.props.shouldShow? '': 'hidden'}>
        <a onClick={this.backToProductsView}>Back</a>
        <h2>Cart</h2>
        <div className="box products-grid cart-content">
          {products}
        </div>
      </div>
    )
  }
}

export default Cart
