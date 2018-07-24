import React, { Component } from 'react';
import ImageResults from './ImageResults';
import TextField from 'material-ui/TextField';
import SelectField  from 'material-ui/SelectField';
import MenuItem  from 'material-ui/MenuItem';

import axios from 'axios';

class Search extends Component {
  state = {
      searchText: '',
      amount: 15,
      apiUrl: 'https://pixabay.com/api/',
      apiKey: '4955692-60a0f978c1629b8210061d39c',
      images: []
  }
  onTextChange = (e) => {
    const searchVal = e.target.value;
    this.setState({ [e.target.name] : searchVal }, () => {
      if(searchVal === '') {
        this.setState({ images : [] });
      } else {
        axios
        .get(`https://cors-anywhere.herokuapp.com/${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}`)
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
      }
    });
  };
  onAmountChange = (e, index, value) =>  this.setState({ amount : value});

  render() {
    return (
      <div className="searchApp">
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for images"
          fullWidth={true}
          />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        {
          this.state.images.length > 0
          ? (<ImageResults images={this.state.images} />)
          : null
        }
      </div>
    )
  }
}
export default Search;