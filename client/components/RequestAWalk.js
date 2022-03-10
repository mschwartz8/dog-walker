import React from "react";
import { connect } from "react-redux";

const dogs = [
  {
    id: 1,
    name: "Fluffy",
    personality: "Adventurous, Playful, Active, Cuddly",
    breed: "Beagle",
    size: "medium",
    imageURL:
      "https://images.pexels.com/photos/879788/pexels-photo-879788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    name: "Orchard",
    personality: "Energetic, Self-Sufficient, Happy with Alone Time",
    breed: "Greyhound",
    size: "large",
    imageURL:
      "https://images.pexels.com/photos/10117827/pexels-photo-10117827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 2,
    name: "Meena",
    personality: "Loyal, Good-natured, Curious",
    breed: "Alaskan Malmute",
    size: "large",
    imageURL:
      "https://images.pexels.com/photos/5745210/pexels-photo-5745210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const owners = [
  { id: 1, name: "Sheena" },
  { id: 2, name: "Keenan" },
  { id: 3, name: "Kels" },
];

class RequestAWalk extends React.Component {
  render() {
    return (
      <form id='request-walk-form'>
        <div className='input-walk-form'>
        <h2> Request A Walk Form</h2>
          <input
            className='form-control'
            type='text'
            name='content'
            placeholder='Your name...'
          />
          <label for='dog'>Choose your dog:</label>
          <select id='dog' name='dog'>
            {dogs.map((dog) => (
              <option value='dog'>{dog.name}</option>
            ))}
          </select>
          <label for='start'>Walk date:</label>
          <input
            type='date'
            id='start'
            name='walk-start'
            value='2022-01-22'
            min='2022-01-01'
            max='2025-12-31'
          />
          <label for='appt'>Choose a time for your dog's walk:</label>
          <input type='time' id='walk-time' name='walk-time' required />
          <span className='input-group-btn'>
            <label for='notes'>Notes for Dog Walk:</label>
            <textarea id='notes' name='notes' rows='4' cols='50'></textarea>
            <button className='btn' type='submit'>
              Submit!
            </button>
          </span>
        </div>
      </form>
    );
  }
}

export default RequestAWalk;
