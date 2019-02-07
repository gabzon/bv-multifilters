//https://codepen.io/Dmitriy_Dubravin/pen/YWZjWQ

import React, { Component } from 'react';
//import Filters from './components/Filters';
import LocationFilter from './components/Filters/LocationFilter';
import StyleFilter from './components/Filters/StyleFilter';
import LevelFilter from './components/Filters/LevelFilter';
//import Lesson from './components/Lesson';
import LessonList from './components/LessonList';
import { createFilter } from './util/Filter';
import { createSorter } from './util/Sort';
import { baseUrl, apiPath } from './util/config';
//import Posts from './components/Posts';
import { Row, Col } from 'antd';

import './App.css';
import './css/schedule.css';
import 'antd/dist/antd.css';


class Schedule extends Component {
  state = {
    data: [],
    style: 'all',
    level: 'all',
    location: 'all',
    day: 'all',
  }

  handleStyleChange = this.handleStyleChange.bind(this);
  handleLevelChange = this.handleLevelChange.bind(this);
  handleLocationChange = this.handleLocationChange.bind(this);

  componentDidMount () {
    let dataURL = baseUrl + apiPath;
    fetch(dataURL)
    .then(res => res.json())
    .then(this.onLoad);
  }

  onLoad = (data) => {
    this.setState({
      data: this.parseData(data)
    });
  }

  parseData (data) {
    let sorters = [
      {
        property: 'start_time'
      },
      {
        property: 'location'
      }
    ];

    if (data && data.length) {

      if (Array.isArray(sorters) && sorters.length) {
        data.sort(createSorter(...sorters));
      }
    }

    return data;
  }

  handleStyleChange(value){
    this.setState({
      style: value
    })
  }

  handleLevelChange(value){
    this.setState({
      level: value
    })
  }

  handleLocationChange(value){
    console.log(value);
    this.setState({
      location: value
    })
  }

  render () {
    const { data } = this.state;
    return  <div className="app-react" style={{margin:'20px 50px'}}>
      <Row gutter={16}>
        <Col className="gutter-row" xs={24} sm={24} md={8} lg={8} xl={8}>
          <StyleFilter handleStyleChange={this.handleStyleChange }/>
        </Col>
        <Col className="gutter-row" sm={24} md={8} lg={8} xl={8}>
          <LevelFilter handleLevelChange={this.handleLevelChange}/>
        </Col>
        <Col className="gutter-row" sm={24} md={8} lg={8} xl={8}>
          <LocationFilter handleLocationChange={this.handleLocationChange}/>
        </Col>
      </Row>
      <hr/>
      <div className="lessons" >
        { data ? this.renderData(data) : this.renderLoading() }
      </div>
    </div>
  }

  renderData(data){
    if (data && data.length) {

      let filters = [
        {
          property: 'style',
          name: this.state.style,
        },
        {
          property: 'level',
          name: this.state.level
        },
        {
          property: 'location',
          name: this.state.location
        }
      ];


      // let filteredData = data.filter( lesson => {
      //   if (this.state.style === 'all') {
      //     return true;
      //   }
      //   console.log(this.state.level);
      //   return lesson.style.includes(this.state.style)
      // })

      let filteredData = [];
      if (Array.isArray(filters) && filters.length) {
        filteredData = data.filter(createFilter(...filters));
      }

      // let lessons = filteredData.map((item, i) => {
      //   return  <Lesson key={i} course={item} />
      // });

      return <LessonList list={filteredData}/>
    } else {
      return <div>Loading...</div>
    }
  }

  renderLoading () {
    return <div>Loading...</div>
  }
}

export default Schedule;


// let filteredData = data.filter( lesson => {
//   if (this.state.style === 'all') {
//     return true;
//   }
//   console.log(this.state.level);
//   return lesson.style.includes(this.state.style)
// })
//
// let lessons = filteredData.map((item, i) => {
//   return  <Lesson key={i} course={item} />
// });
