import React from 'react';

class Posts extends React.Component {
  constructor(){
    super();
    this.orderByDay = this.orderByDay.bind(this);
  }

  orderByDay(day, item){
    if(day === item.day){
      return(
        <div style={{border: '1px solid red', margin:'10px'}}>
          <div>{item.type}</div>
          <div>{item.color}</div>
          <div>{item.sex}</div>
        </div>
      )
    }
  }

  render(){

    const monday = this.props.posts.map((item) => {
      return this.orderByDay('Monday',item);
    })

    const tuesday = this.props.posts.map((item) => {
      return this.orderByDay('Tuesday',item);
    })

    return(
      <div className="boxes">
        <div className="box">
          <h1>Monday</h1>
          {monday}
        </div>
        <div className="box">
          <h1>Tuesday</h1>
          {tuesday}
        </div>
      </div>
    )
  }
}

export default Posts;


// {this.props.posts.map((item,i) => {
//   return (
//     <div key={i} className="box" style={{backgroundColor: item.color, border: '1px solid black', color:'gray'}}>
//       <div>{item.type}</div>
//       <div>{item.color}</div>
//       <div>{item.sex}</div>
//       <div>{item.day}</div>
//     </div>
//   )
// })}
//
//
