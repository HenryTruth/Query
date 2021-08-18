import React from 'react'
import './ErrorPage.scss';


export default function ErrorPage() {
    return (
        <div className="ErrorPage">
            

        <h1> OOP'S... THIS <span>P</span>AGE ISN'T FOUND !</h1>

        <h4>...I'm working on it,
        <br /> don't worry!  </h4>
      <ul>
      <li> Check if the URL provided is correct </li>
<li>Make sure you are connected to a network </li>
<li> Check if you are logged in  </li>
<li> if nothing works, <a href="/"> give us a report </a> or go back to <a href="/home"> home</a>   </li>
       </ul>


        </div>

    )
}
