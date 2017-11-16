import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import './PanelContainer.css'

const PanelContainer = (ComposedComponent) => class extends Component {
  constructor (props) {
    super(props)
	 }

	render() {
    return (
      <div>
        <h2 className="PanelContainer-title">Texto de la sección</h2>
	      <div className="PanelContainer-panel">
	       <ComposedComponent {...this.props} { ...this.state } /> 
	      </div>
	    </div>
    )
	}
}

export default PanelContainer
