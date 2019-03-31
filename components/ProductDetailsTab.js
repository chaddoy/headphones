import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import { TabPane, Row, Col } from 'reactstrap';
import { DetailTabs, DetailTabitem, DetailTabLink, DetailContents } from '../styles';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <DetailTabs tabs style={{ padding: '0px' }}>
          {this.props.tabs.map((tab) => (
            <DetailTabitem key={`tab-${tab.id}`}>
              <DetailTabLink
                className={classnames({ active: this.state.activeTab === tab.id })}
                onClick={() => { this.toggle(tab.id); }}
              >
                {tab.label.toUpperCase()}
              </DetailTabLink>
            </DetailTabitem>
          ))}
        </DetailTabs>

        <DetailContents activeTab={this.state.activeTab}>
          {this.props.tabs.map((tab) => (
            <TabPane key={`pane-${tab.id}`} tabId={tab.id}>
              <Row>
                <Col>
                  <p>{tab.content}</p>
                </Col>
              </Row>
            </TabPane>
          ))}
        </DetailContents>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductDetails;
