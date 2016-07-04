import React from 'react'
import './scss/main.scss'

import Banner from './components/Banner'
import FilterBox from './components/FilterBox'
import ProductsGrid from './components/ProductsGrid'
import Cart from './components/Cart'
import ProductModal from './components/ProductModal'

var data = require("json!./products.json");

const productDefault = {
  name: 'Product Name',
  price: '99.99',
  desc: 'This is product description',
  measurement: '1L',
  image: 'product1.jpg'
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTab: 'brand',
      showCart: false,
      modalIsOpen: false,
      modalProduct: productDefault,
      cartContent: []
    };
  }
  changeTab(tab) {
    this.setState({currentTab: tab.name})
  }
  backToProductsView() {
    this.setState({showCart: false});
  }
  addProductToCart(product) {
    let cartArray = this.state.cartContent
    cartArray.push(product)
    this.setState({
      showCart: true,
      modalIsOpen: false,
      cartContent: cartArray
    })
  }
  openModal(product) {
    this.setState({
      modalProduct: product,
      modalIsOpen: true,
    });
  }
  closeModal() {
    this.setState({
      modalProduct: productDefault,
      modalIsOpen: false
    })
  }
  render() {
    let hideProductsView = this.state.showCart ? 'hidden' : ''
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <div className={hideProductsView}>
              <Banner
                imageSource={data.banner}></Banner>
              <FilterBox
                filters={data.filters}
                currentTab={this.state.currentTab}
                changeTab={this.changeTab.bind(this)}></FilterBox>
              <ProductsGrid
                openModal={this.openModal.bind(this)}
                addProductToCart={this.addProductToCart.bind(this)}
                products={data.products}></ProductsGrid>
            </div>
            <Cart
              backToProductsView={this.backToProductsView.bind(this)}
              cartContent={this.state.cartContent}
              shouldShow={this.state.showCart} ></Cart>
            <ProductModal
              modalIsOpen={this.state.modalIsOpen}
              modalProduct={this.state.modalProduct}
              closeModal={this.closeModal.bind(this)}
              addProductToCart={this.addProductToCart.bind(this)}
              ></ProductModal>
          </div>

        </div>
      </div>
    );
  }
}

export default App
