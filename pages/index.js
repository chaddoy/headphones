import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Normalize } from 'styled-normalize';

import { PRODUCT, PRODUCT_TABS } from '../product-info'
import { GlobalStyle } from '../styles'
import HeadTags from '../components/HeadTags';
import ProductDetails from '../components/ProductDetails';

const Index = () => (
  <React.Fragment>
    <Normalize />
    <HeadTags title={PRODUCT.title} />
    <GlobalStyle />
    <ProductDetails product={PRODUCT} productTabs={PRODUCT_TABS} />
  </React.Fragment>
)

export default Index