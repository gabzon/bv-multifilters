import React, { Component } from 'react';

class DayFilter extends Component {

  constructor(){
    super();
    this.state = {
      listOfDays: [],
    }
  }

  componentWillMount(){
    const dataUrl = '';

    fetch(dataURL)
    .then(res => res.json())
    .then(res => {
      this.setState({
        listOfDays: res
      })
    });
  }

  render(){
    return(

    )
  }
}

export default DayFilter;
