import React, { Component } from 'react';
import { Query } from "react-apollo";
import { courseQuery } from './components/CustomQuery';


const CourseQuery = () => (
  <Query query={courseQuery}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      //const cours = data.courses.edges;
      //console.log(cours);
      return (
        <div name="course">
          hello
        </div>
      );
    }}
  </Query>
);

class Course extends Component {

  render(){
    return(
      <div>
        <h1>Hello</h1>
        <CourseQuery/>
      </div>
    )
  }
}

export default Course;

//const apollo = this.props.apollo;
//let myPosts = [];
// apollo.query({query:customQuery})
//   .then((result) => {
//     myPosts = result.data.courses.edges.map(item => {
//       console.log(item);
//       return item.node;
//     });
//     this.setState({
//       listOfPosts: myPosts,
//     })
//   }
// );
