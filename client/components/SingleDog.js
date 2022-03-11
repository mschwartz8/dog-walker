import React from "react";
import { connect } from "react-redux";

class SingleDog extends React.Component {

    render () {
        return (
            <div>
                <h1 class="dog-title">{dogs[0].name}</h1>
                <div>
                <img class='dog-photo' src={dogs[0].imageURL} width={400} height={250} className="center" />
                    <ul class="dog-features">
                    <li> Personality: {dogs[0].personality}</li>
                    <li> Breed: {dogs[0].breed}</li>
                    <li> Size: {dogs[0].size}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SingleDog;

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