import React from "react";
import moment from "moment";


const AcceptSingleWalk = (props) => {
  const singleWalk = props.singleWalk 

//  const renderTimeAndDate = (string) => {
//     const year = string.slice(0,4)
//     const month = string.slice(5,7)
//     const day = 
//     const hour = 
//     const minute = 
//    new Date ()

//    // 2022-03-14 16:40:17.897-04
//   }
  
  return (
    <tr>
        <td>{moment(singleWalk.startTime).format('MMMM Do YYYY, h:mm:ss a')}</td>
        {/* <td>{moment(singleWalk.startTime)}</td> */}
        <td>2</td>
        <td>Marie</td>
        <td>
        <button>Accept</button>
        </td>            
    </tr>
    
 )
};

export default AcceptSingleWalk;
