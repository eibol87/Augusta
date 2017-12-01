import React, { Component } from 'react';
import './PanelContainer.css'

const PanelContainer = (ComposedComponent) => class extends Component {
  	render() {
    return (
      <div>
        <h2 className="PanelContainer-title"></h2>
	      <div className="PanelContainer-panel">
	       <ComposedComponent {...this.props} { ...this.state } /> 
	      </div>
	    </div>
    )
	}
}

export default PanelContainer
