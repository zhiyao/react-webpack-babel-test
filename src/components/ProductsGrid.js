import React from 'react'
import Icon from './../images/cart.svg'
import Product from './Product'

class ProductsGrid extends React.Component {
  constructor() {
    super()
  }
  openModal(product) {
    this.props.openModal(product)
  }
  addProductToCart(product) {
    this.props.addProductToCart(product)
  }
  render() {
    let products = this.props.products.map( product => {
      return <Product
                addProductToCart={this.addProductToCart.bind(this)}
                openModalDetail={this.openModal.bind(this)}
                key={product.image}
                data={product} />
    })
    return (
      <div className="box products-grid">
        {products}
      </div>
    )
  }
}

export default ProductsGrid
