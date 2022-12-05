import React from 'react'

export default function HobbiesList(props) {
    const myHobbies = props.myHobbies
    //
    const listItems = myHobbies.map((hobby) =>
    <li key={hobby}>{hobby}</li>);
  return (
    <div class="hobbies">
        <h2>My Hobbies</h2>
        <ul>{listItems}</ul>
    </div>
  )
}
