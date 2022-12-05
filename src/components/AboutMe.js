import React from 'react'
import headShot from '../resources/TheBoysClubBon.jpg'
export default function AboutMe() {
  return (
    <div class="about-me">
        <h2>About Me</h2>
        <div class="flex-container">
            <p>Bonnie Aué began playing the double bass at age 12 and recently completed her  
            Bachelor of Jazz performance at the Elder Conservatorium, achieving first class 
            honours. In 2018 she received the Southern Jazz Club top undergraduate award 
            for bass. Bonnie plays regularly in the Adelaide Jazz scene and has performed 
            at events such as the International Jazz day concert in 2018 and 2019, Hobart’s 
            Festival of Voices, and the Adelaide Cabaret Festival. During 2019 Bonnie 
            toured with the Hot Sardines, playing at the Blue Note in Tokyo, Beijing and 
            Honolulu. She has also performed with artists including Jo Lawry, Wil Vinson, 
            Anita Wardell, Emma Pask, Ross Irwin, Vardan Ovsepian, James Muller, 
            Mark Ferguson, Helena Kay, and Adam Page. Bonnie is involved with a wide 
            variety of local bands such as the Max Grynchuk big band, Thomas Voss Big Band,
            The Boy’s Club, Mark Curtis and the Flannelettes, and the Radial Quartet.</p>
            <img src={headShot}/>
        </div>
    </div>
  )
}
