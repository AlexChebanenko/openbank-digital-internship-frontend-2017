import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RoundController.css'


class RoundController extends Component {

  render() {
    return (
      <div className="round-controller">
        <div className="round-controller_selector">
        </div>
        <div className="round-controller_scale">
          <div className="round-controller_info-panel">
            <div className="round-controller_info-metrics">
            </div>
          </div>
          <div className="round-controller_scale-limits">
          </div>
        </div>
        <div className="round-controller_info-value">
          <span>20</span>
        </div>
        <div className="round-controller_limits-value">
        </div>
      </div>
    );
  }
}

export default RoundController;

export const ROUND_CONTROLLER_TYPES = {
  LAMP: 'LAMP'
};