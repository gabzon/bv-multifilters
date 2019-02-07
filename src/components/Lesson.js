import React from 'react';
import { Card } from 'antd';

const Lesson = (props) => {
  return(
    <Card hoverable size="small" style={{ minWidth: 250, margin: '0 10px 10px 0'}}>
      <span>{props.course.start_time}-{props.course.end_time}</span>
      <h3>{props.course.official_title}</h3>
      <span>
        level: {props.course.level} <br/> teacher: {props.course.teacher} <br/> location: {props.course.location}
      </span>
    </Card>
  )
}

export default Lesson;
// <p>{props.course.start_date} - {props.course.end_date}</p>
// <p>{props.course.day}</p>
// <p>{props.course.style}</p>
