import styled, { createGlobalStyle } from 'styled-components';
import { Container, Nav, NavItem, NavLink, TabContent, Button } from 'reactstrap';

const mainTextColor = '#4a4a4a';
const borderColor = '#dee2e6';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    height: 100%;
    width: 100%;
    background-color: #EDEDED;
    color: ${mainTextColor};
  }

  .no-margin {
    margin: 0;
  }

  .no-padding {
    padding: 0;
  }

  .navbtn-col {
    padding: 0px 20px;

    .nav-wrap {
      padding: 20px 0px 0px 0px;
      border-right: 1px solid ${borderColor};
    }
  }

  .product-details {
    border-right: none;
    padding: 0;
    margin: 0;

    .navbtn-col, .colors-col, .title-col, .cart-btn {
      padding: 20px 40px;
    }
    
    @media (min-width: 992px) {
      border-right: 1px solid ${borderColor};
    }

    .price-col {
      padding: '0px 20px'
    }
  }
`;

export const MainContent = styled(Container)`
  background-color: white;
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
    
  @media (max-width: 992px) {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    /* optional */
    -webkit-box-align: start;
    -moz-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;

    .product-details {
      -webkit-box-ordinal-group: 2;
      -moz-box-ordinal-group: 2;
      -ms-flex-order: 2;
      -webkit-order: 2;
      order: 2;
    }
  
    .product-image {
      -webkit-box-ordinal-group: 1;
      -moz-box-ordinal-group: 1;
      -ms-flex-order: 1;
      -webkit-order: 1;
      order: 1;
    }
  }
`;

export const DetailTabs = styled(Nav)`
  border-bottom: 1px solid ${borderColor};
`;

export const DetailTabitem = styled(NavItem)`
  border-bottom: 1px solid ${borderColor};
  border-top: none;
  padding-bottom: 0px;
  padding-left: 20px;

  &:first-child {
    padding-left: 40px;
  }
`;

export const DetailTabLink = styled(NavLink)`
  border: none;
  cursor: pointer;

  &.nav-link.active {
    border: none;
    border-bottom: 2px solid #2186fa;

    &:hover {
      border: none;
      border-bottom: 2px solid #2186fa;
    }
  }

  &.nav-link:hover {
    border: 1px solid transparent;
    background-color: #f7f7f7;
  }
`;

export const DetailContents = styled(TabContent)`
  padding: 40px 20px 9px 40px;
  font-size: 14px;
  font-weight: 300;

  p {
    line-height: 1.8;
  }
`;

export const Tag = styled.div`
  font-weight: 505;
  font-size: 24px;
  text-decoration: ${props => props.previous ? 'line-through': 'none'};
  color: ${props => props.previous ? '#ccc': mainTextColor};
  padding: 0px 30px;
  padding-left: ${props => props.previous ? '0px': '30px'};
`;

export const ColorSection = styled.div`
  margin-top: 40px;
  padding: 0px 5px;

  p {
    font-size: 20x;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .color-btn, .color-btn:active, .color-btn:visited, .color-btn:focus, .color-btn:focus-within {
    background-color: #fff !important;
    border-color: ${borderColor} !important;
    color: ${mainTextColor} !important;
  }

  .dropdown-header {
    cursor: pointer;
    color: ${mainTextColor} !important;

    &:hover {
      background-color: #ccc;
    }
  }
`;

export const HRLine = styled.div`
  border-top: 1px solid ${borderColor};
`;

export const CartButton = styled(Button)`
  margin-top: 10px;
  font-weight: bold;
  min-width: 200px;
  padding: 15px 20px;
  text-transform: uppercase;
`;
