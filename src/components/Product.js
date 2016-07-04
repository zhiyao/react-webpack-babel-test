import React from 'react';
import Icon from './../images/cart.svg'

class Product extends React.Component {
  openModal(product) {
    this.props.openModalDetail(product);
  }
  addProductToCart(product) {
    this.props.addProductToCart(product)
  }
  render() {
    const product = this.props.data
    return (
      <div className="product-box">
        <a href="#" onClick={this.openModal.bind(this, product)}>
          <img className="product-image" src={require(`./../images/${product.image}`)} />
        </a>
        <div className="product-details">
          <div className="product-description">
            <h4 className="product-name">{product.name}</h4>
            <h5 className="product-measurement">{product.measurement}</h5>
          </div>
          <div className="product-price">${product.price}</div>
        </div>
        <a className="button product-add-to-cart">
          <img className="button-icon" src={Icon} />
          <span onClick={this.addProductToCart.bind(this, product)} className="text">Add to cart</span>
        </a>
      </div>
    )
  }
}

export default Product;
