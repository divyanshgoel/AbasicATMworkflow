/**
 * Created by prashant on 3/2/17.
 */
import React from 'react'
import Title from './Title'
export default class Header extends React.Component {

    constructor()
    {
      super()
    }

    render() {
      return(
        <header>
          <Title />
          <nav id="navbar">
            <ul>
              <li><a href="#" title="Link" target="">Home</a></li>
              <li><a href="#" title="Link" target="_blank">Technology</a></li>
              <li><a href="#" title="Link" target="_blank">Services</a></li>
              <li><a href="#" title="Link" target="_blank">Contact Us</a></li>
              <li><a href="#" title="Link" target="_blank">About Us</a></li>
            </ul>
          </nav>
        </header>
      )
    }
}
