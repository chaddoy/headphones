import React from 'react';
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap';
import { Tag } from '../styles';

function PriceTag({ current, previous }) {
  return (
    <Row>
      <Col xs="4" sm="3" md="2" lg="3">
        <Tag>${current}</Tag>
      </Col>
      {previous ? (
        <Col xs="8" sm="9" md="10" lg="9">
          <Tag previous>${previous}</Tag>
        </Col>
      ) : null}
    </Row>
  )
}

PriceTag.propTypes = {
  current: PropTypes.string.isRequired,
  previous: PropTypes.string,
}

export default PriceTag;
