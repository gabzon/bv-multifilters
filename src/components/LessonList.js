import React, { Component } from 'react';
import daysList from '../util/Days';
import { baseUrl, dayApi } from '../util/config';
import Lesson from './Lesson';

class LessonList extends Component {
  constructor(){
    super();
    this.state = {
      daysOfWeek: [],
    }
    this.dayLessons = this.dayLessons.bind(this);
  }

  componentWillMount(){
    let dataURL = baseUrl + dayApi;

    fetch(dataURL)
    .then(res => res.json())
    .then(res => {
      this.setState({
        daysOfWeek: res
      })
    });
  }

  dayLessons(day){
    const upper = day.replace(/^\w/, c => c.toUpperCase());
    let lessons = this.props.list.filter(lesson => {
      return lesson.day.includes(upper)
    });
    return lessons;
  }


  render(){
    // let monday = this.props.list.filter(item => {
    //   return item.day.includes('Monday')
    // });

    let workingDays = this.state.daysOfWeek.map((day, i) => {
      return day.name.toLowerCase();
    })

    let orderDays = daysList.filter( day => {
      return workingDays.includes(day.name)
    })



    return <div className="list-box">
      {
        orderDays.map(day => {
          return <div key={day.position} className="day-box">
            <h1>{day.name}</h1>
            {this.dayLessons(day.name).map((item, i)=>{
              if (item.type === 'class') {
                return  <Lesson key={i} course={item} />
              }
              return null;           
            })}
          </div>
        })
      }
    </div>
  }
}

export default LessonList;


// let lessons = filteredData.map((item, i) => {
//   return  <Lesson key={i} course={item} />
// });
