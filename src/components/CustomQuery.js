import gql from "graphql-tag";

const courseQuery = gql`
{
  courses {
    edges{
      node{
        id
        title
        teacher
        day
        classroom
        startDate
        startTime
      }
    }
  }
}
`;

const taxQuery = gql`
{
  levels{
    edges{
      node{
        id
        name
      }
    }
  }
  styles {
    edges{
    	node{
        id
        name
      }
    }
  }
  daysOfWeek{
    edges{
      node{
        id
        name
      }
    }
  }
  classrooms{
    edges{
      node{
        id
        name
      }
    }
  }
}`;

export { courseQuery, taxQuery };


//                 id
//                 title
//                 slug
//                 link
//         				courseTitle
//         				startDate
//         				endDate
//         				startTime
//         				endTime
//         				fullPrice
//         				reducedPrice
//         				teacher
//         				alert
//         				courseType
//         				coverImage
//         				thumbnail
//         				style
//         				level
//         				day
//         				classroom
//                 coverImage
//                 reducedPrice
//                 day
//                 classroom
//                 content
