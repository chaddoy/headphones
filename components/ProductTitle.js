import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-top: 25px;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    color: #aaaaaa;
  }
`;

function ProductTitle({ title, subtitle }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Wrapper>
  );
}

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default ProductTitle;
