import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { SEARCH_VENTA } from '../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onSearch: (word) =>
      dispatch({ type: SEARCH_VENTA, word })
});

const SearchButton = props => {
  const search = (event) => {
    props.onSearch(event.target.value);
  };

  if (props.show) {
    return (
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only">Buscar</label>
          <input type="password" className="form-control"  onChange={search} id="inputPassword2" placeholder="Buscar"/>
        </div>
    );
  }
  return null;
};

export default connect(() => ({}), mapDispatchToProps)(SearchButton);
