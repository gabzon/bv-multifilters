import React, { Component } from 'react';
import { baseUrl, locationApi } from '../../util/config';
import { Select } from 'antd';

const Option = Select.Option;

class LocationFilter extends Component {

  constructor(){
    super();
    this.state = {
      listOfLocations: [],
    }
  }

  componentWillMount(){

    let dataURL = baseUrl + locationApi;

    fetch(dataURL)
    .then(res => res.json())
    .then(res => {
      this.setState({
        listOfLocations: res
      })
    });
  }


  render(){
    let locations = this.state.listOfLocations.map((location, index) => {
      return <Option key={index} value={location.name}>{location.name} - {location.classroom_quartier.classroom_quartier} ({location.classroom_quartier.classroom_ville})</Option>
    })
    return(
      <div>
      <Select placeholder="Select a location" style={{ width: 300 }} onChange={this.props.handleLocationChange}>
        <Option value="all">All</Option>
        {locations}
        </Select>
      </div>
    )
  }
}

export default LocationFilter;
