import React, { Component } from 'react';
import { FormGroup, ControlLabel,FormControl } from 'react-bootstrap'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class CustomersEnterpriseModal extends React.Component {
 state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  getFieldValue() {
    const newRow = {};

    this.props.columns.forEach((column, i) => {
      newRow[column.field] = this.refs[column.field].value;
    }, this);
    return newRow;
  }
  render() {
    const { columns, validateState } = this.props;
    return (
      <div className='modal-body'>
        <h2 style={ { color: 'red' } }>Custom body</h2>
        <div>
          {
            this.props.columns.map((column, i) => {
              const {
                editable,
                format,
                field,
                name,
                hiddenOnInsert
              } = column;
             
              if (hiddenOnInsert) {
                // when you want same auto generate value
                // and not allow edit, for example ID field
                return  <input type="hidden" ref={column.field} value='1'/>;
              }
              const error = validateState[field] ?
                (<span className='help-block bg-danger'>{ validateState[field] }</span>) :
                null;
              return (
                <div className='form-group' key={ field }>
                  <label>{ name }</label>
                  <input ref={field} type='text' />
                  { error }
                </div>
              );
            })
          }
        </div>
        <Select
          name="form-field-name"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          searchable={true}
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },{ value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
      />
      </div>
    );
  }
}

export default CustomersEnterpriseModal