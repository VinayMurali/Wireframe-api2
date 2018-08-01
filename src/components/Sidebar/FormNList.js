import React, { Component } from 'react';
import './FormNList.css';
import AddForm from '../AddForm/AddForm';
import Tickets from '../Tickets/Tickets';

class FormNList extends Component {
  render() {
    return (
      <div className="Form-N-List">
          <AddForm />
          <Tickets />
      </div>
    );
  }
}

export default FormNList;
