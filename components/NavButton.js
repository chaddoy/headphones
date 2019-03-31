import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.a`
  cursor: pointer;
  font-size: 14px;
`;

function NavButton({ label, icon }) {
  return (
    <Button>{icon} {label}</Button>
  );
};

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default NavButton;
