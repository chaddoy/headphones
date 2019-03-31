import React, { Component } from 'react';
import { Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Alert } from 'reactstrap';

import { MainContent, ColorSection, HRLine, CartButton } from '../styles'
import NavButton from '../components/NavButton';
import ProductTitle from '../components/ProductTitle';
import ProductDetailsTab from '../components/ProductDetailsTab';
import PriceTag from '../components/PriceTag';

export default class ProductDetails extends Component {
  state = {
    dropdownOpen: false,
    btnLabel: 'Add to Cart',
    label: 'Color',
    colors: [],
    image: '',
    submitting: false,
    submitted: false,
    showAlert: false,
  }

  componentDidMount = () => {
    const { product } = this.props;
    this.setState({
      colors: product.colors,
      label: product.colors[0].color.toUpperCase(),
      image: product.colors[0].image
    });
  }

  changeColor = ({ color, image }) => {
    this.setState({
      label: color.toUpperCase(),
      image,
    });
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onSelect = (color) => {
    this.changeColor(color);
  }

  onAddCart = () => {
    if (!this.state.submitted) {
      this.setState({
        btnLabel: 'Loading...',
        submitting: true,
      });
  
      setTimeout(() => {
        this.setState({
          btnLabel: 'View Cart',
          submitting: false,
          submitted: true,
          showAlert: true,
        });
      }, 2000);
    }
  }

  onCloseAlert = () => {
    this.setState({
      showAlert: false,
    });
  }

  render() {
    const { label, colors, image, btnLabel, submitting } = this.state;
    const { product, productTabs } = this.props;

    return (
      <MainContent>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" className="navbtn-col">
            <Col lg="6" className="nav-wrap">
              <NavButton label="All products" icon="&#8592;" />
            </Col>
          </Col>

          <Col xs="12" sm="12" md="12" lg="6" className="product-details">
            <Col className="title-col">
              <ProductTitle title={product.title} subtitle={product.subtitle} />
            </Col>

            <Col className="no-padding no-margin">
              <ProductDetailsTab tabs={productTabs} />
            </Col>

            <Col className="price-col">
              <PriceTag current={product.price.current} previous={product.price.previous} />
            </Col>

            <Col className="colors-col">
              <ColorSection>
                <p>COLORS</p>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle className="color-btn" caret>
                    {label}
                  </DropdownToggle>
                  <DropdownMenu>
                    {colors.map(( color ) => (
                      <DropdownItem key={`color-${color.id}`} onClick={() => this.onSelect( color )}>
                        {color.color.toUpperCase()}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </ButtonDropdown>
              </ColorSection>
            </Col>
            
            <HRLine />

            <Col className="cart-btn">
              <Alert color="success" isOpen={this.state.showAlert} toggle={this.onCloseAlert}>
                Item added to cart!
              </Alert>
              
              <CartButton color="primary" disabled={submitting} onClick={this.onAddCart}>
                {btnLabel}
              </CartButton>
            </Col>
          </Col>

          <Col className="product-image">
            <img src={image} width="100%" />
          </Col>
        </Row>
      </MainContent>
    )
  }
}
