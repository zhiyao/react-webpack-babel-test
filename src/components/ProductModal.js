import React from 'react'
import Modal from 'react-modal'
import Icon from './../images/cart.svg'

const modalStyles = {
  content: {
    position                : 'absolute',
    top                     : '40px',
    left                    : '140px',
    right                   : '140px',
    bottom                  : '140px',
    border                  : '1px solid #ccc',
    background              : '#fff',
    overflow                : 'auto',
    WebkitOverflowScrolling : 'touch',
    borderRadius            : '4px',
    outline                 : 'none',
    padding                 : '20px',
    zIndex                 : '10'
  }
}

class ProductModal extends React.Component {
  constructor() {
    super()
    this.state = {
      modalDescriptionExpand: false
    }
  }
  closeModal() {
    this.setState({
      modalDescriptionExpand: false
    });
    this.props.closeModal()
  }
  toggleModalDescription() {
    if(this.state.modalDescriptionExpand) {
      this.setState({modalDescriptionExpand: false})
    } else {
      this.setState({modalDescriptionExpand: true})
    }
  }
  addProductToCart(product) {
    this.props.addProductToCart(product)
  }

  render() {
    let focusProduct = this.props.modalProduct
    const productDescriptionExpand = this.state.modalDescriptionExpand ? 'product-description' : 'product-description summarize';
    const moreExpand = this.state.modalDescriptionExpand ? 'more contract' : 'more'
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.closeModal.bind(this)}
        style={modalStyles} >
        <div className="row product-modal-content">
          <div className="two columns">
            <h3 className="title">Detail</h3>
          </div>
          <div className="four columns">
            <img className="product-image" src={require(`./../images/${focusProduct.image}`)} />
          </div>
          <div className="six columns">
            <h4 className="product-name">{focusProduct.name}</h4>
            <h5 className="product-measurement">{focusProduct.measurement}</h5>
            <div className="product-description-box">
              <p className={productDescriptionExpand}>{focusProduct.desc}</p>
              <div className="more-wrapper">
                <a className={moreExpand} onClick={this.toggleModalDescription.bind(this)}></a>
              </div>
            </div>
            <div className="product-price">${focusProduct.price}</div>
            <div className="product-add-to-cart-border">
              <a onClick={this.addProductToCart.bind(this, focusProduct)} className="button product-add-to-cart">
                <img className="button-icon" src={Icon} />
                <span className="text">Add to cart</span>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default ProductModal
