import React from 'react';
import loadScript from '../utils/loadScript.jsx';

class AdCodeFund extends React.Component {
  componentDidMount() {
    const scriptSlot = document.querySelector('#code-fund-script-slot');

    // Concurrence issues
    if (!scriptSlot) {
      return;
    }

    loadScript('https://codefund.io/properties/137/funder.js?theme=unstyled', scriptSlot);
  }

  render() {
    return (
      <React.Fragment>
        <span id="code-fund-script-slot" />
        <span id="codefund" />
      </React.Fragment>
    );
  }
}

export default AdCodeFund;