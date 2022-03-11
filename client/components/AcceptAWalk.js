import React from "react";

const walks = [
  {
    id: 1,
    startTime: "2022-03-11 15:40:17.897-05",
    notes: "please bring his favorite chew toy that looks like cheeseburger",
    dogId: 1,
  },
];

class AcceptAWalk extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Time</th>
          <th>Dog #</th>
          <th>Contact</th>
          <th>Shift</th>
        </tr>
        <tr>
          <td>1:00</td>
          <td>2</td>
          <td>Marie</td>
          <td>
            <button>Accept</button>
          </td>
        </tr>
        <tr>
          <td>3:00</td>
          <td>1</td>
          <td>Jerry</td>
          <td>
          <button>Accept</button>
          </td>
        </tr>
      </table>
    );
  }
}

export default AcceptAWalk;
