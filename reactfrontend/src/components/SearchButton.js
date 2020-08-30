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

        <input type="text" onChange={search}></input>

    );
  }
  return null;
};

export default connect(() => ({}), mapDispatchToProps)(SearchButton);
